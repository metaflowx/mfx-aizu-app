import {
  Box,
  InputBase,
  MenuItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import Slidercoin from "./slidercoin";
import { SetStateAction, useState } from "react";
import { useReadContract } from "wagmi";
import { iocConfig } from "@/constants/contract";
import { useAppKitNetwork } from "@reown/appkit/react";
import { formatEther } from "viem";

const InnerTab = ({
  setValue,
  selectedCurrency,
  setSelectedCurrency,
}: {
  setValue: any;
  selectedCurrency: any;
  setSelectedCurrency: any;
}) => {
  const [selectedLable, setSelectedLable] = useState("Pre-Sale");
 const { chainId } = useAppKitNetwork();

  const handleSelectLable = (value: SetStateAction<string>) => {
    setSelectedLable(value);
  };
   const tokenPrice = useReadContract({
         
                ...iocConfig,
                functionName: "getSaleTokenPrice",
                args: [1],
                chainId: Number(chainId) ?? 56,
              
      })



  return (
    <>
      <Box></Box>
      <Box
        sx={{
          background: "linear-gradient(90deg, #2865FF 0%, #DD4242 50%, #2865FF 100%)",
          padding: "1.5rem",
          margin: "auto",
          width: "400px",
          borderRadius: "20px",
          border: "1px solid #1D1D20",
          marginTop: "0.5rem",
          "@media(max-width : 600px)": {
            width: "100%",
            marginTop: "2rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <Box>
            <Box>
              <Typography color="#fff"> {selectedLable}</Typography>
              <Typography fontSize={20} color="#fff" fontWeight={500}>
                $0.01
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "1px",
              backgroundColor: "#fff",
              height: "50px",
            }}
          />
          <Box>
            <Typography color="#fff">Current Price</Typography>
            <Typography color="#fff" fontSize={20} fontWeight={500}>
              ${Number(formatEther(BigInt(tokenPrice?.data ?? 0)))}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Slidercoin setValue={setValue} />
      {/* </Box> */}
    </>
  );
};

export default InnerTab;
