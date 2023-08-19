import React from 'react'
import { Box,Container,styled,Typography } from '@mui/material'


const About = () => {
    const PropertiesTextBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{

        },
    }));

  return (
    <Box sx={{mt:5, backgroundColor:"#000000"}}>

            <Container>
                <PropertiesTextBox>
                    <Typography
                    sx={{color:"#000339",fontSize:"35px",fontWeight:"bold",justifyContent:"center",display:"flex"}}>
                            About Us
                    </Typography>
                    <Typography sx={{color:"#5A6473",fontSize:"16px",mt:1,justifyContent:"center",display:"flex"}}>
                            ..........................................................
                    </Typography>
                </PropertiesTextBox>
            </Container>
    </Box>
  )
}
export default About