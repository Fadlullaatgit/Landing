import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
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

  const [mobileMenu, setMObileMenu] = useState({ left: false })

  const toogleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")) {
      return;
    }
    setMObileMenu({ ...mobileMenu, [anchor]: open })
  }

  // const handleScrollToSection = (sectionId) => () => {
  //   const targetSection = document.getElementById(sectionId);
  //   if (targetSection) {
  //     targetSection.scrollIntoView({
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  const list = (anchor) => (

    <Box sx={{
      width: anchor === "top" || anchor === "bottom" ? "auto" : 250
    }}
      role="presentation"
      onClick={toogleDrawer(anchor, false)}
      onKeyDown={toogleDrawer(anchor, false)}
    >
      <List>
        {
          nav_titles.map((item, index) => (
            <NavBarLink
              key={index}
              variant="body2"
              // onClick={ 
              //   item.display === "Contact"
              //     ? handleScrollToSection("footer-section")
              //     : item.display === "About Us"
              //     ? handleScrollToSection("about-section")
              //     : item.display === "Home"
              //     ? handleScrollToSection("home-section")
              //     : undefined
              // }
            >
            <ListItem key={item.index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {
                    index === 0 && <HomeIcon />
                  }
                  {
                    index === 1 && <ContactsIcon />
                  }
                  {
                    index === 2 && <FeaturedPlayListIcon />
                  }

                  <ListItemText primary={item.display} sx={{ marginLeft: "10px" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            </NavBarLink>


          ))
        }
      </List>
    </Box>

  )

  const nav_titles = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/contact",
      display: "Contact",
    },
    {
      path: "/about",
      display: "About Us",
    },
  ];

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: theme.spacing(3),
    marginLeft: "800px", [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "100px",
      gap: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
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
      color: "#2b2e7d",
    },
    "&:first-of-type": {
      color: "#2b2e7d",
      fontSize: "18px",
      "&:hover": {
        color: "#A6A6A6",
      },
    },
  }));
  const NavBarLogo = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  }));


  return (
    <Box

      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: "20px",
        pl: "40px",
        pr: "40px",
        maxWidth: "auto",
        backgroundColor: "#FFFFFF",
        marginLeft: '0px',
        marginBottom: '-24px',
      }}

    >
      <Box

        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: 'center',
          gap: '2.5rem'
        }}>
        <Box

          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            gap: '2.5rem'
          }}>
          <CustomMenuIcon onClick={toogleDrawer("left", true)} />
          <Drawer

            anchor="left"
            open={mobileMenu["left"]}
            onClose={toogleDrawer("left", false)} >
            {list("left")}
          </Drawer>
          <NavBarLogo src={Logo} alt="" sx={{
            width: "200px",
          }} />

        </Box>

        <NavBarLinksBox>
        {nav_titles.map((item, index) => (
            <NavBarLink
              key={index}
              variant="body2"
              // onClick={ 
              //   item.display === "Contact"
              //     ? handleScrollToSection("footer-section")
              //     : item.display === "About Us"
              //     ? handleScrollToSection("about-section")
              //     : item.display === "Home"
              //     ? handleScrollToSection("home-section")
              //     : undefined
              // }
            >
              {item.display}
            </NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>

    </Box>
  );
}

export default Header;