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

const Cake = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  
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

  const images = [
    {
      imageUrl: "https://imgcdn.floweraura.com/DSC_6165.jpg?tr=w-339,h-339,q-70",
      rating: 4,
      quote: "tommorrow",
      delivery: "Eggless Black forest",
    },
    {
      imageUrl: "https://imgcdn.floweraura.com/blue-orchids-bouquet-n-choco-cake-9813430co-C_1.jpg?tr=w-339,h-339,q-70",
      rating: 5,
      quote: "2 days later",
      delivery: "Chocolate truffle cake",
    },
    {
      imageUrl: "https://imgcdn.floweraura.com/15-A+%281%29.jpg?tr=w-339,h-339,q-70",
      rating: 3,
      quote: "today",
      delivery: "Pink teddy",
    },
    {
      imageUrl: "https://imgcdn.floweraura.com/amusing-kitkat-cake-9954020ca-AA.jpg?tr=w-339,h-339,q-70",
      rating: 3,
      quote: "next week",
      delivery: "kitkat cake",
    },
    {
      imageUrl: "https://imgcdn.floweraura.com/delicious-swirls-AAA.jpg?tr=w-339,h-339,q-70",
      rating: 5,
      quote: "unavailable",
    delivery: "rosecream cake",
    }
  ];
 
  const [cards] = useState(images.map(image => ({ key: image.imageUrl, content: <CardNews imageUrl={image.imageUrl} rating={image.rating} quote={image.quote} delivery={image.delivery} /> })));
 
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
                  // onClick={handleToggleDashboardDetails}
                  component={Link}
                  to="/user"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  HOME
                </Button>
                <Button
                  // onClick={handleToggleDashboardDetails}
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
                  // onClick={handleToggleDashboardDetails}
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
                  {/* <MenuItem onClick={handleToggleDetails}> */}
                    <Typography textAlign="center">DASHBOARD</Typography>
                  {/* </MenuItem> */}
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
        </div>
        <div>
          {images.map((image, index) => (
            <Link key={index} to={`/${image.quote}`} className="link"></Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cake;
