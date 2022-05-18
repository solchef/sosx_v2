import { useMediaPredicate } from "react-media-hook";
import useActiveWeb3React from "hooks/useActiveWeb3React";

export default function Admin() {
    const { account } = useActiveWeb3React();
    
    const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");
    return (<>
        <div className="game container-fluid">
            <div className="row">
                <div className={`col-12 ${biggerThan1500 && 'col-xl-9'}`}>
                    <div className="row">
                        
                        <div className={`col-xl-8 col-md-12 col-sm-12`}>
                            <div className=" backgroun-dark d-flex rounded  p-4 h-100 text-white flex-column">

                                <span className="text-white pt-1 fs-18 d-flex align-items-center pb-1 mb-1"> Admin Panel </span>
                                {account === "0x0c8978Ee5fb8481d9d2a76F6a0495fc785748618" ? (
                                    <p>You are admin</p>
                                ) : (
                                    <p>You don't authorized to be here</p>
                                )}

                            </div>

                        </div>

                    </div>  
    
                </div>
                
            </div>
        </div>
    </>
    )
}