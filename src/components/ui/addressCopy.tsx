"use client"
import { Box, IconButton, Snackbar, Typography, styled } from "@mui/material";
import copy from 'clipboard-copy';
import Link from "next/link";
import {
 
    Copy
  } from "lucide-react"
import React, { useState } from "react";
 

interface props {
    text: string;
    textColor?: string;
    addresstext: string;
    hrefLink: string;
    
}
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
    borderRadius: '8px',
    
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#fff !important',
    fontWeight: 500,
    fontSize:'17px !important',
    '@media(max-width : 600px)':{
            fontSize:'13px !important',
        }
}));

const AddressCopy = ({ text,textColor, addresstext, hrefLink  }: props) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
     
    const handleCopy = () => {
        copy(text);
        setOpenSnackbar(true);
        // alert('Text copied to clipboard!');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <StyledBox>
                <StyledLink sx={{color: textColor}} href={hrefLink}>
                    {addresstext}
                </StyledLink>

                <Box onClick={handleCopy}>
                    <Copy color="#fff" size={16}/>
                </Box>
                <Snackbar
                 

                 
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message="Address copied"

                />
            </StyledBox>
        </>
    );
};

export default AddressCopy;