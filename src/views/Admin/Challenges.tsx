import { useQuery } from "@apollo/client";
import useToast from "hooks/useToast";
import { create } from "ipfs-http-client";
import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { GET_Challenges } from "utils/graphqlQ";
import { GET_LastRound } from "utils/graphqlQ";
import useWeb3Provider from "hooks/useActiveWeb3React";
import { signMessage } from "utils/web3React";
import useActiveWeb3React from "hooks/useActiveWeb3React";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

export default function Challenges() {
  const GraphqlChallengesData = useQuery(GET_Challenges);
  const [roundFilter, setRoundFilter] = useState('1')
  const GraphqlLastRoundData = useQuery(GET_LastRound);
  const [lastRound, setLastRound] = useState(Number)
  const { toastSuccess, toastError } = useToast()
  const { library, connector } = useWeb3Provider();
  const { account } = useActiveWeb3React();

  useEffect(() => {
    if (GraphqlLastRoundData.data !== undefined)
      setLastRound(GraphqlLastRoundData.data.lastRound.id);
  }, [GraphqlLastRoundData.data]);

  const deleteChallenge = async (walletAddress) => {
    try {
      const sig = await signMessage(connector, library, account, `Deleting ${walletAddress} challenge`);
      if (sig) {
        await server.files.rm(`/Rounds/Round-1/challenges/${walletAddress}`, { recursive: true })
        toastSuccess("DELETED")
      }
    } catch (err) {
      console.log(err);
    }
  }

const roundsFilter = () => {
  let rounds = []
  for (let i = 1; i <= lastRound; i++) {
    rounds.push(<Dropdown.Item onClick={() => setRoundFilter(String(i))}>{i}</Dropdown.Item>)
    return {rounds}
  }
}
  return (
    <>
      <div >
        <div className="card">


            <div className="d-flex align-items-center mb-2">
              <h4 className="mr-3">CHALLENGES SELECTION FOR ROUND #</h4>
              <DropdownButton title={`${roundFilter}`}>
                <Dropdown.Item onClick={() => setRoundFilter('all')}>All</Dropdown.Item>
                {[...Array(lastRound)].map((x, i) =>
                 <Dropdown.Item onClick={() => setRoundFilter(String(i+1))}>{i+1}</Dropdown.Item>
                )}
              </DropdownButton>
            </div>
            <div className="card-body ">
              <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">
                <tr>
                  <th className="fs-16 font-weight-normal">CHallenge</th>
                  <th className="fs-16 font-weight-normal">Stage 2 Votes</th>
                  <th className="fs-16 font-weight-normal">Stage 3 Votes</th>
                  <th className="fs-16 font-weight-normal">Delete Challenge</th>
                  <th className="fs-16 font-weight-normal">Push to Current Round</th>
                </tr>

                <tbody>
                  {/* filter((challenge) => challenge.rId == roundFilter) */}
                  {GraphqlChallengesData?.data?.challenge?.map((challenge, index) => (


                    <tr>
                      <td className="border-0 text-white"> {challenge.payload.name}</td>
                      <td className="border-0 text-white">     {challenge.votedList.stage2.length}</td>
                      <td className="border-0 text-white">  {challenge.votedList.stage3.length}</td>
                      <td className="border-0 text-white">     <button className="mr-3 btn btn-danger text-white" onClick={() => deleteChallenge(challenge.payload.creator)}>
                        Delete
                      </button></td>
                      <td className="border-0 text-white">



                        <button
                          type="submit"
                          className="btn  btn-success"
                          style={{ width: "max-content" }}
                        >
                          Push
                        </button></td>

                    </tr>

                  ))}
                </tbody>
              </table>
            </div>
   

        </div>
      </div>

    </>
  )
}