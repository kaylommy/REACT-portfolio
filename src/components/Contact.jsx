import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required.');
    } else {
      setError('');
    }
  };

  return (
    <>
    <Container maxWidth="sm"
    sx={{
      backgroundColor: '#fceee9',
      borderRadius: '2rem'
    }}>
<Box
  component="form"
  onSubmit={handleSubmit}
  noValidate
  autoComplete="off"
  action={`https://formsubmit.co/kaylajfreeman13@gmail.com`}
  method="POST"
  sx={ ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiTextField-root, & .MuiButton-root, & .MuiTypography-root': { margin: 2 },
    justifyContent: 'center',
    marginTop: {
      xs: '10rem',
      md: '20rem',
    },
  })}
>
        <TextField
          required
          id="name"
          name="name"
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          required
          id="message"
          name="message"
          label="Message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
    </>
  );
}

export default Contact;