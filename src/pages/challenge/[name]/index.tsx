

import { useRouter } from "next/router";
import { create } from 'ipfs-http-client'
import { useEffect, useState } from "react";
import { concat } from "uint8arrays";
import React, { FormEvent } from 'react'
import { signMessage } from 'utils/web3React'
import { useWeb3React } from '@web3-react/core'
import useWeb3Provider from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import { generatePayloadData } from "views/Games/helpers";
import Link from "next/link";
import { useMediaPredicate } from "react-media-hook";
import { useStakingContract } from "hooks/useContract";

const server = create({
    url: "https://ipfs.socialx.io",

});

export default function Challenge() {
    const router = useRouter()
    const { name } = router.query
    const [challenge, setChallenge] = useState<any[]>([]);
    const [votesList, setVotesList] = useState([]);
    const [challengeUrl, setChallengeUrl] = useState([]);
    const [votingLevel, setVotingLevel] = useState(0)
    const { account } = useWeb3React()
    const { library, connector } = useWeb3Provider()
    const { toastSuccess, toastError } = useToast()
    const { t } = useTranslation()
    const contract = useStakingContract();

    useEffect(() => {
        getData();
        userVotingLevel()
    }, [name]);

    let challengeName = `challenge-${name}`
    const getData = async () => {
        if (name) {
            let challenge = [];
            for await (const resultPart of server.files.ls("/challenges")) {
                let challengeJson;
                let vote;
                let votesList = []

                if (resultPart.name === challengeName) {
                    for await (const cha of server.files.ls(`/challenges/${resultPart.name}`)) {
                        const chunks = [];

                        if (cha.name == 'challenge.json') {
                            for await (const chunk of server.cat(cha.cid)) {
                                chunks.push(chunk);
                            }
                            const data = concat(chunks);
                            challengeJson = JSON.parse(
                                new TextDecoder().decode(data).toString()
                            );
                        }
                        if (cha.name == 'votes') {
                            for await (const vote of server.files.ls(`/challenges/${resultPart.name}/votes`)) {

                                // console.log(await voteListLevels(name));
                                // console.log(vote)
                                let data = {
                                    name: vote.name.slice(0, -5),
                                    level: 1
                                }
                                votesList.push(data);

                            }
                        }
                        setVotesList(votesList)

                        // console.log(votesList)
                    }
                    let challengeData = {
                        challenge: challengeJson,
                        votes: vote
                    }
                    challenge.push(challengeData);
                }
            }
            setChallenge(challenge);

            console.log(challenge)
        }
    }

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        const vote = JSON.stringify({
            ...generatePayloadData(),
            address: account,
            data: {
                domain: {
                    name: 'snapshot',
                    version: '0.1.4'
                },
                types: {
                    Vote: [
                        {
                            name: "from",
                            type: "address"
                        },
                        {
                            name: "from",
                            type: "address"
                        },
                        {
                            name: "space",
                            type: "string"
                        },
                        {
                            name: "timestamp",
                            type: "uint64"
                        },
                        {
                            name: "challenge",
                            type: "string"
                        },
                        {
                            name: "choice",
                            type: "uint32"
                        },
                        {
                            name: "metadata",
                            type: "string"
                        }

                    ]
                },
                message: {
                    space: "SOSX",
                    challenge: `${challengeName}`,
                    choice: 1,
                    metadata: '{}',
                    from: account,
                    timestamp: Date.now()
                }
            }
        })

        const sig = await signMessage(connector, library, account, vote)

        if (sig) {
            const forIPFS = JSON.stringify({
                ...generatePayloadData(),
                address: account,
                sig: sig.toString(),
                data: {
                    domain: {
                        name: 'snapshot',
                        version: '0.1.4'
                    },
                    types: {
                        Vote: [
                            {
                                name: "from",
                                type: "address"
                            },
                            {
                                name: "space",
                                type: "string"
                            },
                            {
                                name: "timestamp",
                                type: "uint64"
                            },
                            {
                                name: "proposal",
                                type: "string"
                            },
                            {
                                name: "choice",
                                type: "uint32"
                            },
                            {
                                name: "metadata",
                                type: "string"
                            }
                        ]
                    },
                    message: {
                        space: "sosx",
                        challenge: '',
                        choice: 1,
                        metadata: '{}',
                        from: account,
                        timestamp: Date.now()
                    }
                }
            }, null, 2)


            await server.files.write(`/challenges/challenge-${name}/votes/${account}.json`, forIPFS, { create: true })
            toastSuccess(t('Vote created!'))
            getData()
        } else {
            toastError(t('Error'), t('Unable to sign payload'))
        }
    }

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        // console.log(text.length)
        return (
            <p className="text  overflow-hidden">
                {isReadMore ? text.slice(0, 600) : text}
                <a style={{ cursor: 'pointer', color: '#ff00cc' }} onClick={toggleReadMore} className="ml-2 read-or-hide">
                    {text.length > text.slice(0, 600).length ? (isReadMore ? "...Read more" : " Show less") : ''}
                </a>
            </p>
        );
    };


    const userVotingLevel = async () => {
        let amount = await contract.getVoterTotalStakeAmount(account);
        amount = amount / (10 ** 18);
        let level = getLevel(amount);
        setVotingLevel(level);
    }

    const getLevel = (amount) => {
        // console.log(process.env.NEXT_PUBLIC_LEVEL1)
        if (amount >= process.env.NEXT_PUBLIC_LEVEL1 && amount < process.env.NEXT_PUBLIC_LEVEL2) { return 1; }
        if (amount >= process.env.NEXT_PUBLIC_LEVEL2 && amount < process.env.NEXT_PUBLIC_LEVEL3) { return 2; }
        if (amount >= process.env.NEXT_PUBLIC_LEVEL3) { return 3; }
    }

    const voteListLevels = async (acc) => {
        let amount = await contract.getVoterTotalStakeAmount(acc);
        amount = amount / (10 ** 18);
        let level = getLevel(amount);
        // console.log(level)
        return level;
    }



    const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
    const biggest1400 = useMediaPredicate("(max-width: 1400px)");

    return (

        <div className={`${biggerThan1400 && "container"} pt-3  ${biggest1400 && "container-fluid"}`} >

            <p className='p-2'><i className="fa-solid fa-arrow mx-auto-left"></i>  <Link href='/votechallenge'> Back to Challenges </Link> </p>
            {challenge[0] && (
                <div className="row mx-auto">

                    <div className="col-12 pr-0 col-xl-8 ">
                        <div className="row mx-auto">
                            <div className="card col-11 col-md-12 col-xl-11">

                                <div className="card-body">
                                    <div className='text-muted font-weight-bold'>
                                        <h1 className='font-weight-bold mb-2'>{name}</h1>

                                        <ReadMore>
                                            {challenge[0].challenge.payload.body}
                                        </ReadMore>

                                    </div>


                                    <div className='text-muted font-weight-bold mt-3'>

                                        <h1 className='font-weight-bold mb-2'>Game Rules</h1>
                                        {challenge[0].challenge.payload.choices.map((element) => (
                                            <ul className="fs-12">
                                                <li>
                                                    <i className="fa-solid fa-check pr-2"></i>
                                                    {element}
                                                </li>
                                            </ul>
                                        ))}
                                    </div>

                                </div>
                                <div className="row mx-auto pt-5">
                                    <div className="ml-2 text-nowrap ">
                                        <form onSubmit={handleSubmit}>
                                            {votesList.find(acc => acc.name == account) ? (
                                                <button disabled className="btn btn-primary  font-weight-bold "><i className="fa-solid fa-check-to-slot pr-2"></i>You already voted</button>
                                            ) : (
                                                <button className="btn btn-primary  font-weight-bold "><i className="fa-solid fa-check-to-slot pr-2"></i>Vote This Challenge</button>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row mx-auto ">
                           
                                <div className="card col-11 col-md-12 col-xl-11">
                                    <h5 className="  fs-16 font-weight-bold pl-3 pt-3 pb-3 ">{votesList.length} 	&nbsp;	&nbsp;Votes</h5>

                                    <table className="table text-white">
                                        {votesList.map((vote, index) =>
                                            <tr>
                                                <td className="border-0 pb-0" > {index + 1}</td>
                                                <td className="border-0 pb-0">Level {vote.level}</td>
                                                <td className="border-0 pb-0">{vote.name.replace(/(.{15})..+/, "$1…")}</td>
                                            </tr>
                                        )}

                                    </table>
                                </div>

                         
                        </div>
                    </div>

                    <div className="col-12 pr-0 col-xl-4">
                        <div className="row mx-auto p-1 ">
                            <div style={{ fontSize: '80%' }} className="card  p-0 col-11 col-md-12 col-xl-11">
                                <h5 className=" fs-16 font-weight-bold pl-2 pt-3 pb-3 ">Details</h5>
                                <div className="card-body p-4">

                                    <div className="row mx-auto d-flex font-weight-bold justify-content-between p-0">
                                        <div >X-Games Challenge</div>
                                        <div className="ml-auto text-white" > <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" /></div>
                                    </div>
                                    {/* <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                                        <div >IPFS	</div>
                                        <div className="ml-auto text-white" > <div className="ml-auto text-white" ><a href="#"> #QmUzzeT <i className="fa-solid fa-arrow mx-auto-up-right-from-square"></i> </a></div></div>
                                    </div> */}
                                    <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                                        <div >Voting system</div>
                                        <div className="ml-auto text-white  fa-12">Vote Challenge</div>
                                    </div>

                                    <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                                        <div >Challenge Creation	</div>
                                        <div className="ml-auto text-white">{challenge[0].challenge.payload.created}</div>
                                    </div>

                                    <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                                        <div>Voting Stage	</div>
                                        <div className="ml-auto text-white">1</div>
                                    </div>
                                    <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                                        <div >Creator	</div>
                                        <div className="ml-auto text-white" > <div className="ml-auto text-white" ><a href={`https://bscscan.com/address/${challenge[0].challenge.payload.creator}`} target="_blank"> {challenge[0].challenge.payload.creator.replace(/(.{15})..+/, "$1…")} <i className="fa-solid fa-arrow mx-auto-up-right-from-square"></i> </a></div></div>
                                    </div>
                                    {/* <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                                        <div >Network</div>
                                        <div className="ml-auto text-white" >{challenge[0].challenge.payload.metadata.network}</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="row mx-auto">
                            <div style={{ fontSize: '90%' }} className="card p-1 col-11 col-md-12 col-xl-11">
                                <h5 className=" fs-16 font-weight-bold pl-2 pt-3 pb-3 ">Current results</h5>
                                <div className="card-body p-4">

                                    <div className="row mx-auto d-flex font-weight-bold justify-content-between p-0">
                                        <div >The Votes	</div>
                                        <div className="ml-auto text-white" > {votesList.length} </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            )
            }
        </div >
    )
}