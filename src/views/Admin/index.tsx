import { useMediaPredicate } from "react-media-hook";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { FormEvent, useEffect, useState } from "react";
import { create } from "ipfs-http-client";
import { concat } from "uint8arrays";
import { signMessage } from "utils/web3React";
import useWeb3Provider from "hooks/useActiveWeb3React";
import useToast from "hooks/useToast";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

export default function Admin() {
  const { account } = useActiveWeb3React();
  const [winnerAddress, setWinnerAddress] = useState("");
  const [videos, setVideos] = useState([]);
  const { library, connector } = useWeb3Provider();
  const { toastSuccess, toastError } = useToast();

  useEffect(() => {
    const getVideos = async () => {
      let finalData = [];
      for await (const videoFile of server.files.ls(`/Rounds/Round-1/Videos`)) {
        let fileContent;
        const chunks = [];
        for await (const chunk of server.cat(videoFile.cid)) {
          chunks.push(chunk);
        }
        const data = concat(chunks);
        fileContent = JSON.parse(new TextDecoder().decode(data).toString());
        finalData.push(fileContent);
      }
      setVideos(finalData);
    };
    getVideos();
  }, []);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    let send = JSON.stringify({
      reciever: winnerAddress
    })

    try {
      await signMessage(connector, library, account, send);
      toastSuccess('Sent Successfully')
    } catch (err) {
      // @ts-ignore
      toastError(err.message)
    }
  };

  const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");
  return (
    <>
      <div
        className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse"
        style={{ gap: "20px" }}
      >

        <div style={{ flex: '1 1 50%' ,maxWidth:"100%"}}>
          <div className="card">
            <div className="  d-flex  h-100 text-white flex-column">
              <span className="text-white pt-1 fs-18 pb-1 mb-1">
                {" "}
                Admin Panel{" "}
              </span>
              {account === "0x684A4e50De4ff380E70DB03D7B61a4111395326a" ? (
                <div >
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
                    <h4>WINNER SELECTION</h4>
                  </div>
                  <p>
                    Choose the winner from the videos Submissions sorted by
                    first uploaded
                  </p>
                      {videos.map((video) => (
                        <div className="challenge-items d-flex">
                          <div className="list-title">{video.id}</div>
                           <div className="d-flex w-100">
                           <a href={video.url} target="_blank">
                              <button className="btn mr-1 pr-5 pl-5 btn-primary btn-sm ">
                                Visit Video
                              </button>
                            </a>
                            <form onSubmit={handleSubmit} onClick={() => setWinnerAddress(video.id)}>
                              <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                                style={{ width: "max-content" }}
                              >
                                Winner
                              </button>
                            </form>
                           </div>

                         
                        </div>
                      ))}
                
                </div>
              ) : (
                <p>You don't authorized to be here</p>
              )}
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 45%' }} >

        </div>
      </div>
    </>
  );
}
