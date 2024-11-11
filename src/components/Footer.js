import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material'; // Optional: for adding icons

const Footer = () => (
  <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
    <Container>
      <Grid container spacing={3} justifyContent="center">
        {/* Column 1: Contact Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Contact</Typography>
          <Typography variant="body2">Email: <Link href="mailto:your.email@example.com">your.email@example.com</Link></Typography>
          <Typography variant="body2">Phone: +1 234 567 890</Typography>
        </Grid>

        {/* Column 2: Social Media Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Follow Me</Typography>
          <Box display="flex" justifyContent="space-around">
            <Link href="https://github.com/yourusername" target="_blank" color="inherit" aria-label="GitHub">
              <GitHub fontSize="large" />
            </Link>
            <Link href="https://www.linkedin.com/in/yourusername/" target="_blank" color="inherit" aria-label="LinkedIn">
              <LinkedIn fontSize="large" />
            </Link>
            <Link href="mailto:your.email@example.com" target="_blank" color="inherit" aria-label="Email">
              <Email fontSize="large" />
            </Link>
          </Box>
        </Grid>

        {/* Column 3: Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/" color="inherit">Home</Link></li>
            <li><Link href="/about" color="inherit">About</Link></li>
            <li><Link href="/projects" color="inherit">Projects</Link></li>
            <li><Link href="/contact" color="inherit">Contact</Link></li>
          </ul>
        </Grid>
      </Grid>

      {/* Footer text */}
      <Box mt={3} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Your Name. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </footer>
);

export default Footer;
