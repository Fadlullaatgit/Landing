import {
  Box,
  Container,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import aboutUs from '../../Images/about.png'



const About = () => {

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


  return (
    <Box id="about-section" sx={{ py: "10px", backgroundColor: "#ffffff" }}>
      <Container>
        <Typography
          sx={{
            color: "#000339",
            fontSize: "35px",
            fontWeight: "bold",
            justifyContent: "center",
            display: "flex",
            mt: "20px",
          }}
        >
          About Us
        </Typography>
        <CustomBox>
          <img src={aboutUs} alt=""/>

        <Typography
          sx={{
            color: "#5A6473",
            fontSize: "16px",
            mt: 6,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <p>
            Sehatpedia Co. W.L.L. was established in 2022 under the partnership
            between ARHC Consultants W.L.L., one of the leading Healthcare
            Consultancy companies in GCC since many decades with focus on
            healthcare & life-sciences projects, founded by Healthcare
            Professionals, who were part of leading healthcare delivery
            organizations in GCC & India and Dun & Bradstreet, who brings in
            more than 50 years of combined healthcare experience and few
            entrepreneurs, headquarters in Manama, Bahrain.
            <br />
            <br />
            Sehatpedia Co W.L.L. specializes in providing consultancy services
            through its platform, Healthematics.com, a web-based user friendly
            consultancy global platform designed to provide wide range of
            comprehensive level of information to healthcare professionals and
            healthcare industry.{" "}
          </p>{" "}
        </Typography>
        <br />
        <br />
        </CustomBox>

      </Container>
    </Box>
  );
};

export default About;
