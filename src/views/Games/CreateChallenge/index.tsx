import { ChangeEvent, FormEvent, useEffect, useState, useMemo } from "react";
import { CardBody, useModal } from "@pancakeswap/uikit";
import { useWeb3React } from "@web3-react/core";
import times from "lodash/times";
import isEmpty from "lodash/isEmpty";
import { useInitialBlock } from "state/block/hooks";
import { SnapshotCommand } from "state/types";
import useToast from "hooks/useToast";
import useWeb3Provider from "hooks/useActiveWeb3React";
import { signMessage } from "utils/web3React";
import { useTranslation } from "contexts/Localization";
import ConnectWalletButton from "components/ConnectWalletButton";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  sendSnapshotData,
  Message,
  generateMetaData,
  generatePayloadData,
} from "../helpers";
import { FormErrors } from "./styles";
import Choices, { Choice, makeChoice, MINIMUM_CHOICES } from "./Choices";
import { combineDateAndTime, getFormErrors } from "./helpers";
import { FormState } from "./types";
import { ADMINS } from "../config";
import NavGame from "../NavGame";
import { CID, create } from "ipfs-http-client";
import ReactMarkdown from "react-markdown";
import { useMediaPredicate } from "react-media-hook";
import { useDaoStakingContract } from "hooks/useContract";
import moment from "moment";
import { StageNav } from "../Nav";

// import MDEditor from './MDEdit,or'

// const MDEditor = dynamic(
//   () => import("@uiw/react-md-editor"),
//   { ssr: false }
// );

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

const EasyMde = dynamic(() => import("components/EasyMde"), {
  ssr: false,
});

