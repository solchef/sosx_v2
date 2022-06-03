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
import { Dropdown, DropdownButton } from "react-bootstrap";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});
export default function Submissions() {
  const { account } = useActiveWeb3React();
  const [winnerAddress, setWinnerAddress] = useState("");
  const [videos, setVideos] = useState([]);
  const [lastRound, setLastRound] = useState(Number)
  const { library, connector } = useWeb3Provider();
  const { toastSuccess, toastError } = useToast();
  const GraphqlLastRoundData = useQuery(GET_LastRound);
  const [roundFilter, setRoundFilter] = useState('1')

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

  let roundId: number = Number(lastRound) + 1
  const roundInfo = JSON.stringify({
    id: roundId,
    startingTime: moment().unix(),
  }, null, 2);
  const createRound = async () => {
    await server.files.mkdir(`/Rounds/Round-${roundId}`);
    await server.files.write(`/Rounds/Round-${roundId}/info.json`, roundInfo, { create: true });
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
      <div >
        <div className="card">
          <div >
            <div className="d-flex align-items-center mb-2">
              <h4 className="mr-3">WINNER SELECTION FOR ROUND #</h4>
              <DropdownButton title={`${roundFilter}`}>
              <Dropdown.Item onClick={() => setRoundFilter('all')}>All</Dropdown.Item>
                {[...Array(lastRound)].map((x, i) =>
                 <Dropdown.Item onClick={() => setRoundFilter(String(i+1))}>{i+1}</Dropdown.Item>
                )}
              </DropdownButton>
            </div>

            <p>
              Choose the winner from the videos Submissions sorted by
              first uploaded
            </p>
            <div className="card-body ">
            <form onSubmit={handleSubmit}>

              <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">

                  {videos.filter((video) => video.rId == roundFilter).map((video) => (
                    <tr>
                      <td className="border-0 text-white"> {moment(video.timestamp * 1000).format('LLLL')}</td>
                      <td className="border-0 text-white">       {video.id}</td>
                      <td className="border-0 text-white">    <a className="mr-3 btn btn-primary btn-success text-white" href={video.url} target="_blank">
                        Visit video Link
                      </a></td>
                      <td className="border-0 text-white">
                        <button
                          type="submit"
                          className="btn  btn-primary"
                          style={{ width: "max-content" }}
                          onClick={() => setWinnerAddress(video.id)}
                        >
                          Reward as Winner
                        </button>
                      </td>
                    </tr>
                  ))}
              </table>
              </form>

            </div>
          </div>

        </div>
      </div>
      <div style={{ flex: '1 1 60%' }} >
      </div>
    </>
  )
}
