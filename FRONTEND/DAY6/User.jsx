import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// import './HomePage.css';
import { useEffect } from 'react';
const User = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showDashboardDetails, setShowDashboardDetails] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const occasionImages = [
    "https://imgcdn.floweraura.com/birthday_homepage_fa_desktops_1.jpg?tr=w-1583,dpr-1.5,q-70",
    "https://imgcdn.floweraura.com/anniversary_homepage_fa_desktop%20(1)_2.jpg?tr=w-1583,dpr-1.5,q-70",  
    "https://imgcdn.floweraura.com/flower_homepage_fa_desktop_13.jpg?tr=w-1583,dpr-1.5,q-70",
    "https://imgcdn.floweraura.com/gifts_landingpage_fa_desktop_4.jpg?tr=w-1583,dpr-1.5,q-70",
    "https://imgcdn.floweraura.com/valentine_day_landingpage_fa_desktop_1.jpg",  
 ]
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageClassName = (index) => {
    return `pro-img${index === activeSlide ? ' active' : ''}`;
  };
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

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleToggleDashboardDetails = () => {
    setShowDashboardDetails(!showDashboardDetails);
  };

  return (
    <div id="home_parent">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
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
                  <Typography textAlign="center">HOME</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/mainpage">
                  <Typography textAlign="center">CATEGORY</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                  <Typography textAlign="center">ORDERS</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/login">
                  <Typography textAlign="center">LOGIN</Typography>
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
               onClick={handleToggleDashboardDetails}
               component={Link}
               to="/user"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                HOME
              </Button>
              <Button
               onClick={handleToggleDashboardDetails}
               component={Link}
               to="/mainpage"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                CATEGORY
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ORDERS
              </Button>
              <Button
                onClick={handleToggleDashboardDetails}
                component={Link}
                to="/login"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                LOGIN
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
                  vertical: 'top',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleToggleDetails}>
                  <Typography textAlign="center">DASHBOARD</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className='pro'>
       <div className='pro'>
      {[0, 1, 2].map((index) => (
        <img
          key={index}
          className={getImageClassName(index)}
          src={occasionImages[index]}
          alt={`Slide ${index + 1}`}
        />
      ))}
      {showDashboardDetails && <showDashboardDetails />} 
      {showDetails && (
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <div className="blur-background"></div>
          <div className="dashboard-details-container">
          <Typography variant="h6">User Details:</Typography>
          <Typography>
            Name: sounder<br />
            Email: example@example.com<br />
            Password: iiufkj<br />
            confirm-Password: iiufkj<br />
            Mobile-Number:9688252837<br />
          </Typography>
    </div>
        </Container>
      )}
      
    </div>
    </div>
      </div>
  );
};

export default User;
