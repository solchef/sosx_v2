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
      votedList {
        stage2 {
          cId
          voterAddress
          signiture
          level
        }
        stage3 {
          cId
          voterAddress
          signiture
          level
        }
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

export const GET_MyChallenge = `
  query GetMyChallenge($wallet: String) {
    getMyChallenge(wallet: $wallet) {
      version
      timestamp
      type
      signiture
      payload {
        name
        body
        creator
      }
      votedList {
        stage2 {
          cId
          voterAddress
          signiture
          level
        }
        stage3 {
          cId
          voterAddress
          signiture
          level
        }
      }
    }
  }
`;

export const GET_WiningChallenge = gql`
  query WiningChallenge {
    winingChallenge {
      version
      timestamp
      type
      signiture
      payload {
        name
        body
        creator
      }
      votedList {
        stage2 {
          cId
          voterAddress
          signiture
          level
        }
        stage3 {
          cId
          voterAddress
          signiture
          level
        }
      }
    }
  }
`;

export const GET_Stage3Challenges = gql`
  query Stage3Challenges {
    stage3Challenges {
      version
      timestamp
      type
      signiture
      payload {
        name
        body
        creator
      }
      votedList {
        stage2 {
          cId
          voterAddress
          signiture
          level
        }
        stage3 {
          cId
          voterAddress
          signiture
          level
        }
      }
    }
  }
`;

export const GET_Challange_Pages = `
query GetChallengesByPage($page: Int, $values: Int) {
  getChallengesByPage(page: $page, values: $values) {
    chalanges {
      version
      timestamp
      type
      signiture
      payload {
        name
        body
        creator
      }
      votedList {
        stage2 {
          cId
          voterAddress
          signiture
          level
        }
        stage3 {
          cId
          voterAddress
          signiture
          level
        }
      }
    }
    maxData
  }
}`;

export const GET_WalletIsVoted = `
  query Vote($wallet: String) {
    walltIsVotaed2(wallet: $wallet) {
      cId
      voterAddress
      signiture
      level
    }
  }
`;

export const GET_WalletIsVoted2 = `
  query Vote($wallet: String) {
    walltIsVotaed3(wallet: $wallet) {
      cId
      voterAddress
      signiture
      level
    }
  }
`;

export const GET_VoteByCallangeIdStage2 = `
 query Vote($getVoteByCIdId: String) {
  getVoteByCId(id: $getVoteByCIdId) {
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
