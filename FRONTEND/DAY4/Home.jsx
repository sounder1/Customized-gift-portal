import React from 'react';
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
import img from '/src/assets/images/giftgif.gif';
import imgtag from '/src/assets/images/gift.gif';
import './HomePage.css';

function HomePage() {
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
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/home">
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
                // onClick={handleCloseNavMenu}
                // component={Link}
                // to="/home"
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
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/admin"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               ADMIN
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

      <div className='color' style={{color:"tan"}}></div>
      <div className="topContent">
        <div className="topContent__container">
          <motion.h1
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            GIVING
          </motion.h1>
          <motion.h1
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            JOY
          </motion.h1>
          <motion.h1
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            FLOWER AURS  WELCOMES YOU !!!
          </motion.h1>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
          
          </a>
        </div>
      </div>
      {/* <img src="https://img.freepik.com/premium-photo/celebrating-saint-valentines-day-with-bouquet-red-roses-glass-champagne-croissants_1048944-27973333.jpg?size=626&ext=jpg"></img> */}

      {/* <div className='vid'> */}
        {/* <img style={{width:"200px",marginLeft:"140px",marginTop:"240px"}} src={img} alt="giftgif" />
      </div>

      <div className='vid1'>
        <img style={{width:"200px",marginLeft:"370px",marginTop:"-150px"}} src={imgtag} alt="gift" />
      </div> */}
    </div>
  );
}

export default HomePage;
