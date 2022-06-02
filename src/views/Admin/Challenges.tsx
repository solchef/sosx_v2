import { useQuery } from "@apollo/client";
import useToast from "hooks/useToast";
import { create } from "ipfs-http-client";
import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { GET_Challenges } from "utils/graphqlQ";
import { GET_LastRound } from "utils/graphqlQ";

const server = create({
    url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
  });
  
export default function Challenges () {
    const GraphqlChallengesData = useQuery(GET_Challenges);
    const { toastSuccess } = useToast() 
  const [roundFilter, setRoundFilter] = useState('1')
  const GraphqlLastRoundData = useQuery(GET_LastRound);
  const [lastRound, setLastRound] = useState(Number)

  useEffect(() => {
    if (GraphqlLastRoundData.data !== undefined)
      setLastRound(GraphqlLastRoundData.data.lastRound.id);
  }, [GraphqlLastRoundData.data]);

    const deleteChallenge = async (walletAddress) => {
        try {
            await server.files.rm(`/Rounds/Round-1/challenges/${walletAddress}`, {recursive: true})
            toastSuccess("DELETED")
        } catch (err) {
            console.log(err);
        }
    }

    console.log(GraphqlChallengesData)

    return (
       <>
        <div >
            <div className="card">
                  <div >
                    <div className="d-flex align-items-center mb-2">
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <h4>CHALLENGES SELECTION FOR ROUND #</h4>
                      <DropdownButton title={`${roundFilter}`}>
                      <Dropdown.Item onClick={()=> setRoundFilter('all')}>All</Dropdown.Item>
                      <Dropdown.Item onClick={()=> setRoundFilter('1')}>1</Dropdown.Item>
                      <Dropdown.Item onClick={()=> setRoundFilter('2')}>2</Dropdown.Item>
                    </DropdownButton>
                    </div>
                    <div className="card-body "> 
                    <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">
                    <tr className="jsx-e5e2ca7965fa437a">
                      <th className="fs-16 font-weight-normal">CHallenge</th>
                      <th className="fs-16 font-weight-normal text-center">Stage 2 Votes</th>
                      <th className="fs-16 font-weight-normal">Stage 3 Votes</th>
                      <th className="fs-16 font-weight-normal">Delete Challenge</th>
                      <th className="fs-16 font-weight-normal">Delete Challenge</th>
                      <th className="fs-16 font-weight-normal">Push to Current Round</th>
                    </tr>
                    </table>

                    {/* filter((challenge) => challenge.rId == roundFilter) */}
                    {GraphqlChallengesData?.data?.challenge?.map((challenge, index) => (
                        <>
                            <div className="d-flex row justify-content-between my-2">
                            <div>
                            {challenge.payload.name}
                            </div>
                            <div>
                              {challenge.votedList.stage2.length}
                            </div>
                            <div>
                              {challenge.votedList.stage3.length}
                            </div>
                            <button className="mr-3 btn btn-primary text-white" onClick={() => deleteChallenge(challenge.payload.creator)}>
                              Delete
                            </button>

                              <button
                                type="submit"
                                className="btn  btn-primary"
                                style={{ width: "max-content" }}
                              >
                                Push
                              </button>
                              </div>
                        </>
  
                      ))}
                    </div>
                  </div>
                
            </div>
          </div>
          <div style={{ flex: '1 1 60%' }} >
          </div>
       </>
    )
}