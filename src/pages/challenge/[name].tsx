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

const server = create({
    url: "http://127.0.0.1:5001",
    
});

export default function Challenge() {
    const router = useRouter()
    const { name } = router.query
    const [challenge, setChallenge] = useState<any[]>([]);
    const [votesList, setVotesList] = useState([]);
    const { account } = useWeb3React()
    const { library, connector } = useWeb3Provider()
    const { toastSuccess, toastError } = useToast()
    const { t } = useTranslation()

    useEffect(() => {
        getData();
    }, [name]);

    let challengeName = `challenge-${name}` 
    const getData = async () => {
        if (name) {
                let challenge = [];
                for await (const resultPart of server.files.ls("/")) {
                    let challengeJson;
                    let vote;
                    let votesList = []
                
                    if (resultPart.name === challengeName) {
                        for await (const cha of server.files.ls(`/${resultPart.name}`)) {
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
                                for await (const vote of server.files.ls(`/${resultPart.name}/votes`)) {
                                    votesList.push(vote.name.slice(0, -5))
                                }
                            } 
                            setVotesList(votesList)
                        }
                        let challengeData = {
                            challenge: challengeJson,
                            votes: vote
                        }
                        challenge.push(challengeData);
                    }
                }
                setChallenge(challenge);
        } 
    }

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        const vote = JSON.stringify({
            ...generatePayloadData(),
            address:account,
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
            const forIPFS =  JSON.stringify({
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
            
            await server.files.write(`/challenge-${name}/votes/${account}.json`, forIPFS, {create: true})
            toastSuccess(t('Vote created!'))
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
        console.log(text.length)
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 600) : text}
                <a style={{ cursor: 'pointer', color: '#ff00cc' }} onClick={toggleReadMore} className="ml-2 read-or-hide">
                    {text.length > text.slice(0, 600).length ? (isReadMore ? "...Read more" : " Show less") : ''}
                </a>
            </p>
        );
    };


    return (
        <div className="container-fluid">
            <p className='p-2'><i className="fa-solid fa-arrow-left"></i>  <Link href='/votechallenge'> Back   </Link> </p>
             {challenge[0] && (
            <div className="ml-2 row">
                <div className="col-12 overflow-auto col-lg-8">
                    <div className='text-muted font-weight-bold'>
                        <h1 className='font-weight-bold'>{name}</h1>
                        {/* <div className='p-3 d-flex'>
                            <img className='mr-2' width='25px' height='25px' src='images/btc.png' />
                            <p>             PancakeSwap
                                by
                                0x3799...4861</p>
                        </div> */}
                        <ReadMore>
                            {challenge[0].challenge.payload.body}
                        </ReadMore>


                    </div>

                    <div className="row pb-5 pt-5">
                        <div className=" col-11">


                        <form onSubmit={handleSubmit}>
                            {votesList.includes(account) ? (
                                <button disabled className="btn btn-primary w-25 font-weight-bold "><i className="fa-solid fa-check-to-slot pr-2"></i>You already voted</button>
                                ) : (
                                <button className="btn btn-primary w-25 font-weight-bold "><i className="fa-solid fa-check-to-slot pr-2"></i>Vote This Challenge</button>
                            )}
                        </form>

                        </div>
                    </div>


                </div>
                
                <div className="col-12 col-lg-4">
                    <div className="row">
                        <div className="card border col-11">
                            <h5 className=" border-bottom font-weight-bold p-1">Information</h5>


                            <div className="row p-1">
                                <div className="col-6">network	</div>
                                <div className="col-6">{challenge[0].challenge.payload.metadata.network}</div>
                            </div>
                           

                        </div>
                    </div>
                    <div className="row">
                        <div className="card border col-11">
                            <h5 className="font-weight-bold ">Current results
                            </h5>
                            <div className="row p-2">
                                <div className="col-6">The Votes	</div>
                                <div className="col-6">{votesList.length} </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="card border col-11">
                            <h5 className="card-header font-weight-bold ">{votesList.length} Votes</h5>


                            <table className="table font-weight-bold ">
                                <tbody>
                                {votesList.map((vote, index) => 
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td className='text-white text-right'>{vote}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>

            </div>
             )}
        </div>
    )
}