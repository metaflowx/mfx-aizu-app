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

interface AmountDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (amount: string) => void;
  selectedData: any;
}

const AmountDialog: React.FC<AmountDialogProps> = ({
  open,
  onClose,
  onSubmit,
  selectedData,
}) => {
  const [amount, setAmount] = useState<string | "">("");
  const { address } = useAccount();
  const queryClient = useQueryClient();
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const [isAproveERC20, setIsApprovedERC20] = useState(true);
  const { writeContractAsync, isPending, isSuccess, isError } =
    useWriteContract();
  const handleSubmit = () => {
    if (amount !== "") {
      onSubmit(String(amount));
     
    }
  };

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

  console.log(">>>>>>>>>>>isAproveERC20", isAproveERC20);

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
              Multiplier: {selectedData.title}
            </Typography>
            <Typography style={{ color: "#fff" }} variant="body1">
              Staking Benefit: {selectedData.des}
            </Typography>
            <Typography style={{ color: "#fff" }} variant="body1">
              Reward: {selectedData.amount}
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
      </DialogContent>
      <DialogActions style={{ background: "#000" }}>
        <CommonButton
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
