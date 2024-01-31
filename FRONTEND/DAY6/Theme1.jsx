import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

function Giftpage() {
  const [imageFiles, setImageFiles] = useState([]);

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
          </Toolbar>
        </Container>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          TRENDING PICTURES
        </Typography>
      </Container>

      <Link to = "/theme1">
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
          <Button style={{left:"46%"}} component="span" variant="contained" color="primary">
            Upload Image
          </Button>
        </label>
        {imageFiles.length > 0 && (
          <Button style={{left:"45.5%"}} variant="contained" color="secondary" onClick={handleUpload}>
            Confirm Upload
          </Button>
        )}
      </div>
    </>
  );
}

export default Giftpage;
