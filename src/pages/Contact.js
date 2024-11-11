import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Contact = () => (
  <Container>
    <Typography variant="h4" gutterBottom>Contact Me</Typography>
    <TextField label="Your Name" fullWidth margin="normal" />
    <TextField label="Your Email" fullWidth margin="normal" />
    <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
    <Button variant="contained" color="primary">Send Message</Button>
  </Container>
);

export default Contact;
