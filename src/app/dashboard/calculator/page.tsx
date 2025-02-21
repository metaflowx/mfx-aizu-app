"use client";
import { Box, InputBase, Typography } from "@mui/material";

import InnerTab from "./InnerTab";
import { useState } from "react";

const CoinCalculate = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState<number[]>([0.05]);
  const [selectedCurrency, setSelectedCurrency] = useState("0.05");
  return (
    <>
      <Box
        sx={{
          padding: "1.5rem",
          "@media(max-width : 600px)": {
            padding: "0.5rem",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography fontSize={20} color={"#fff"}>
            Calculate your profits on coin launch
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "1.5rem",
          }}
        >
          <Typography color={"#fff"}>
            Enter how much AIZU coins you have in the input below.
          </Typography>

          <div
            data-aos="fade-down"
            style={{
              background:
                "linear-gradient(180deg, rgba(166, 166, 166, 0) 0%, #A6A6A6 50%, rgba(166, 166, 166, 0) 100%)",
              backdropFilter: "blur(0.8748223781585693px)",
            }}
            className="rounded-[8px] w-full p-[1px]"
          >
            <div
              data-aos="fade-down"
              className="flex bg-[#15171C] rounded-[8px] p-4"
            >
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-transparent text-white w-full outline-none"
                placeholder="0.00 AIZU"
              />
            </div>
          </div>
        </Box>

        <Box
          sx={{
            marginTop: "1.5rem",
          }}
        >
          <Typography color={"#fff"}>USD Amount</Typography>
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(166, 166, 166, 0) 0%, #A6A6A6 50%, rgba(166, 166, 166, 0) 100%)",
              backdropFilter: "blur(0.8748223781585693px)",
            }}
              className="rounded-[8px] w-full p-[1px]"
          >
            <div
              data-aos="fade-down"
              className="flex bg-[#15171C] rounded-[8px] p-4"
            >
              <input
                value={
                  value && value1
                    ? `${
                        Number(value) *
                        Number(
                          selectedCurrency && Number(value1) <= 0.05
                            ? selectedCurrency
                            : value1
                        )
                      }`
                    : "$0.00"
                }
                className="bg-transparent text-white w-full outline-none"
                placeholder="0.00 AIZU"
              />
            </div>
          </div>
        </Box>

        <InnerTab
          setValue={setValue1}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      </Box>
    </>
  );
};

export default CoinCalculate;
