import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateInvoice = () => {
    navigate('/create-invoice');
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Invoice Manager
      </Typography>
      <Typography variant="body1" paragraph>
        Manage your invoices efficiently and effortlessly.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCreateInvoice}>
        Create New Invoice
      </Button>
    </Container>
  );
};

export default HomePage;
