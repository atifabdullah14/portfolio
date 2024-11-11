import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';

const Home = () => (
  <Container>
    {/* Welcome Heading */}
    <Typography variant="h3" gutterBottom>
      Welcome to My Portfolio
    </Typography>

    {/* Introduction Section */}
    <Typography variant="body1" paragraph>
      Hello, I'm Atif Abdullah, a passionate and experienced web developer with over 5 years of hands-on expertise in building responsive, scalable, and interactive websites. I specialize in front-end development, utilizing modern technologies such as React, JavaScript, HTML5, CSS3, and Material-UI to create seamless user experiences.
    </Typography>
    
    {/* Highlighting Skills and Experience */}
    <Typography variant="body1" paragraph>
      Over the past 5+ years, I have worked with a variety of clients and teams, delivering web applications that are both functional and visually appealing. My experience spans across e-commerce, enterprise solutions, and personal projects. I focus on writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
    </Typography>

    {/* Call to Action Button */}
    <Box mt={3}>
      <Button variant="contained" color="primary" href="/contact">
        Get In Touch
      </Button>
    </Box>
  </Container>
);

export default Home;
