import { FormEvent, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import useToast from "hooks/useToast";
import useWeb3Provider from "hooks/useActiveWeb3React";
import { signMessage } from "utils/web3React";
import { useTranslation } from "contexts/Localization";
import ConnectWalletButton from "components/ConnectWalletButton";
import { useRouter } from "next/router";
import { create } from "ipfs-http-client";
import { useDaoStakingContract } from "hooks/useContract";
import moment from "moment";
import { getDaoLevel } from "../hooks/getDaoLevel";
import { formatFixedNumber } from "utils/formatBalance";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});


const CreateChallenge = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [votingLevel, setVotingLevel] = useState(0);
  const [challengeDetails, setChallengeDetails] = useState("");
  const [challengeInputName, setChallengeInputName] = useState("");
  const { t } = useTranslation();
  const { account } = useWeb3React();
  const { library, connector } = useWeb3Provider();
  const { toastSuccess, toastError } = useToast();
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
    const form = event.target as HTMLFormElement;
    if (votingLevel == 2 || votingLevel == 3) {
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

          try {
            await server.files.mkdir(`/Rounds/Round-1/challenges/${account}`);
          } catch (err) {
            toastError(t("Challenge Error"), t("You can't create more then one challenge"));
            return
          }

          await server.files.write(
            `/Rounds/Round-1/challenges/${account}/info.json`,
            forIPFS,
            { create: true }
          );
          setIsLoading(false);
          toastSuccess(t("challenge created!"));
          form.reset()
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

  useEffect(() => {
    userVotingLevel();
  }, []);

  const userVotingLevel = async () => {
    let amount = await contract.getVoterTotalStakeAmount(account);
    amount = amount;
    let level = getDaoLevel(Number(formatFixedNumber(amount, 3, 18)));
    setVotingLevel(level);
  };


  return (
    <div className="card h-100">
      <form id="form" onSubmit={handleSubmit}>
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
                    placeholder={"Explain in detail what your challenge is"}
                  />
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