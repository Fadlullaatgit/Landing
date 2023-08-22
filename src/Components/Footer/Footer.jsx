import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import fbIcon from "../Images/facebook.png";
import twitterIcon from "../Images/twitter.png";
import instaIcon from "../Images/instagram.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#000066",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#66B2FF",
    },
  }));
  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  return (
    <Box>
    <Box id="footer-section" sx={{ py: 10, backgroundColor: "#9EC2B1" }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Featured
          </Typography>

          <FooterLink>Guides</FooterLink>
          <br />
          <FooterLink>Services</FooterLink>
          <br />
          <FooterLink>Contact Us</FooterLink>
        </Box>
        <Box> <p style={{display:"flex",justifyContent:"center",}}>
        </p>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            OverView
          </Typography>

          <FooterLink>Location</FooterLink>
          <br />
          <FooterLink>Partnerships</FooterLink>
          <br />
          <FooterLink>Terms of use & Privacy Policies</FooterLink>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: "500",
              mb: 2,
            }}
          >
            Keep in touch with our social media pages.
          </Typography>
          <IconBox>
            <img src={twitterIcon} alt="" style={{ cursor: "pointer" }} />
            <img src={fbIcon} alt="" style={{ cursor: "pointer" }} />
            <img src={instaIcon} alt="" style={{ cursor: "pointer" }} />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
    </Box>
  );
};

export default Footer;
