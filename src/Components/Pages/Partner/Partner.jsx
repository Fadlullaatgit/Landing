import React from 'react'
import {Box,Container} from '@mui/material';
import {styled} from '@mui/system';
// import Logo from '../../Images/logo.png';
// import stars from '../../Images/5star.png';
import jci from '../../Images/JCIlogo.png';
import Who from '../../Images/WHO.png';
import CHT from '../../Images/CHT.png';
import GoogleHealth from '../../Images/GoogleHealth.png';


const Partner = () => {
    const PartnersBox = styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"center",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
        },
    }));


    const CustomContainer = styled(Container)(({theme}) =>({
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
            marginBottom:theme.spacing(4),
        },
    }));

    // const CustomBox = styled(Box)(({theme}) => ({
    //     [theme.breakpoints.down("md")]:{
    //         marginBottom:theme.spacing(4),
    //     },
    // }));

  return (
    <Box sx={{backgroundColor:"#fff",py:5}}>
        <CustomContainer>
            {/* <CustomBox>
                <img src={Logo} alt="" style={{maxWidth:"200px"}}/>
                <Typography
                variant='body2' sx={{
                    color:"#7D8589",
                    fontSize:"16px",
                    fontWeight:"bold",
                    mt:2,
                }}>
                </Typography>
            </CustomBox> */}
            {/* <Box>
            <img src={stars} alt="" style={{maxWidth:"100%"}}/>
                <Typography
                variant='body2' sx={{
                    color:"#7D8589",
                    fontSize:"16px",
                    fontWeight:"bold",
                    mt:2,
                }}>
                    5-star Rating (2k+ Reviews)
                </Typography>
            </Box> */}

        </CustomContainer>

        <Container sx={{display:"flex",flexDirection:"column"}}>
            <PartnersBox>
            <img src={jci} alt="Companies" height="55px" style={{marginLeft:"50px",marginRight:"50px", marginTop:"10px"}}/>
            <img src={Who} alt="Companies" height="100px" style={{marginLeft:"50px",marginRight:"50px", marginTop:"-10px"}}/>
            <img src={CHT} alt="Companies" height="55px" style={{marginLeft:"50px",marginRight:"50px", marginTop:"10px"}}/>
            <img src={GoogleHealth} alt="Companies" height="55px" style={{marginLeft:"50px",marginRight:"50px", marginTop:"10px"}}/>
            </PartnersBox>
        </Container>

    </Box>
  )
}

export default Partner