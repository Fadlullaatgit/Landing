import { styled } from '@mui/system';
import {  Button } from '@mui/material';
import React from 'react'

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  welcomeBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomButton = styled(Button)(({theme})=>({
    backgroundColor:backgroundColor,
    color:color,
    fontWeight:"500px",
    display:"block",
    fontSize:'16px',
    cursor:'pointer',
    padding:"0.5rem 1.25rem",
    borderRadius:"10px",
    textTransform:"none",
    border:"none",
    '&:hover':{
      backgroundColor:color,
      color:backgroundColor,
    },
    [theme.breakpoints.down("md")]:{
      margin : (welcomeBtn || getStartedBtn) && theme.spacing(0,"auto",3,"auto"),
      width:(welcomeBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]:{
      marginTop : guideBtn && theme.spacing(3),
      width:guideBtn && "90%",
    },

}));

  return (
    <CustomButton>{buttonText}</CustomButton>
  )
}

export default CustomButton