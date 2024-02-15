import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const CartPage = ({ cartItems }) => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="subtitle1">Your cart is empty</Typography>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item} alt={`Item ${index + 1}`} style={{ width: '100px', height: '100px' }} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default CartPage;
