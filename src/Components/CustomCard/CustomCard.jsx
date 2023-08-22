import React from "react";
import { Box, styled, Typography } from "@mui/material";
// import Like from "../Images/like.png";
// import Heart from "../Images/heart.png";
// import Share from "../Images/share.png";

const CustomCard = ({ img, price, item, likes, heart, share }) => {
  const ServiceBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    width: "200px",
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
    "&:hover": {
      backgroundColor: "#f5f5f5",
      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
      transform: "scale(1.05)",
      transition: "all 0.3s ease-in-out",
    },
  }));
//   const InfoBox = styled(Box)(() => ({
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   }));
  const ImgContainer = styled(Box)(() => ({
    width: "100%",
    textAlign: "center",
  }));

  return (
    <ServiceBox
      sx={{
        justifyContent: "center",
        alignItems: "center",
        pt: "20px",
        pb: "10px",
      }}
    >
      <ImgContainer>
        <img src={img} alt="" style={{ maxWidth: "100%" }} />
      </ImgContainer>
      <Box sx={{ padding: "1 rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          {price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2, textAlign: "center" }}>
          <b>{item}</b>
        </Typography>
        {/* <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
    }}>
    <InfoBox>
        <img src={Like} alt="" />
        <Typography variant='body2' sx={{mt:1}}>
            {likes}
        </Typography>
    </InfoBox>
    <InfoBox>
        <img src={Heart} alt="" />
        <Typography variant='body2' sx={{mt:1}}>
            {heart}
        </Typography>
    </InfoBox>
    <InfoBox>
        <img src={Share} alt="" />
        <Typography variant='body2' sx={{mt:1}}>
            {share}
        </Typography>
    </InfoBox>

        
    </Box> */}
      </Box>
    </ServiceBox>
  );
};

export default CustomCard;
