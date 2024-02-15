import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
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
import { useState } from 'react';
// import './AdminHome.css';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
function AdminHome() {
  useEffect(() => {
    Swal.fire({
      title: 'Welcome back!',
      text: 'ADMIN',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Orders',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Profit',
        data: [100, 200, 150, 300, 200, 180, 250],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Loss',
        data: [50, 80, 70, 90, 60, 70, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
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
               Details
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/login"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Logout
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
      {showDashboardDetails && <showDashboardDetails />} 
      {showDetails && (
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <div className="blur-background"></div>
          <div className="dashboard-details-container">
          <Typography variant="h6">Admin Details:</Typography>
          <Typography>
            Email: admin@gmail.com<br />
            Password: 12345<br />
          </Typography>
    </div>
    </Container>
      )}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          DAILY STATISTICS
        </Typography>
        <Box sx={{ width: '80%', mx: 'auto' }}>
          <Bar data={chartData} />
        </Box>
      </Container>
    </div>
  );
}

export default AdminHome;