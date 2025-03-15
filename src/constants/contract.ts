import { IcoABI } from "@/app/ABI/IcoABI";
import { RefferABI } from "@/app/ABI/RewardToken";
import { TokenABI } from "@/app/ABI/TokenSupply";
export const TokenContractAddress = "0x61b32cf6bd1bce35b63ff5a66cd49406910cdf7e"; 
export const ICOContractAddress ="0x61a29dc57adce2b92dbad4872c4d5b20b139afc6"
export const ReferralContractAddress="0x13e9df4478757861e49366ffa8abb8b9a0bb21d5"

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