import Link from 'next/link'
import React, { FormEvent } from 'react'
import { signMessage } from 'utils/web3React'
import { generatePayloadData } from './helpers'
import { create } from 'ipfs-http-client'
import { useWeb3React } from '@web3-react/core'
import useWeb3Provider from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'

const server = create({
	url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL
});


export default function Thechallenge() {
	const { account } = useWeb3React()
	const { library, connector } = useWeb3Provider()
	const { toastSuccess, toastError } = useToast()
	const { t } = useTranslation()


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
					challenge: 'challenge',
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
						proposal: '',
						choice: 1,
						metadata: '{}',
						from: account,
						timestamp: Date.now()
					}
				}
			}, null, 2)
			
			await server.files.write(`/challenge-2/votes/${account}.json`, forIPFS, {create: true})
			toastSuccess(t('Proposal created!'))
		} else {
			toastError(t('Error'), t('Unable to sign payload'))
		  }
	
		}

	return (
		<></>
    )
}