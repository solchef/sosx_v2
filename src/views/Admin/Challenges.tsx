import { useQuery } from "@apollo/client";
import useToast from "hooks/useToast";
import { create } from "ipfs-http-client";
import { GET_Challenges } from "utils/graphqlQ";

const server = create({
    url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
  });
  
export default function Challenges () {
    const GraphqlChallengesData = useQuery(GET_Challenges);
    const { toastSuccess } = useToast() 
    const deleteChallenge = async (walletAddress) => {
        try {
            await server.files.rm(`/Rounds/Round-1/challenges/${walletAddress}`, {recursive: true})
            toastSuccess("DELETED")
        } catch (err) {
            console.log(err);
        }
    }

    return (
       <>
        <div >
            <div className="card">
                  <div >
                    <div className="d-flex align-items-center mb-2">
                      <h4>Challenges</h4>
                    </div>
                    <p>
                      All Challenges
                    </p>
                    <div className="card-body ">
                    {GraphqlChallengesData?.data?.challenge?.map((challenge, index) => (
                        <>
                            <div className="d-flex row justify-content-between my-2">
                            <div>
                            {index+1}
                            </div>
                            <div>
                            {challenge.payload.name}
                            </div>
                            <div>
                            <button className="mr-3 btn btn-primary text-white" onClick={() => deleteChallenge(challenge.payload.creator)}>
                              Delete
                            </button>
                            </div>
  
                              <button
                                type="submit"
                                className="btn  btn-primary"
                                style={{ width: "max-content" }}
                              >
                                Push to Current Round
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