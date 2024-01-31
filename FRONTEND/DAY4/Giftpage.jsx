import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import AdbIcon from '@mui/icons-material/Adb';

function Giftpage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showDashboardDetails, setShowDashboardDetails] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);

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

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles(prevFiles => [...prevFiles, ...files]);
  };

  const handleUpload = () => {
    if (imageFiles.length > 0) {
      console.log('Uploading files:', imageFiles.map(file => file.name));
      // Perform upload action here if needed
    } else {
      console.log('No images selected for upload.');
    }
  };

  return (
    <>
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
                  <MenuItem onClick={handleCloseNavMenu} component={Link} to="/adminpage">
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
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

      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          TRENDING IMAGES
        </Typography>
      </Container>

      <Link to="/theme1">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {imageFiles.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Uploaded Image ${index + 1}`}
              style={{ width: 300, height: 300, marginTop: 10, objectFit: 'cover', marginRight: 10 }}
            />
          ))}
        </div>
      </Link>
      <div className="upload-container">
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          id="upload-input"
          multiple
        />
        <label htmlFor="upload-input">
          {/* <Button style={{ left: "46%" }} component="span" variant="contained" color="primary">
            Upload Image
          </Button> */}
        </label>
        {imageFiles.length > 0 && (
          <Button style={{ left: "45.5%" }} variant="contained" color="secondary" onClick={handleUpload}>
            Confirm Upload
          </Button>
        )}
      </div>
    </>
  );
}

export default Giftpage;
