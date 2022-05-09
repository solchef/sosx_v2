import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import useToast from 'hooks/useToast'
import { useStakingContract } from 'hooks/useContract'
import { getStakingContract } from 'utils/contractHelpers'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'


const BorderCard = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding: 16px;
`

export default function Staking() {

	const { toastError } = useToast()
	const [stakingClass, setStakingClass] = useState();
	const [amountToStake, setamountToStake] = useState();
	const [stakingList, setstakingList] = useState([]);
	const [hasReferral, setHasReferral] = useState([]);
	const [totalAmountStaked, setTotalAmountStaked] = useState(0);
	const [numberOfActiveStake, setNumberOfActiveStake] = useState(0);
	const contract = useStakingContract();
	const { account, active, library } = useWeb3React<Web3Provider>()

	useEffect(() => {


		// erc20.transfer(toAddress,parseEther(amount)).catch('error', console.error)


		const referral = async () => {
			console.log(await contract.owner());
			// const erc20 = new Contract('addressContract', '', library.getSigner());

			// console.log(erc20)

		}

		referral();

	});


	return (
		<>
			<div className="container-fluid">


				<div className="row">
					<div className="col-sm-3 col-6">
						<div className="card overflow-hidden ">
							<h4>#3254</h4>
							<span className="pt-1 pb-1">Market Cap Rank</span>
						</div>
					</div>
					<div className="col-sm-3 col-6">
						<div className="card overflow-hidden">
							<h4>$109.819</h4>
							<span className="pt-1 pb-1">Market Cap</span>
						</div>
					</div>
					<div className="col-sm-3 col-6">
						<div className="card overflow-hidden">
							<h4>$4.41</h4>
							<span className="pt-1 pb-1">24H Volume</span>
							<div className="daily-avr warning fs-12">
								<i className="fa fa-chevron-down"></i> 0.5% 7D
							</div>
						</div>
					</div>

					<div className="col-sm-3 col-6">
						<div className="card overflow-hidden">
							<h4>$0.00034</h4>
							<span className="pt-1 pb-1">24H High/Low</span>
							<div className="daily-avr success fs-12">
								<i className="fa fa-chevron-up"></i> 1.5% 7D
							</div>
						</div>
					</div>
				</div>
				<div className="row">

					<div className="col-xl-4">
						<div className="card ">
							<div className="card-header border-0 pt-0">
								<h4 className="fs-18 ">Stake SOSX</h4>
							</div>
							<div className="card-body">
								<div className="bg-dark rounded">
									<div className="d-flex justify-content-between align-items-center pb-1">
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<span> </span>
										<span>SOSX</span>
									</div>
								</div>
								<div className="bg-dark rounded">
									<div className="d-flex justify-content-between align-items-center pb-1">
									</div>
									<div className="d-flex justify-content-between align-items-center">

										<select value={stakingClass} >

											{/* <select value={stakingClass} onChange={(e) => setStakingClass(e.target.value)} > */}

											<option hidden>Select Duration </option>
											<option value={1}>3 </option>
											<option value={2}>6 </option>
											<option value={3}>12 </option>
										</select>
									</div>
								</div>
								<div className="bg-dark rounded">
									<div className="d-flex justify-content-between">
										<div className="small2">
											<div className="success mr-1">Reward Interest: </div>
											<div className="d-flex align-items-center">
												<p></p>
											</div>
										</div>
										<div className="small2">
											<div className="success mr-1">Reward APY </div>
											<div className="d-flex align-items-center">
												<p>0%</p>
											</div>
										</div>
										<div className="small2">
											<div className="success mr-1">Estimated Rewards </div>
											<div className="d-flex text-nowrap align-items-center">
												<p>{(Number(amountToStake) * (stakingClass == 1 ? 3 : stakingClass == 2 ? 64 : 145))} SBOOST</p>
											</div>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-between">
									<button type="button" className="btn btn-primary text-nowrap mr-1 btn-lg w-100 mt-3">Approve</button>
									<button type="button" className="btn btn-primary text-nowrap btn-lg w-100 mt-3">Stake</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xl-4">
						<div className="card">
							<div className="card-header border-0 p-0">
								<h4 className="fs-18">Staking Rewards</h4>
							</div>
							<p className="success mb-0 fs-12">SOSX Staked</p>
							<h4 className="mb-0 font-w600  fs-18 pb-3">{totalAmountStaked / 10 ** 18}</h4>

							<p className="success mb-0 fs-12">Reward</p>
							<h4 className="mb-0 font-w600  fs-18 pb-3">{hasReferral ? (
								hasReferral
							) : (
								<b> No</b>
							)}</h4>

							<p className="success mb-0 fs-12">Unlocked</p>
							<h4 className="mb-0 font-w600  fs-18 pb-2">{numberOfActiveStake}</h4>
							<div className="progress mt-4 mb-4">
								<div className="progress-bar bg-success" aria-valuenow="85" aria-valuemin="0"
									aria-valuemax="100" style={{ width: '85%', height: '30px' }} role="progressbar">
									<span className="sr-only">85% Complete (success)</span>
								</div>
							</div>


							<button type="button" className="btn btn-primary btn-lg w-100 mt-5">Claim Rewards</button>
						</div>
					</div>

					<div className="col-xl-4">

						<div className="card  d-flex flex-column justify-content-between ">
							<div className="card-header border-0 p-2">

								{/* <div className="card ">
							<div className="card-header border-0 pb-0"> */}
								<div col-3>

									<div className="token-balance-icon mb-3">
										<img src="data:image/png;base64,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"
											alt="logo" className="sosx-img" />

									</div>
								</div>
								<div col-9>
									<h4 className="fs-18 pl-3">SOSX Staked</h4>
								</div>
							</div>
							<div className="card-body">
								{stakingList.length == 0 ? (
									<>
										<span className="fs-14">Staking Details</span>
										<ul className="token-balance-list mb-2 mt-2">
											<li><span className="justify-content-between success fs-12">Duration</span></li>
											<li><span className="success fs-12">Amount</span></li>
										</ul>
										<ul className="token-balance-list mb-3">
											<li className="token-balance-sub fs-12"><span className="lead fs-16 pr-1">3</span> months
											</li>
											<li className="token-balance-sub">
												<h4 className="mb-0 font-w600  fs-18">0 SOSX</h4>
											</li>
										</ul>
										<ul className="token-balance-list mb-3">
											<li className="token-balance-sub fs-12"><span className="lead fs-16 pr-1">6</span> months
											</li>
											<li className="token-balance-sub">
												<h4 className="mb-0 font-w600  fs-18">0 SOSX</h4>
											</li>
										</ul>
										<ul className="token-balance-list mb-3">
											<li className="token-balance-sub fs-12"><span className="lead fs-16 pr-1">12</span> months
											</li>
											<li className="token-balance-sub">
												<h4 className="mb-0 font-w600  fs-18">0 SOSX</h4>
											</li>
										</ul>
									</>

								) : (
									stakingList
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
