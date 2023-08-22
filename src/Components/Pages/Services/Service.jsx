import React from 'react'
import { Box,Container,styled,Typography } from '@mui/material'
import CustomCard from '../../CustomCard/CustomCard'
import { Data } from '../../../StaticData/Data'
import NewsLetter from '../../NewsLetter/Newsletter'

const Service = () => {

    const ServicesBox = styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"center",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
        },
    }));

    const PropertiesTextBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{

        },
    }));

  return (
    <Box sx={{py: 10,backgroundColor:"#f5fafe" }}>

            <Container>
                <PropertiesTextBox>
                    <Typography
                    sx={{color:"#000339",fontSize:"35px",fontWeight:"bold",justifyContent:"center",display:"flex"}}>
                            Our Services
                    </Typography>
                    <Typography sx={{color:"#5A6473",fontSize:"16px",mt:1,justifyContent:"center",display:"flex"}}>
                            Use our services and get back your health as wealth
                    </Typography>
                </PropertiesTextBox>
                <ServicesBox>
                        {Data.map((HospitalServices)=>(
                            <CustomCard
                            key={HospitalServices.id}
                            img={HospitalServices.img}
                            item={HospitalServices.item}
                            likes={HospitalServices.likes}
                            heart={HospitalServices.heart}
                            share={HospitalServices.share}
                            />
                        ))}
                </ServicesBox>
            </Container>
            <br /><br />
            <NewsLetter/>
    </Box>
  )
}

export default Service