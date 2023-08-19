import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React,{useState} from "react";
import CustomButton from "../CustomButoon/CustomButton";
import Logo from '../Images/logo.png'

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";


function Header() {

  const [mobileMenu, setMObileMenu] = useState({left:false})

  const toogleDrawer = (anchor,open)=>(event)=>{
    if(event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")){
      return;
    }
    setMObileMenu({...mobileMenu,[anchor]:open})
  }

  const list = (anchor)=>(

    <Box sx={{
      width:anchor === "top" || anchor === "bottom" ? "auto" : 250
    }}
    role="presentation"
    onClick={toogleDrawer(anchor,false)}
    onKeyDown = {toogleDrawer(anchor,false)}
    >
      <List>
        {
          nav_titles.map((item,index)=>(
            <ListItem key={item.index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  { 
                    index === 0 &&<HomeIcon/>
                  }
                                    {
                    index === 1 &&<ContactsIcon/>
                  }
                  {
                    index === 2 && <FeaturedPlayListIcon/>
                  }

                <ListItemText primary={item.display}  sx={{marginLeft:"10px"}}/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
  
          ))
        }
      </List>
    </Box>

  )

  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/",
      display: "Contact",
    },
    {
      path: "/",
      display: "About Us",
    },
  ];

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:"450px",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavBarLink = styled(Typography)(() => ({
    fontSize: "16px",
    color: "#A6A6A6",
    fontWeight: "500",
    cursor: "pointer",
    lineHeight: "19.36px",
    "&:hover": {
      color: "#fff",
    },
    "&:first-of-type": {
      color: "#2b2e7d",
      fontSize: "18px",
      "&:hover": {
        color: "#fff",
      },
    },
  }));
  const NavBarLogo = styled('img')(({ theme }) => ({
    cursor:'pointer',
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor:'pointer',
    display:'none',
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));



  return (
    <Box
    
        sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            py:"20px",
            pl:"40px",
            pr:"40px",
            maxWidth:"auto",
            backgroundColor:"#FFFFFF",
            marginLeft:'0px',
            marginBottom:'-24px',
        }}

    >
      <Box
          
          sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:'center',
            gap:'2.5rem'
        }}>
                    <Box
                      
                      sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:'center',
                        gap:'2.5rem'
                    }}>
                      <CustomMenuIcon onClick={toogleDrawer("left",true)}/>
                      <Drawer
                      
                      anchor="left"
                      open={mobileMenu["left"]}
                      onClose={toogleDrawer("left",false)} >
                        {list("left")}
                      </Drawer>
                        <NavBarLogo src={Logo} alt="" sx={{
                          width:"300px",
                        }}/>
            
                    </Box>
            
        <NavBarLinksBox>
          {nav_titles.map((item, index) => (
            <NavBarLink key={index} variant="body2">
              {item.display}
            </NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>

      <Box

sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
    gap:'1rem'
}}


      >
        <NavBarLink variant="body2">Login</NavBarLink>
        <CustomButton
          backgroundColor="#54BD95"
          color="#fff"
          buttonText="Sign Up"
        />
      </Box>
    </Box>
  );
}

export default Header;
