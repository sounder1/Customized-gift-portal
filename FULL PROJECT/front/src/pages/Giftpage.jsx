// import React, { useState } from 'react';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// function ErrorFallback({ error }) {
//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <p>{error.message}</p>
//     </div>
//   );
// }

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, error: null };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true, error };
//   }
  

//   render() {
//     if (this.state.hasError) {
//       return <ErrorFallback error={this.state.error} />;
//     }

//     return this.props.children;
//   }
// }

// function Giftpage() {
//   const [gift, setGift] = useState('');
//   const [theme, setTheme] = useState('');
//   const [price, setPrice] = useState('');
//   const [urlPath, setUrlPath] = useState('');
//   const [imageFiles, setImageFiles] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [id, setId] = useState('');
//   const [anchorElNav, setAnchorElNav] = useState(null); // Add anchorElNav state

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleDeleteGift = async () => {
//     try {
//       await axios.delete(`http://localhost:8081/gifts/${id}`);
//       Swal.fire({
//         icon: 'success',
//         title: 'Gift deleted successfully!',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       setId('');
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong while deleting the gift!',
//       });
//     }
//   };

//   // Rest of the code remains the same...


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8081/gifts', {
//         giftName: gift,
//         giftTheme: theme,
//         price: price,
//         imageUrl: urlPath,
//       });
//       console.log(response.data); // Assuming the backend responds with the saved gift details
//       Swal.fire({
//         icon: 'success',
//         title: 'Gift added successfully!',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong!',
//       });
//     }
//   };
//   const handleAddUrl = () => {
//     setImageFiles(prevFiles => [...prevFiles, urlPath]);
//     setUrlPath('');
//   };

//   const handleDeleteImage = (index) => {
//     setImageFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
//   };

//   return (
//     <ErrorBoundary>
//       <div>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//             >
//               <MenuItem onClick={handleCloseNavMenu} component={Link} to="/giftpage">
//                 Gifts
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu} component={Link} to="/theme">
//                 Theme
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu} component={Link} to="/adminorder">
//                 Orders
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu} component={Link} to="/adminhistory">
//                 Pdetails
//               </MenuItem>
//             </Menu>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               FLOWER AURA
//             </Typography>
//             <Button component={Link} to="/login" color="inherit">Logout</Button>
//           </Toolbar>
//         </AppBar>
//         <Container>
//           {/* <Typography variant="h4" gutterBottom>
//             Form Page
//           </Typography> */}
//           <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'center' }}>
//             <FormControl sx={{ my: 2, minWidth: 120, width: '100%' }}>
//               <InputLabel>Select Gift</InputLabel>
//               <Select
//                 value={gift}
//                 onChange={(e) => setGift(e.target.value)}
//                 displayEmpty
//               >
//                 <MenuItem value="">Select Gift</MenuItem>
//                 <MenuItem value="cake">Cake</MenuItem>
//                 <MenuItem value="candy">Candy</MenuItem>
//                 <MenuItem value="rose">Rose</MenuItem>
//                 <MenuItem value="teddy">Teddy</MenuItem>
//               </Select>
//             </FormControl>
//             {gift && (
//               <FormControl sx={{ my: 2, minWidth: 120, width: '100%' }}>
//                 <InputLabel>Select Theme</InputLabel>
//                 <Select
//                   value={theme}
//                   onChange={(e) => setTheme(e.target.value)}
//                   displayEmpty
//                 >
//                   <MenuItem value="">Select Theme</MenuItem>
//                   {gift === 'cake' && ['pink', 'brown'].map(color => (
//                     <MenuItem key={color} value={color}>{color}</MenuItem>
//                   ))}
//                   {gift === 'candy' && ['red', 'green'].map(color => (
//                     <MenuItem key={color} value={color}>{color}</MenuItem>
//                   ))}
//                   {gift === 'rose' && ['red', 'yellow'].map(color => (
//                     <MenuItem key={color} value={color}>{color}</MenuItem>
//                   ))}
//                   {gift === 'teddy' && ['brown', 'white'].map(color => (
//                     <MenuItem key={color} value={color}>{color}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             )}
//             <TextField
//               label="Price"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               sx={{ my: 2, minWidth: 120, width: '100%' }}
//             />
//             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
//               {imageFiles.map((file, index) => (
//                 <div key={index} style={{ position: 'relative', marginBottom: '20px', marginRight: '10px' }}>
//                   <img
//                     src={file}
//                     alt={`Uploaded Image ${index + 1}`}
//                     style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                   />
//                   <Button
//                     onClick={() => handleDeleteImage(index)}
//                     style={{ position: 'absolute', top: 0, right: 0 }}
//                     variant="contained"
//                     color="secondary"
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               ))}
//             </div>
//             <TextField
//               label="URL Path"
//               value={urlPath}
//               onChange={(e) => setUrlPath(e.target.value)}
//               sx={{ my: 2, minWidth: 120, width: '100%' }}
//             />
//             <Button
//               onClick={handleAddUrl}
//               variant="contained"
//               color="primary"
//               sx={{ my: 2, minWidth: 120, width: '100%' }}
//             >
//               Add URL
//             </Button>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{ my: 2, minWidth: 120, width: '100%' }}
//             >
//               Submit
//             </Button>
            
//           </Box>
//           <Box sx={{ textAlign: 'center' }}>
//           <TextField
//             label="ID"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             sx={{ my: 2, minWidth: 120, width: '100%' }}
//           />
//           <Button onClick={handleDeleteGift} variant="contained" color="primary" sx={{ my: 2, minWidth: 120, width: '100%' }}>
//             Delete
//           </Button>

