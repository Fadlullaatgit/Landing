import React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const NewsLetter = ({ title }) => {
  const [email, setEmail] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleProceed();
    }
  };

  const handleProceed = () => {
        setEmail('');
    console.log("Proceeding with email:", email);

    // Handle email submission logic here
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Card
        sx={{
          backgroundColor: '#54bd95',
          backgroundImage: 'linear-gradient(135deg, #54bd95 0%, #d4e1d9 46%, #9ec2b1 100%)',
        }}
      >
        <br />
        <h1 style={{ textAlign: 'center' }}>Get Updates?</h1>
        <h2 style={{ textAlign: 'center' }}>and get notifications!!!</h2>
        <p></p>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            label="Enter your email"
            value={email}
            type="email"
            onChange={handleEmailChange}
            onKeyUp={handleEnterKeyPress}
            variant="outlined"
            sx={{ mt: 2, width: '100%', maxWidth: '300px', marginRight: '10px' }}
          />
          <Button
            variant="contained"
            disabled={!email}
            onClick={handleProceed}
            sx={{
              mt: 2,
              backgroundColor: '#0F1B4C',
              color: '#ffffff',
              '&:hover': {
                color: '#0F1B4C',
                backgroundColor: '#ffffff',
              },
            }}
          >
            Confirm
          </Button>
        </Box>
        <br />
        <br />
      </Card>
    </Container>
  );
};


export default NewsLetter;
