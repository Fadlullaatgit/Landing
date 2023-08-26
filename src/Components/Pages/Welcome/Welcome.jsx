import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { Container } from "@mui/system";
import React from "react";
import CustomButton from "../../CustomButoon/CustomButton";
import MainPage from "../../Images/MainPage.jpg";

const Welcome = () => {
  const theme = useTheme();

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#2b2e7d",
    fontWeight: "bold",
    margin: theme.spacing(0, 0, 0, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box
      id="home-section"
      sx={{ backgroundColor: "#fffffF", minHeight: "80vh" }}
    >
      <Container>
        <CustomBox>
          <Box
            sx={{
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#2b2e7d",
                fontWeight: "500",
                mt: 25,
                mb: 3,
                ml: "-79px",
                [theme.breakpoints.down("md")]: {
                  mt: 5,
                  ml: "0px",
                },
              }}
            >
              {/* Welcome to Healthematics */}
              <Title>Smart Solutions For Healthcare Professionals</Title>
              Experience the future of consultancy with One Click Away: Where
              innovation meets expertise effortlessly.{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                welcomeBtn={true}
              />
            </Box>
          </Box>
          <Box
            sx={{
              flex: "1.25",
              display: "flex",
              justifyContent: "flex-end",
              marginInlineEnd:"-80px",
              "@media (max-width: 960px)": {
                marginInlineEnd: 0,
              },
            }}
          >
            <img src={MainPage} alt="welcoming" style={{ maxWidth: "100%" }} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Welcome;
