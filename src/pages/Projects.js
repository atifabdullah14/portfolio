import React from 'react';
import { Grid, Card, CardContent, Typography, Button,Container } from '@mui/material';

const Projects = () => (
  <Container>
    <Typography variant="h4" gutterBottom>My Projects</Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Project 1</Typography>
            <Typography variant="body2">Description of Project 1.</Typography>
            <Button variant="contained" color="primary" href="#">View Project</Button>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more project cards */}
    </Grid>
  </Container>
);

export default Projects;
