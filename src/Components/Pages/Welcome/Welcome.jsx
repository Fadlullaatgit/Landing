import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Container } from "@mui/system";
import React from "react";
import CustomButton from "../../CustomButoon/CustomButton";
import welcome from "../../Images/Amanda.png";
import { Title } from "@mui/icons-material";

const Welcome = () => {
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
    fontSize: "64px",
    color: "#2b2e7d",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", minHeight: "80vh" }}>
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
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Healthematics
            </Typography>
            <Title variant="h3">Something as highlighting Content</Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#2b2e7d",
                my: 4,
              }}
            >
              Description for highlighting
            </Typography>
              <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
              }}>            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              welcomeBtn={true}
            />
</Box>
          </Box>
          <Box sx={{ flex: "1.25" }}>
            <img
              src={welcome}
              alt="welcoming"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
            the healthematics image with its size
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Welcome;
