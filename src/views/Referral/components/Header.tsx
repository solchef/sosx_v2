const Header = ({ referralCount, viewReferralReward }) => {
    return (
        <>
            <div className="mobile-hide text-nowrap " style={{ flex: '1 1 25%', maxWidth: '100%' }}>
                <div className="card h-100">
                    <div className="card-body">
                        <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
                            <div className="border-right pr-1">

                                <div>

                                    <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                                        <g>
                                            <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                            </path>
                                            <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                            </polygon>
                                            <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                            </polygon>
                                            <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                            </polygon>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>TOTAL FRIENDS

                                    </h4>
                                </div>
                                <h2 className="main-pink"> {referralCount} </h2>


                            </div>
                            <div>

                                <div>
                                    <h4> 
                                   
                                    <svg className="main-pink" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="#000" d="M389 40.84c18.5 0 35 18.79 35 44.03 0 25.33-16.5 44.03-35 44.03s-35-18.7-35-44.03c0-25.24 16.5-44.03 35-44.03zm-132.9 0c18.4 0 35 18.79 35 44.03 0 25.33-16.6 44.03-35 44.03-18.5 0-35.1-18.7-35.1-44.03 0-25.24 16.6-44.03 35.1-44.03zm-133 0c18.5 0 35 18.79 35 44.03 0 25.33-16.5 44.03-35 44.03s-35.09-18.7-35.09-44.03c0-25.24 16.59-44.03 35.09-44.03zm133 109.06c64 2 118 2 182.8 4.2 30.9 17.8 45.2 109 44.3 140.7l-17.6 17.7c-7.7-42.8-17.4-99.9-33.5-112.6v87.6l4.1 183.7H414l-16.7-184.7h-18l-16.7 184.7h-22.3l4.2-183.7-8-88.5h-29.3l-7.2 88.2 4.2 183.7h-22.3l-16.8-184.7h-18l-16.8 184.7h-22.2l4.2-183.7L205 199h-29.3l-8 88.5 4.2 183.7h-22.3l-16.7-184.7h-18L98.01 471.2h-22.2l4.2-183.7v-87.6c-16.2 12.7-25.9 69.8-33.6 112.6l-17.6-17.7c-.9-31.7 13.5-122.9 44.3-140.7 64.99-2.2 118.99-2.2 182.99-4.2z"/></svg>
                                    TOTAL EARNED

                                    </h4>
                                </div>
                                <h2 className="main-pink"> {viewReferralReward}</h2>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-hide text-nowrap" style={{ flex: '1 1 25%', maxWidth: '100%' }}>
                <div className="card h-100">
                    <div className="card-body">
                        <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
                            <div className="border-right pr-1">

                                <div>
                                    <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                                        <g>
                                            <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                            </path>
                                            <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                            </polygon>
                                            <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                            </polygon>
                                            <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                            </polygon>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>MINING FRIENDS

                                    </h4>
                                </div>
                                <h2 className="main-pink">0</h2>
                            </div>
                            <div>

                                <div>
                                    <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                                        <g>
                                            <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                            </path>
                                            <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                            </polygon>
                                            <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                            </polygon>
                                            <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                            </polygon>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>MINING EARNED

                                    </h4>
                                </div>
                                <h2 className="main-pink">0</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-hide text-nowrap" style={{ flex: '1 1 25%', maxWidth: '100%' }}>
                <div className="card h-100">
                    <div className="card-body">
                        <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
                            <div className="border-right pr-1">
                                <div>
                                    <h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                                            <g>
                                                <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                                </path>
                                                <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                                </polygon>
                                                <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                                </polygon>
                                                <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                                </polygon>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                        </svg>STAKING FRIENDS

                                    </h4>
                                </div>
                                <h2 className="main-pink"> {referralCount}</h2>
                            </div>
                            <div>
                                <div>
                                    <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                                        <g>
                                            <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                            </path>
                                            <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                            </polygon>
                                            <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                            </polygon>
                                            <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                            </polygon>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>STAKING EARNED

                                    </h4>
                                </div>
                                <h2 className="main-pink">{viewReferralReward}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <table  className="table mobile-show card">

                <tbody>
                    <tr>
                        <td className="border-0 pb-0 pt-0"><h4> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                            <g>
                                <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                </path>
                                <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                </polygon>
                                <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                </polygon>
                                <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                </polygon>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>TOTAL FRIENDS
                        </h4></td>
                        <td className="border-0 pb-0 pt-0">
                            <h2 className="main-pink"> {viewReferralReward}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-0 pb-0 pt-0"><h4> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                            <g>
                                <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                </path>
                                <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                </polygon>
                                <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                </polygon>
                                <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                </polygon>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>TOTAL EARNED
                        </h4></td>
                        <td className="border-0 pb-0 pt-0">                                <h2 className="main-pink"> {viewReferralReward}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-0 pb-0 pt-0"><h4> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                            <g>
                                <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                </path>
                                <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                </polygon>
                                <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                </polygon>
                                <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                </polygon>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>MINING FRIENDS
                        </h4></td>
                        <td className="border-0 pb-0 pt-0">                                <h2 className="main-pink">0</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-0 pb-0 pt-0"><h4> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                            <g>
                                <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                </path>
                                <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                </polygon>
                                <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                </polygon>
                                <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                </polygon>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>MINING EARNED
                        </h4></td>
                        <td className="border-0 pb-0 pt-0">                                <h2 className="main-pink">0</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-0 pb-0 pt-0"><h4> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                            <g>
                                <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                </path>
                                <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                </polygon>
                                <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                </polygon>
                                <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                </polygon>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>STAKING FRIENDS
                        </h4></td>
                        <td className="border-0 pb-0 pt-0">                                <h2 className="main-pink"> {referralCount}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-0 pb-0 pt-0"><h4> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                            <g>
                                <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                                </path>
                                <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                                </polygon>
                                <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                                </polygon>
                                <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                                </polygon>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>STAKING EARNED
                        </h4></td>
                        <td className="border-0 pb-0 pt-0">                                <h2 className="main-pink">{viewReferralReward}</h2>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default Header;
