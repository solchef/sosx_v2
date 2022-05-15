import { ChainId } from '@pancakeswap/sdk'
import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'
import { VaultKey } from 'state/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.NEXT_PUBLIC_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getLotteryV2Address = () => {
  return getAddress(addresses.lotteryV2)
}
export const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
export const getPancakeRabbitsAddress = () => {
  return getAddress(addresses.pancakeRabbits)
}
export const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
export const getClaimRefundAddress = () => {
  return getAddress(addresses.claimRefund)
}
export const getPointCenterIfoAddress = () => {
  return getAddress(addresses.pointCenterIfo)
}
export const getBunnySpecialAddress = () => {
  return getAddress(addresses.bunnySpecial)
}
export const getTradingCompetitionAddress = () => {
  return getAddress(addresses.tradingCompetition)
}
export const getTradingCompetitionAddressV2 = () => {
  return getAddress(addresses.tradingCompetitionV2)
}
export const getEasterNftAddress = () => {
  return getAddress(addresses.easterNft)
}

export const getVaultPoolAddress = (vaultKey: VaultKey) => {
  if (!vaultKey) {
    return null
  }
  return getAddress(addresses[vaultKey])
}

export const getCakeVaultAddress = () => {
  return getAddress(addresses.cakeVault)
}
export const getIfoPoolAddress = () => {
  return getAddress(addresses.ifoPool)
}
export const getPredictionsAddress = () => {
  return getAddress(addresses.predictions)
}
export const getChainlinkOracleAddress = () => {
  return getAddress(addresses.chainlinkOracle)
}
export const getBunnySpecialCakeVaultAddress = () => {
  return getAddress(addresses.bunnySpecialCakeVault)
}
export const getBunnySpecialPredictionAddress = () => {
  return getAddress(addresses.bunnySpecialPrediction)
}
export const getBunnySpecialLotteryAddress = () => {
  return getAddress(addresses.bunnySpecialLottery)
}
export const getstakingContractAddress = () => {
  return "0xab1EffDe3241545a26e1597BDf3A0E2724AB9924";
}

// export const getSosxDaoContractAddress = () => {
//   return "0x1aA0ce82643700b4A554368F286fEF76Dd60Ab72";
// }

export const getSosxDaoContractAddress = () => {
  return "0x5F2cd649D6C1BaF0014D84Bc42509EB9027B7C1D";
}

// {testnet}
// export const getSosxDaoContractAddress = () => {

//   return "0x229EDaEc0f6fa541222A2f6F8a9825e13FD11756";
// }

export const getSosxContractAddress = () => {
  return "0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF";
}


// {testnet}
// export const getSosxContractAddress = () => {
//   return "0xaD0c583B2c84b84f017DedBD74c645EFBAb2597b";
// }

export const getBunnySpecialXmasAddress = () => {
  return getAddress(addresses.bunnySpecialXmas)
}
export const getFarmAuctionAddress = () => {
  return getAddress(addresses.farmAuction)
}
export const getAnniversaryAchievement = () => {
  return getAddress(addresses.AnniversaryAchievement)
}
export const getNftMarketAddress = () => {
  return getAddress(addresses.nftMarket)
}
export const getNftSaleAddress = () => {
  return getAddress(addresses.nftSale)
}
export const getPancakeSquadAddress = () => {
  return getAddress(addresses.pancakeSquad)
}
