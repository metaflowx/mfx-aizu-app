import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import CommonButton from "@/components/ui/CommonButton";
import CloseIcon from "@mui/icons-material/Close";
import { handleNegativeValue } from "@/utils";
import { erc20Abi, formatEther, parseEther } from "viem";
import {
  StakeContractAddress,
  TokenContractAddress,
} from "@/constants/contract";
import { useAccount, useBlockNumber, useWriteContract } from "wagmi";
import { toast } from "react-toastify";
import { extractDetailsFromError } from "@/utils/extractDetailsFromError";
import useCheckAllowance from "@/hooks/useCheckAllowance";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { StakeABI } from "@/app/ABI/StakeABI";

interface AmountDialogProps {
  open: boolean;
  onClose: () => void;
  selectedId:any
  selectedData: any;
}

const AmountDialog: React.FC<AmountDialogProps> = ({
  open,
  onClose,
  selectedId,
  selectedData,
}) => {
  const [amount, setAmount] = useState<string | "">("");
  const { address } = useAccount();
  const queryClient = useQueryClient();
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const [isAproveERC20, setIsApprovedERC20] = useState(true);
  const { writeContractAsync, isPending, isSuccess, isError } =
    useWriteContract();
 

  const approveToken = async () => {
    try {
      const formattedAmount =
        Number?.(amount) > 0
          ? parseEther?.(amount.toString())
          : parseEther?.(
              BigInt((Number.MAX_SAFE_INTEGER ** 1.3)?.toString())?.toString()
            );
      const res = await writeContractAsync({
        abi: erc20Abi,
        address: TokenContractAddress,
        functionName: "approve",
        args: [StakeContractAddress, formattedAmount],
        account: address,
      });
      if (res) {
        setIsApprovedERC20(true);
        setAmount("")
        toast.success("Token approved successfully");
      }
    } catch (error: any) {
      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };

  const resultOfCheckAllowance = useCheckAllowance({
    spenderAddress: StakeContractAddress,
    token: TokenContractAddress,
  });

  useEffect(() => {
    if (resultOfCheckAllowance && address) {
      const price = parseFloat(amount === "" ? "0" : amount);
      const allowance = parseFloat(
        formatEther?.(resultOfCheckAllowance.data ?? BigInt(0))
      );
      if (allowance >= price) {
        setIsApprovedERC20(true);
      } else {
        setIsApprovedERC20(false);
      }
    }
  }, [resultOfCheckAllowance, address, amount]);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: resultOfCheckAllowance.queryKey,
    });
  }, [blockNumber, QueryClient, resultOfCheckAllowance]);


    const handleSubmit = async () => {
      if (amount !== "") {
        try {
          const formattedAmount = parseEther(amount);
    
          const res = await writeContractAsync({
            address: StakeContractAddress,
            abi: StakeABI,
            functionName: "stake",
            args: [BigInt(selectedId), formattedAmount],
          });
    
          if (res) {
            onClose();
            toast.success("Stake completed");
          }
        } catch (error: any) {
          console.log(">>>>>>>>>>>>.error", error);
    
          toast.error(extractDetailsFromError(error.message as string) as string);
        }
       
      }
    
    };
    const minStaked = parseFloat(formatEther(selectedData?.minStaked));
    const userAmount = parseFloat(amount);
console.log(">>>>>>>>>>>>checking", userAmount < minStaked);



  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          border: "2px solid  rgb(40, 101, 255)", // Blue border for the modal
          background: "#000",
          borderRadius: "10px",
        },
      }}
    >
      <DialogTitle style={{ background: "#000" }}>
        <div className="flex justify-between">
          <Typography style={{ color: "#fff" }} variant="h5">
            Confirmation
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon style={{ color: "#fff" }} />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent style={{ background: "#000" }}>
        {selectedData && (
          <>
            <Typography style={{ color: "#fff" }} variant="h6" gutterBottom>
              {selectedData.title1}
            </Typography>
            <Typography style={{ color: "#fff" }} variant="body1">
              Multiplier: {`${Number(selectedData.returnInPercent)/1e4}X`}
            </Typography>
            <Typography style={{ color: "#fff" }} variant="body1">
             Daily Staking Benefit: {Number(selectedData?.dailyRewardRateInPercent)/1e2}
            </Typography>
           
          </>
        )}
        <Typography style={{ color: "#fff" }} pt={2}>
          Enter Amount
        </Typography>
        <TextField
          onKeyDown={(e) => handleNegativeValue(e)}
          type="number"
          fullWidth
          variant="outlined"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value === "" ? "" : e.target.value)
          }
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "blue" }, // Default border color
              "&:hover fieldset": { borderColor: "lightblue" }, // Hover effect
              "&.Mui-focused fieldset": { borderColor: "blue" }, // Focus effect
            },
            input: { color: "#fff" }, // Text color inside the input
          }}
        />
        { ( userAmount < minStaked) && (

        <Typography sx={{color:"red",pt:1}}>Min : {`${selectedData?.minStaked ? formatEther(selectedData?.minStaked):"0"} AIZU`} </Typography>
        )}
      </DialogContent>
      <DialogActions style={{ background: "#000" }}>
        <CommonButton
        disabled={isPending||amount==="" || userAmount < minStaked}
          title={
            isPending
              ? isAproveERC20
                ? "Staking..."
                : "Approving..."
              : amount === ""
              ? "Please enter amount"
              : isAproveERC20
              ? "Submit"
              : "Approve"
          }
          width="100%"
          scale={100}
          onClick={() => {
            !isAproveERC20 ? approveToken() : handleSubmit();
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AmountDialog;
