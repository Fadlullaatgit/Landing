import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const NewsLetter = ({ title }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleProceed = () => {
    setEmail("");
    console.log("Proceeding with email:", email);
  };


  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      handleProceed();
    }
  };


  return (
    <Container>
      {/* <h2>{title}</h2> */}
      <Card
        sx={{
          backgroundColor: "#365BC2",
          backgroundImage: "linear-gradient(180deg, #365BC2 0%,  #8AB7FF 100%)",
        }}
      >
        <br />
        <h1 style={{ textAlign: "center" }}>Get Updates?</h1>
        <h2 style={{ textAlign: "center" }}>and get notifications!!!</h2>
        <Box sx={{ display: "flex", justifyContent: "center" ,px:"10px"}}>
          <TextField
            label="Enter your email"
            value={email}
            type="email"
            onChange={handleEmailChange}
            onKeyUp={handleEnterKeyPress}
            variant="outlined"
            sx={{
              mt: 2,
              width: "100%",
              maxWidth: "700px",
              marginRight: "10px",
            }}
          />
          <Button
            variant="contained"
            disabled={!email}
            onClick={handleProceed}
            sx={{
              mt: 2,
              backgroundColor: "#0F1B4C",
              color: "#ffffff",
              "&:hover": {
                color: "#0F1B4C",
                backgroundColor: "#90ee90",
              },
            }}
          >
            Submit
          </Button>
          
        </Box>
        <br />
        <br />
      </Card>
    </Container>
  );
};

export default NewsLetter;
