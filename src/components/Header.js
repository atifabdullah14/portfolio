// Header.js
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Button component={Link} to="/" color="inherit">Home</Button>
      <Button component={Link} to="/about" color="inherit">About</Button>
      <Button component={Link} to="/projects" color="inherit">Projects</Button>
      <Button component={Link} to="/contact" color="inherit">Contact</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
