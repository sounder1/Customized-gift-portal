import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Confirm.css';
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
import MenuIcon from '@mui/icons-material/Menu';
function Confirm() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedGift, setSelectedGift] = useState('');
    const [selectedTheme, setSelectedTheme] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
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
    const handleToggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
    const handleToggleDashboardDetails = () => {
      setShowDashboardDetails(!showDashboardDetails);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // No need for navigation here if using Link
    };

    const handleCancel = () => {
        // Handle cancellation logic here
        console.log("Payment cancelled");
    };
    const calculateTotalPrice = (gift) => {
        let price = 0;
        switch (gift) {
            case 'Rose':
                price = 400;
                break;
            case 'Gift':
                price = 500;
                break;
            case 'Candy':
                price = 600;
                break;
            case 'Cake':
                price = 700;
                break;
            case 'Teddy':
                price = 800;
                break;
            default:
                price = 0;
                break;
        }
        setTotalPrice(price);
    };

    const handleGiftChange = (event) => {
        const selectedGift = event.target.value;
        setSelectedGift(selectedGift);
        calculateTotalPrice(selectedGift);
        switch (selectedGift) {
            case 'Rose':
            case 'Gift':
                setSelectedTheme('Pink');
                break;
            case 'Candy':
            case 'Cake':
                setSelectedTheme('Red');
                break;
            case 'Teddy':
                setSelectedTheme('Brown');
                break;
            default:
                setSelectedTheme('');
                break;
        }
    };

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
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
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
        <div className="container2">
            <h1>Order Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Phone Number:</label>
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

                <label>Selected Gift:</label>
                <select value={selectedGift} onChange={handleGiftChange} required>
                    <option value="">Select Gift</option>
                    <option value="Rose">Rose</option>
                    <option value="Gift">Gift</option>
                    <option value="Candy">Candy</option>
                    <option value="Cake">Cake</option>
                    <option value="Teddy">Teddy</option>
                </select>

                <label>Selected Theme:</label>
                <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)} required>
                    <option value="">Select Theme</option>
                    <option value="Pink">Pink</option>
                    <option value="Red">Red</option>
                    <option value="White">White</option>
                    <option value="Brown">Brown</option>
                    <option value="Black">Black</option>
                </select>

                <label>Total Price:</label>
                <input type="text" value={totalPrice} readOnly />

                {/* Use Link to navigate to payment page */}
                <Link to={`/pay?name=${encodeURIComponent(name)}&phoneNumber=${encodeURIComponent(phoneNumber)}&selectedGift=${encodeURIComponent(selectedGift)}&selectedTheme=${encodeURIComponent(selectedTheme)}&totalPrice=${encodeURIComponent(totalPrice)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}`}>
                    <button type="submit">Place Order</button>
                </Link>
              <Link to ="/mainpage"><button style={{backgroundColor:"red"}}type="button" onClick={handleCancel}>Cancel</button></Link>  
            </form>
        </div>
        </div>
        </>
    );
}

export default Confirm;