const CreateChallenge = (props) => {
  const router = useRouter();
  const [state, setState] = useState<FormState>({
    name: "",
    body: "",
    choices: times(MINIMUM_CHOICES).map(makeChoice),
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
    snapshot: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [votingLevel, setVotingLevel] = useState(0);
  const [challengeDetails, setChallengeDetails] = useState("");
  const [challengeInputName, setChallengeInputName] = useState("");

  const [fieldsState, setFieldsState] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [images, setImages] = useState<{ cid: CID; path: string }[]>([]);
  const { t } = useTranslation();
  const { account } = useWeb3React();
  const initialBlock = useInitialBlock();
  const { push } = useRouter();
  const { library, connector } = useWeb3Provider();
  const { toastSuccess, toastError } = useToast();
  const {
    name,
    body,
    choices,
    startDate,
    startTime,
    endDate,
    endTime,
    snapshot,
  } = state;

  const contract = useDaoStakingContract();

  let roundId;
  const roundInfo = JSON.stringify({
    id: roundId,
    startingTime: moment().unix(),
  });
  const createRound = async () => {
    await server.files.mkdir(`/Rounds/Round-${roundId}`);
    await server.files.mkdir(`/Rounds/Round-${roundId}`);

    await server.files.mkdir(`/Rounds/round-${roundId}/videos`);
    await server.files.mkdir(`/Rounds/Round-${roundId}/votes`);
    await server.files.mkdir(`/Rounds/Round-${roundId}/votes/stage-2`);
    await server.files.mkdir(`/Rounds/Round-${roundId}/votes/stage-3`);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // console.log(body)
    if (votingLevel == 2 || votingLevel == 3) {
      // await createRound();
      try {
        setIsLoading(true);
        const challenge = JSON.stringify({
          version: "1.0",
          timestamp: moment().unix(),
          type: "challenge",
          payload: {
            name: challengeInputName,
            body: challengeDetails,
            creator: account,
            created: new Date(),
          },
        });

        const sig = await signMessage(connector, library, account, challenge);
        // alert(challengeDetails)
        if (sig) {
          const forIPFS = JSON.stringify(
            {
              version: "1.0",
              timestamp: moment().unix(),
              type: "challenge",
              signiture: sig.toString(),
              payload: {
                name: challengeInputName,
                body: challengeDetails,
                creator: account,
                created: new Date(),
              },
            },
            null,
            2
          );

          const challengeName =
            `challenge` + `-${challengeInputName.replaceAll(" ", "-")}`;

          try {
            await server.files.mkdir(
              `/Rounds/Round-1/challenges/${challengeName}`
            );
          } catch (err) {
            // @ts-ignore
            console.log(err.message);
            toastError(
              t("Challenge Error"),
              t(
                "Every Challenge should have unique Title, Please choose unique one"
              )
            );
            return;
          }

          await server.files.write(
            `/Rounds/Round-1/challenges/${challengeName}/info.json`,
            forIPFS,
            { create: true }
          );
          setIsLoading(false);
          toastSuccess(t("challenge created!"));
        } else {
          toastError(t("Error"), t("Unable to sign payload"));
        }
      } catch (error) {
        toastError(t("File Error"), (error as Error)?.message);
        // console.error(error)
        setIsLoading(false);
      }
    } else {
      toastError(
        "Errorr",
        "You need at least level2 DAO ranking to create challenge"
      );
    }
  };

  const updateValue = (key: string, value: string | Choice[] | Date) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));

    // Keep track of what fields the user has attempted to edit
    setFieldsState((prevFieldsState) => ({
      ...prevFieldsState,
      [key]: true,
    }));
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = evt.currentTarget;
    updateValue(inputName, value);
  };

  const handleEasyMdeChange = (e) => {
    // console.log(value);
    setChallengeDetails(e.target.value);
    // updateValue("body", value);
  };

  const handleChoiceChange = (newChoices: Choice[]) => {
    updateValue("choices", newChoices);
  };

  const handleDateChange = (key: string) => (value: Date) => {
    updateValue(key, value);
  };

  const options = useMemo(() => {
    return {
      hideIcons:
        account && ADMINS.includes(account.toLowerCase())
          ? []
          : ["guide", "fullscreen", "preview", "side-by-side", "image"],
    };
  }, [account]);

  useEffect(() => {
    userVotingLevel();
    // if (initialBlock > 0) {
    //   setState((prevState) => ({
    //     ...prevState,
    //     snapshot: initialBlock,
    //   }));
    // }
  }, []);

  const userVotingLevel = async () => {
    let amount = await contract.getVoterTotalStakeAmount(account);
    amount = amount;
    // console.log(amount);
    // alert(amount)
    let level = getLevel(amount);
    setVotingLevel(level);
  };

  const getLevel = (amount) => {
    // console.log(process.env.NEXT_PUBLIC_LEVEL1)
    if (
      amount >= process.env.NEXT_PUBLIC_LEVEL1 &&
      amount < process.env.NEXT_PUBLIC_LEVEL2
    ) {
      return 1;
    }
    if (
      amount >= process.env.NEXT_PUBLIC_LEVEL2 &&
      amount < process.env.NEXT_PUBLIC_LEVEL3
    ) {
      return 2;
    }
    if (amount >= process.env.NEXT_PUBLIC_LEVEL3) {
      return 3;
    }
  };

  return (
    <div className="card h-100">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="d-flex align-items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 239 116"
              xmlSpace="preserve"
              style={{
                width: "80px",
                fill: "rgb(255, 0, 204)",
                marginRight: "5px",
              }}
            >
              <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z" />
              <g>
                <path
                  className="st0"
                  d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z"
                />
                <path
                  className="st0"
                  d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z"
                />
                <path
                  className="st0"
                  d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z"
                />
                <path
                  className="st0"
                  d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z"
                />
              </g>
            </svg>
            <h4 style={{ fontSize: "60px" }}>GAME</h4>
          </div>
          <div className="d-flex align-items-center mb-2">
            <h4>CREATE A CHALLENGE</h4>
          </div>
          <p>
            Describe your challenge below at the best of your capabilities and
            submit it.
          </p>
          <div
            className="flex-row d-flex mt-5"
            style={{ justifyContent: "center" }}
          >
            <div
              className="challenge-form flex-column"
              style={{ flex: "0 80%" }}
            >
              <div>
                <div className="bg-input mb-3 py-2 px-3 rounded ">
                  <div className="d-flex justify-content-between align-items-center">
                    <input
                      type="text"
                      placeholder="Your Challenge Title"
                      onChange={(e) => setChallengeInputName(e.target.value)}
                      required
                      className="form-control w-100"
                      style={{ fontSize: "20px" }}
                    />
                    <h3 className=" pt-3 pb-3 " style={{ color: "#8e8e8e" }}>
                      SOSX
                    </h3>
                  </div>
                </div>
                <div className="bg-input bg-input mb-3 py-2 px-3 rounded ">
                  <textarea
                    id="story"
                    name="story"
                    onChange={(e) => setChallengeDetails(e.target.value)}
                    rows={20}
                    cols={33}
                    // defaultValue={"Explain in detail what your challenge is...\n"}
                    placeholder={"Explain in detail what your challenge is"}
                  />

                  {/* @ts-ignore */}
                  {/* <EasyMde
              id="body"
              name="body"
              onTextChange={handleEasyMdeChange}
              value={body}
              options={options}
              required
            /> */}
                </div>
              </div>
              {account ? (
                <button
                  type="submit"
                  className="btn btn-primary btn-lg mt-4"
                  style={{ order: 6 }}
                >
                  {isLoading
                    ? "Request is being processed"
                    : "Submit Challenge"}
                </button>
              ) : (
                <ConnectWalletButton
                  width="100%"
                  className="btn btn-primary btn-lg  mt-2"
                  type="button"
                  style={{ order: 6 }}
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateChallenge;
