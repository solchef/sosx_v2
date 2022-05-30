import { useMediaPredicate } from "react-media-hook";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { FormEvent, useEffect, useState } from "react";
import { create } from "ipfs-http-client";
import { concat } from "uint8arrays";
import { signMessage } from "utils/web3React";
import useWeb3Provider from "hooks/useActiveWeb3React";
import useToast from "hooks/useToast";
import { GET_LastRound } from "utils/graphqlQ";
import { useQuery } from "@apollo/client";
import moment from "moment";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

export default function Admin() {
  const { account } = useActiveWeb3React();
  const [winnerAddress, setWinnerAddress] = useState("");
  const [videos, setVideos] = useState([]);
  const [lastRound, setLastRound] = useState(Number)
  const { library, connector } = useWeb3Provider();
  const { toastSuccess, toastError } = useToast();
  const GraphqlLastRoundData = useQuery(GET_LastRound);

  useEffect(() => {
    if (GraphqlLastRoundData.data !== undefined)
      setLastRound(GraphqlLastRoundData.data.lastRound.id);
  }, [GraphqlLastRoundData.data]);

  const getVideos = async () => {
    let finalData = [];
    for await (const videoFile of server.files.ls(`/Rounds/Round-${lastRound}/Videos`)) {
      let fileContent;
      const chunks = [];
      for await (const chunk of server.cat(videoFile.cid)) {
        chunks.push(chunk);
      }
      const data = concat(chunks);
      fileContent = new TextDecoder().decode(data).toString();
      fileContent = JSON.parse((fileContent));
        finalData.push(fileContent);
    }
    console.log(finalData)
    setVideos(finalData);
  };

  useEffect(() => {
    getVideos();
  }, [lastRound]);

  let roundId:number = Number(lastRound) + 1
  const roundInfo = JSON.stringify({
    id: roundId,
    startingTime: moment().unix(),
  }, null, 2);
  const createRound = async () => {
    await server.files.mkdir(`/Rounds/Round-${roundId}`);
    await server.files.write(`/Rounds/Round-${roundId}/info.json`, roundInfo, {create: true});
    await server.files.mkdir(`/Rounds/Round-${roundId}/Videos`);
    await server.files.mkdir(`/Rounds/Round-${roundId}/challenges`);
    await server.files.mkdir(`/Rounds/Round-${roundId}/Votes`);
    await server.files.mkdir(`/Rounds/Round-${roundId}/Votes/stage-2`);
    await server.files.mkdir(`/Rounds/Round-${roundId}/Votes/stage-3`);
  };
  

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    let send = JSON.stringify({
      reciever: winnerAddress
    })

    try {
      await signMessage(connector, library, account, send);
      toastSuccess('Sent Successfully')
      createRound()
      getVideos()
    } catch (err) {
      // @ts-ignore
      toastError(err.message)
    }
  };

  const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");
  return (
    <>
      <div
        className="container-fluid "
        style={{ gap: "20px" }}
      >

        <div >
          <div className="card">
              <span className="text-white pt-1 fs-18 pb-2 mb-2">
                {" "}
                Admin Panel{" "}
              </span>
              {account === "0x82E4BBE89C62063eCe92423F56A016fEE715eF3a" ? (
                <div >
                  <div className="d-flex align-items-center mt-3 mb-3">
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
                      <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z"></path>
                      <g>
                        <path
                          className="st0"
                          d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z"
                        ></path>
                        <path
                          className="st0"
                          d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z"
                        ></path>
                        <path
                          className="st0"
                          d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z"
                        ></path>
                        <path
                          className="st0"
                          d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z"
                        ></path>
                      </g>
                    </svg>
                    <h4 style={{ fontSize: "60px" }}>Game</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <h4>WINNER SELECTION FOR ROUND #{lastRound}</h4>
                  </div>
                  <p>
                    Choose the winner from the videos Submissions sorted by
                    first uploaded
                  </p>
                  <div className="card-body ">

                    {videos.map((video) => (
                      <>
                       
                          <form onSubmit={handleSubmit} onClick={() => setWinnerAddress(video.id)}>
                          <div className="d-flex row justify-content-between my-2">
                          <div>
                          {moment(video.timestamp * 1000).format('LLLL')}
                          </div>
                          <div>
                          {video.id}
                          </div>
                          <div>
                          <a className="mr-3 btn btn-primary text-white" href={video.url} target="_blank">
                            Visit video Link
                          </a>
                          </div>

                            <button
                              type="submit"
                              className="btn  btn-primary"
                              style={{ width: "max-content" }}
                            >
                              Reward as Winner
                            </button>
                            </div>
                          </form>
                      </>

                    ))}

                  </div>
                </div>
              ) : (
                <p>You don't authorized to be here</p>
              )}
          </div>
        </div>
        <div style={{ flex: '1 1 60%' }} >

        </div>
      </div>
    </>
  );
}
