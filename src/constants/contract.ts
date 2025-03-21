import { IcoABI } from "@/app/ABI/IcoABI";
import { RefferABI } from "@/app/ABI/RewardToken";
import { StakeABI } from "@/app/ABI/StakeABI";
import { TokenABI } from "@/app/ABI/TokenSupply";
export const TokenContractAddress = "0x141A753ebE663B653C7675D54D54c2e795162dee"; 
export const ICOContractAddress ="0x2125f31B765a709fE7acC781BDA942836B4110Cc"
export const ReferralContractAddress="0x9E5b8a10d47B8eb8A3abA5f6e2A7F07281313867"
export const StakeContractAddress="0xc03FBB73EF9625d1129481C06f78658E85A407e6"


export const contractConfig = {
    address: ReferralContractAddress as `0x${string}`,
    abi: RefferABI,
  };

  export const iocConfig = {
    address: ICOContractAddress as `0x${string}`,
    abi: IcoABI,
    
  };

  export const tokenConfig = {
    address: TokenContractAddress as `0x${string}`,
    abi: TokenABI,
    
  };

  export const stakeConfig = {
    address: StakeContractAddress as `0x${string}`,
    abi: StakeABI,
    
  };
