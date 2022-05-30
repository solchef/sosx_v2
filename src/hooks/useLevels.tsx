import { useDaoStakingContract } from "hooks/useContract";
import { useState } from "react";

const useLevels = (account) => {
    const contract = useDaoStakingContract();
    const [level, setLevel] = useState(Number)

    const getLevel = (amount) => {
        if (amount >= process.env.NEXT_PUBLIC_LEVEL1 && amount < process.env.NEXT_PUBLIC_LEVEL2) { return 1; }
        if (amount >= process.env.NEXT_PUBLIC_LEVEL2 && amount < process.env.NEXT_PUBLIC_LEVEL3) { return 2; }
        if (amount >= process.env.NEXT_PUBLIC_LEVEL3) { return 3; }
    }
    
    async () => {
        let amount = await contract.getVoterTotalStakeAmount(account);
        amount = amount / (10 ** 18);
        let level = getLevel(amount);
        setLevel(level)
    }
    return level
}

export default useLevels


