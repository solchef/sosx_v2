import axios from "axios";
import { GET_WalletIsVoted, GET_WalletIsVoted2 } from "utils/graphqlQ";

export const getWalletIsVotedStage2 = async (wallet: string) => {
  const result = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
    query: GET_WalletIsVoted,
    variables: { wallet: wallet },
  });

  return result.data.data;
};

export const getWalletIsVotedStage3 = async (wallet: string) => {
  const result = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
    query: GET_WalletIsVoted2,
    variables: { wallet: wallet },
  });

  return result.data.data;
};
