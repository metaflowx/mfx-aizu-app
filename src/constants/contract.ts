import { IcoABI } from "@/app/ABI/IcoABI";
import { RefferABI } from "@/app/ABI/RewardToken";
import { TokenABI } from "@/app/ABI/TokenSupply";
export const TokenContractAddress = "0x61b32cf6bd1bce35b63ff5a66cd49406910cdf7e"; 
export const ICOContractAddress ="0x4644574E0C45628058f8a861818000DcAC74a20A"
export const ReferralContractAddress="0xeAA480AAdb29b4F847B760f6F5a85D68C69fFF4C"
export const StakeContractAddress="0x64c31fe6b884f33c218f9fd7668ee2145e19a473"


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
