import { gql } from "@apollo/client";

export const GET_Challenges = gql`
  query Challenges {
    challenge {
      version
      timestamp
      type
      signiture
      payload {
        name
        body
        creator
      }
    }
  }
`;

export const GET_Round = gql`
  query Round {
    round {
      id
      startingTime
    }
  }
`;

export const GET_LastRound = gql`
  query LastRound {
    lastRound {
      id
      startingTime
    }
  }
`;

export const GET_Stage2Voter = gql`
  query stage2 {
    lastRound {
      cId
      voterAddress
      signiture
      level
    }
  }
`;

export const GET_Stage3Voter = gql`
  query stage3 {
    lastRound {
      cId
      voterAddress
      signiture
      level
    }
  }
`;

export const GET_Videos = gql`
  query Videos {
    videos {
      id
      rId
      cId
      urls {
        youtube
        tiktok
      }
    }
  }
`;

export const GET_LastVideo = gql`
  query Videos {
    lastVideo {
      id
      rId
      cId
      urls {
        youtube
        tiktok
      }
    }
  }
`;
