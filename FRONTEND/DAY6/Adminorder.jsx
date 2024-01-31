import React from 'react';
import './AdminOrderPage.css'; // Import your CSS file for styling
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
import { useState } from 'react';
import { AppBar } from '@mui/material';
const AdminOrderPage = () => {
    // Define sample orders
    const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showDashboardDetails, setShowDashboardDetails] = useState(false);

    const orders = [
        {
            order_id:1,
            username: 'Sounder',
            giftname: 'teddy',
            themename: 'pink',
            price: '700',
            quantity: 2
        },
        {
            order_id:2,
            username: 'shiny',
            giftname: 'ring',
            themename: 'red',
            price: '1200',
            quantity: 1,
        },
        {
            order_id:3,
            username: 'saran',
            giftname: 'cake',
            themename: 'white',
            price: '600',
            quantity: 1,
        }
    ];
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
        <div className="admin-home__parent">
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar className="admin-home__toolbar" disableGutters>
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
                  <MenuItem onClick={handleCloseNavMenu} component={Link} to="/giftpage">
                    <Typography textAlign="center">Gifts</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} component={Link} to="/theme">
                    <Typography textAlign="center">Theme</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} component={Link} to="/adminorder">
                    <Typography textAlign="center">Orders</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} component={Link} to="/adminhistory">
                    <Typography textAlign="center">Payment</Typography>
                  </MenuItem>
                </Menu>
              </Box>
  
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
              
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
                to="/adminpage"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Home
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/giftpage"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Gift
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/theme"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Theme
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/adminorder"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                 Orders
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/adminhistory"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                 Payment
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/admin"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                 Login
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
                 <MenuItem onClick={handleToggleDetails}>
                    <Typography textAlign="center">DASHBOARD</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <div className="admin-order-page">
            <h2>Admin Order Page</h2>
            <div className="order-list">
                {orders.map((order, index) => (
                    <div key={index} className="order">
                        <div><span className="label">order_id:</span> {order.order_id}</div>
                        <div><span className="label">Username:</span> {order.username}</div>
                        <div><span className="label">Gift Name:</span> {order.giftname}</div>
                        <div><span className="label">Theme Name:</span> {order.themename}</div>
                        <div><span className="label">Price:</span> {order.price}</div>
                        <div><span className="label">Quantity:</span> {order.quantity}</div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default AdminOrderPage;
