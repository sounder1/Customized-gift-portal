import Icon from '@mui/material/Icon';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";
import "./About.css";
// import Icon from '@mui/material/Icon';
import img3 from "/src/assets/images/My project-1.png"
import img4 from "/src/assets/images/orange-circle.png"
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
const Dash = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
    <div id="home_parent2">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              // component={Link}
              // to="/home"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.10rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              FLOWER AURS
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/user">
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/about">
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/contact">
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/home"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/home"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/about"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
             
  
           
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu} component={Link} to="/login">
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    <div className='root1'>
    <div className='circle'>
    {/* <a href = "#"  style={{textDecoration:"none",color:"white",marginLeft:1300,width:500}} onClick={handleback}>Back</a> */}
        <img src={img4}/>
    </div>
    <div className='sounder'>
        <img src={img3}/>
    </div>
    <div className="comp">
        <h1>About Us ?</h1>
    </div>
    <div className="comp1">
        <h1>Flower Aurs plans wedding, social, and corporate events in Austin, Texas. 
            The group has a simple and traditional-feeling website focusing on images to convey their message. </h1>
    </div>
    <div className="cname">
        <img src="https://socialtables.wpenginepowered.com/wp-content/uploads/2021/02/Brilliant_elegance-min-1536x714.png"/>
    </div>
    <div className="comp2">
        <h1>The company is owned and operated by SOUNDER . As an experienced and passionate event decorator, SOUNDER  brings a wealth of creativity and expertise to every project. With a background in design and a keen eye for detail, SOUNDER has curated a team of skilled professionals who share a common vision of delivering extraordinary event experiences.
        Company name is mentioned above . List of services includes Wedding , Birthday Party , NewYear Celebration , Engagement etc...</h1>
    </div>
     <div  className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>sounder2003@gmail.com</span>
        </p>
        <p>
          Github Username : <span>sounder1</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/sounder-ab6453244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <LinkedInIcon />
            </Icon>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <FacebookIcon/>
            </Icon>
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=%2F_.ds._editz%2F&source=desktop_nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <InstagramIcon />
            </Icon>
          </a>
        </div>
      </div>
    </div> 
          <div className='click1'>
      {/* <a href='#' onClick={handleclick}>NEXT PAGE</a> */}
     </div>
     </div>
     </div>
    </>
  );
};

export default Dash;