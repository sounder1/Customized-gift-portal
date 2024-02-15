
import './Contact.css';
import Icon from '@mui/material/Icon';

import React, { useState } from 'react';
import axios from 'axios';
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
const ContactPage = () => {
  
  const [showDetails, setShowDetails] = useState(false);
  const [showDashboardDetails, setShowDashboardDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
});
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
      ...prevState,
      [name]: value
  }));
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      await axios.post('http://localhost:8081/contacts', formData);
      alert('Form submitted successfully!');
      setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          address: ''
      });
  } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
  }
};

    
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
    const handleToggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
    const handleToggleDashboardDetails = () => {
      setShowDashboardDetails(!showDashboardDetails);
    };
  return (
    <>
    <div id="home_parent3">
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
                to="/contact"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact
              </Button>
              <Button
                onClick={handleToggleDashboardDetails}
                component={Link}
                to="/mainpage"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                CATEGORY
              </Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                ORDERS
              </Button>
              <Button
                onClick={handleToggleDashboardDetails}
                component={Link}
                to="/new"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                TRENDING
              </Button>
              <Button
                onClick={handleToggleDashboardDetails}
                component={Link}
                to="/login"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                LOGOUT
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
  sx={{
    mt: '45px',
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right' // Add this line to specify the horizontal origin
    }
  }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right' // This is also required for the transformOrigin prop
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
    </div>
    <div className="con">
      
    </div>
    <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
  
    </>
  );
};

export default ContactPage;


   

