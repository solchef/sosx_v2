export const StageNav = (props) => {

    const stageObject = [ 
         'SUBMIT A CHALLENGE',
         
         'VOTE A CHALLENGE', 
         
         'FINAL TOP 3 VOTE',
         
         'VIDEO SUBMISSION'
        
    ];

    let activeStages = stageObject

    return (

        <></>
    
        
        // stageObject.map( => 
        //                         <>
        //                             <div className="d-flex align-items-center mb-2">
        //                                         <div className="step done ">{props.stage}</div>
        //                                         <h4>{stageObject[0]}</h4>
        //                                         </div>
        //                                         <p>Currently into Stage {props.stage} of SOSX Game</p>
        //                                         <h5
        //                                         className="d-flex text-muted align-items-center mt-2 mb-2"
        //                                         style={{ order: 2 }}
        //                                         >
        //                                 <div className="step false mr-3 ">{props.stage}</div>
        //                                 {stageObject[1]}
        //                                 </h5>
                        
        //                             <h5
        //                             className="d-flex text-muted align-items-center mt-2 mb-2"
        //                             style={{ order: 3 }}
        //                             >
        //                             <div className="step false mr-3 ">{props.stage}</div>
        //                             {stageObject[2]}
        //                             </h5>
                        
        //                             <h5
        //                             className="text-muted d-flex align-items-center mt-2 mb-4"
        //                             style={{ order: 4 }}
        //                             >
        //                             <div className="step false mr-3 ">{props.stage}</div>
        //                             {stageObject[3]}
        //                             </h5>
        //                         </>
        //         )
       
    )
  };
