import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography, IconButton } from "@mui/material";
import CommonButton from "@/components/ui/CommonButton";
import CloseIcon from '@mui/icons-material/Close';
import { handleNegativeValue } from "@/utils";

interface AmountDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (amount: number) => void;
  selectedData: any;
}

const AmountDialog: React.FC<AmountDialogProps> = ({ open, onClose, onSubmit, selectedData }) => {
  const [amount, setAmount] = useState<number | "">("");

  const handleSubmit = () => {
    if (amount !== "") {
      onSubmit(Number(amount));
      setAmount(""); // Reset field after submission
    }
  };

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
          borderRadius:"10px"
        }
      }}
    >
      <DialogTitle style={{ background: "#000" }}>
        <div className="flex justify-between">
          <Typography style={{ color: "#fff" }} variant="h5">Confirmation</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon style={{ color: "#fff" }} />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent style={{ background: "#000" }}>
        {selectedData && (
          <>
            <Typography style={{ color: "#fff" }} variant="h6" gutterBottom>{selectedData.title1}</Typography>
            <Typography style={{ color: "#fff" }} variant="body1">Multiplier: {selectedData.title}</Typography>
            <Typography style={{ color: "#fff" }} variant="body1">Staking Benefit: {selectedData.des}</Typography>
            <Typography style={{ color: "#fff" }} variant="body1">Reward: {selectedData.amount}</Typography>
          </>
        )}
        <Typography style={{ color: "#fff" }} pt={2}>Enter Amount</Typography>
        <TextField
          onKeyDown={(e) => handleNegativeValue(e)}
          type="number"
          fullWidth
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "blue" }, // Default border color
              "&:hover fieldset": { borderColor: "lightblue" }, // Hover effect
              "&.Mui-focused fieldset": { borderColor: "blue" }, // Focus effect
            },
            input: { color: "#fff" } // Text color inside the input
          }}
        />
      </DialogContent>
      <DialogActions style={{ background: "#000" }}>
        <CommonButton title="Submit" width="100%" scale={100} onClick={handleSubmit} />
      </DialogActions>
    </Dialog>
  );
};

export default AmountDialog;
