import React, { useState } from 'react';
import './HomePage.css';
import "./Styles.css";
import Carroussel from "./Carroussel";
import CardNews from "./CardNews";
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

const Mainpage = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showDashboardDetails, setShowDashboardDetails] = useState(false);
  
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

  const images = [
    {
      imageUrl: "https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhciUyMGdpZnR8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "teddy"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      quote: "cake"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1651237889747-460a6dac3b27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNha2UlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      rating: 3,
      quote: "candy"
    },
    {
      imageUrl: "https://imgcdn.floweraura.com/DSC_6404_0.jpg?tr=w-339,h-339,q-70",
      rating: 3,
      quote: "gift"
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1673809129994-258a489a5f09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFsZW50aW5lcyUyMGRheXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 3,
      quote: "rose"
    }
  ];
  const images1 = [
    {
      imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 4,
      quote: "ring"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      quote: "cake"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1651237889747-460a6dac3b27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNha2UlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      rating: 3,
      quote: "candy"
    },
    {
      imageUrl: "https://imgcdn.floweraura.com/DSC_6404_0.jpg?tr=w-339,h-339,q-70",
      rating: 3,
      quote: "gift"
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1673809129994-258a489a5f09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFsZW50aW5lcyUyMGRheXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 3,
      quote: "rose"
    }
  ];
  const images2 = [
    {
      imageUrl: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZCUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4,
      quote: "gold"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      quote: "cake"
    },
   
    {
      imageUrl: "https://imgcdn.floweraura.com/DSC_6404_0.jpg?tr=w-339,h-339,q-70",
      rating: 3,
      quote: "gift"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1505043203398-7e4c111acbfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhciUyMGdpZnR8ZW58MHx8MHx8fDA%3D",
      rating: 4,
      quote: "teddy"
    },
    {
      imageUrl: "https://plus.unsplash.com/premium_photo-1673809129994-258a489a5f09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFsZW50aW5lcyUyMGRheXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 3,
      quote: "rose"
    }
  ];
  
  const [cards] = useState(images.map(image => ({ key: image.imageUrl, content: <CardNews imageUrl={image.imageUrl} rating={image.rating} quote={image.quote} /> })));
  const [cards1] = useState(images1.map(image => ({ key: image.imageUrl, content: <CardNews imageUrl={image.imageUrl} rating={image.rating} quote={image.quote} /> })));
  const [cards2] = useState(images2.map(image => ({ key: image.imageUrl, content: <CardNews imageUrl={image.imageUrl} rating={image.rating} quote={image.quote} /> })));

  return (
    <>
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
      <div className="App1">
        <Carroussel
          cards={cards}
          height="500px"
          width="90%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
        <h1>BIRTHDAY CATEGORY</h1>
        <Carroussel
          cards={cards1}
          height="500px"
          width="90%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
         <h1>ANNIVERSARY CATEGORY</h1>
        <Carroussel
          cards={cards2}
          height="500px"
          width="90%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>

       <h1>VALENTINE'S DAY CATEGORY</h1>
      <div>
        {images.map((image, index) => (
          <Link key={index} to={`/${image.quote}`} className="link">
            {/* <CardNews imageUrl={image.imageUrl} rating={image.rating} quote={image.quote} /> */}
          </Link>
        ))}
      </div> 
      </div>
    </>
  );
};

export default Mainpage;