//           <TextField
//             label="ID"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             sx={{ my: 2, minWidth: 120, width: '100%' }}
//           />
//           <Button onClick={handleDeleteGift} variant="contained" color="primary" sx={{ my: 2, minWidth: 120, width: '100%' }}>
//             edit
//           </Button>
//         </Box>
//         </Container>
//       </div>
//     </ErrorBoundary>
//   );
// }

// export default Giftpage;
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ErrorFallback({ error }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

function Giftpage() {
  const [gift, setGift] = useState('');
  const [theme, setTheme] = useState('');
  const [price, setPrice] = useState('');
  const [urlPath, setUrlPath] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [id, setId] = useState('');
  const [anchorElNav, setAnchorElNav] = useState(null); // Add anchorElNav state

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDeleteGift = async () => {
    try {
      await axios.delete(`http://localhost:8081/gifts/${id}`);
      Swal.fire({
        icon: 'success',
        title: 'Gift deleted successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      setId('');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while deleting the gift!',
      });
    }
  };

  const handleEditGift = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/gifts/${id}`);
      const { giftName, giftTheme, price, imageUrl } = response.data;
      setGift(giftName);
      setTheme(giftTheme);
      setPrice(price);
      setUrlPath(imageUrl);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while fetching the gift details!',
      });
    }
  };

  const handleUpdateGift = async () => {
    try {
      await axios.put(`http://localhost:8081/gifts/${id}`, {
        giftName: gift,
        giftTheme: theme,
        price: price,
        imageUrl: urlPath,
      });
      Swal.fire({
        icon: 'success',
        title: 'Gift updated successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while updating the gift!',
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/gifts', {
        giftName: gift,
        giftTheme: theme,
        price: price,
        imageUrl: urlPath,
      });
      console.log(response.data); // Assuming the backend responds with the saved gift details
      Swal.fire({
        icon: 'success',
        title: 'Gift added successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  const handleAddUrl = () => {
    setImageFiles((prevFiles) => [...prevFiles, urlPath]);
    setUrlPath('');
  };

  const handleDeleteImage = (index) => {
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <ErrorBoundary>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              aria-label="menu"
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
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/giftpage">
                Gifts
              </MenuItem>
             
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/adminorder">
                Orders
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/adminhistory">
                Pdetails
              </MenuItem>
            </Menu>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              FLOWER AURA
            </Typography>
            <Button component={Link} to="/login" color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'center' }}>
            <FormControl sx={{ my: 2, minWidth: 120, width: '100%' }}>
              <InputLabel>Select Gift</InputLabel>
              <Select value={gift} onChange={(e) => setGift(e.target.value)} displayEmpty>
                <MenuItem value="">Select Gift</MenuItem>
                <MenuItem value="cake">Cake</MenuItem>
                <MenuItem value="candy">Candy</MenuItem>
                <MenuItem value="rose">Rose</MenuItem>
                <MenuItem value="teddy">Teddy</MenuItem>
              </Select>
            </FormControl>
            {gift && (
              <FormControl sx={{ my: 2, minWidth: 120, width: '100%' }}>
                <InputLabel>Select Theme</InputLabel>
                <Select value={theme} onChange={(e) => setTheme(e.target.value)} displayEmpty>
                  <MenuItem value="">Select Theme</MenuItem>
                  {gift === 'cake' &&
                    ['pink', 'brown'].map((color) => (
                      <MenuItem key={color} value={color}>
                        {color}
                      </MenuItem>
                    ))}
                  {gift === 'candy' &&
                    ['red', 'green'].map((color) => (
                      <MenuItem key={color} value={color}>
                        {color}
                      </MenuItem>
                    ))}
                  {gift === 'rose' &&
                    ['red', 'yellow'].map((color) => (
                      <MenuItem key={color} value={color}>
                        {color}
                      </MenuItem>
                    ))}
                  {gift === 'teddy' &&
                    ['brown', 'white'].map((color) => (
                      <MenuItem key={color} value={color}>
                        {color}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
            <TextField
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              sx={{ my: 2, minWidth: 120, width: '100%' }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
              {imageFiles.map((file, index) => (
                <div key={index} style={{ position: 'relative', marginBottom: '20px', marginRight: '10px' }}>
                  <img
                    src={file}
                    alt={`Uploaded Image ${index + 1}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <Button
                    onClick={() => handleDeleteImage(index)}
                    style={{ position: 'absolute', top: 0, right: 0 }}
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
            <TextField
              label="URL Path"
              value={urlPath}
              onChange={(e) => setUrlPath(e.target.value)}
              sx={{ my: 2, minWidth: 120, width: '100%' }}
            />
            <Button onClick={handleAddUrl} variant="contained" color="primary" sx={{ my: 2, minWidth: 120, width: '100%' }}>
              Add URL
            </Button>
            <Button type="submit" variant="contained" color="primary" sx={{ my: 2, minWidth: 120, width: '100%' }}>
              Submit
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <TextField
              label="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              sx={{ my: 2, minWidth: 120, width: '100%' }}
            />
            <Button onClick={handleDeleteGift} variant="contained" color="primary" sx={{ my: 2, minWidth: 120, width: '100%' }}>
              Delete
            </Button>

            <Button onClick={handleUpdateGift} variant="contained" color="primary" sx={{ my: 2, minWidth: 120, width: '100%' }}>
              Update
            </Button>
          </Box>
        </Container>
      </div>
    </ErrorBoundary>
  );
}

export default Giftpage;

