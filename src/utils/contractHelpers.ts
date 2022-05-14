import type { Signer } from '@ethersproject/abstract-signer'
import type { Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { simpleRpcProvider } from 'utils/providers'
import tokens from 'config/constants/tokens'

// Addresses
import {
  getPancakeProfileAddress,
  getMasterChefAddress,
  getPointCenterIfoAddress,
  getstakingContractAddress,
  getSosxContractAddress,
  getPredictionsAddress,
  getSosxDaoContractAddress,
} from 'utils/addressHelpers'

// ABI
import cakeAbi from 'config/abi/cake.json'
import pointCenterIfo from 'config/abi/pointCenterIfo.json'
import masterChef from 'config/abi/masterchef.json'
import sosxStakingAbi from 'config/abi/sosxStakingAbi.json'
import sosxDaoStakingAbi from 'config/abi/sosxABI.json'
import sosxTokenABI from 'config/abi/sosxTokenABI.json'
import predictionsAbi from 'config/abi/predictions.json'

// Types
import type {
  Predictions,
  Cake,
  PancakeProfile,
  Masterchef,
  PointCenterIfo,
  // Staking,
} from 'config/abi/types'
import { useWeb3React } from '@web3-react/core'

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new Contract(address, abi, signerOrProvider)
}

// const { account, library } = useWeb3React<Provider>()


export const getMulticallContract = (signer?: Signer | Provider) => {
  // return getContract(pointCenterIfo, getPointCenterIfoAddress(), signer) as PointCenterIfo
}

export const getPointCenterIfoContract = (signer?: Signer | Provider) => {
  // return getContract(pointCenterIfo, getPointCenterIfoAddress(), signer) as PointCenterIfo
}
export const getCakeContract = (signer?: Signer | Provider) => {
  // return getContract(cakeAbi, tokens.cake.address, signer) as Cake
}
export const getProfileContract = (signer?: Signer | Provider) => {
  // return getContract(profileABI, getPancakeProfileAddress(), signer) as PancakeProfile
}


export const getMasterchefContract = (signer?: Signer | Provider) => {
  // return getContract(masterChef, getMasterChefAddress(), signer) as Masterchef
}

export const getStakingContract = (signer?: Signer | Provider) => {
  return getContract(sosxDaoStakingAbi, getstakingContractAddress(), signer);
}

export const getDaoStakingContract = (signer?: Signer | Provider) => {
  return getContract(sosxStakingAbi, getSosxDaoContractAddress(), signer);
}

export const getSosxContract = (signer?: Signer | Provider) => {
  return getContract(sosxTokenABI, getSosxContractAddress(), signer);
}

export const getPredictionsContract = (signer?: Signer | Provider) => {
  return getContract(predictionsAbi, getPredictionsAddress(), signer) as unknown as Predictions
}

