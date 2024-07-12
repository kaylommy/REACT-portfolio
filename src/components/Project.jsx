import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import aninameImage from '../assets/images/aniname-project1.jpg';
import goodPicksImage from '../assets/images/goodpicks-project2.jpg';
import socialAPI from '../assets/images/homework-1.jpg';

const projects = [
    {
      id: 1,
      title: 'Aniname',
      description: 'Anime website created with JavaScript, HTML and a CSS framework (Bulma)',
      image: aninameImage,
      githubUrl: 'https://github.com/mikef13x/project-1-null',
    },
    {
        id: 2,
        title: 'Good Picks',
        description: 'A social media involving music. Created with Handlebars, JavaScript, and a CSS framework (tailwind)',
        image: goodPicksImage,
        githubUrl: 'https://github.com/mikef13x/project-1-null',
    },
    {
        id: 3,
        title: 'Social Network API',
        description: 'A social network API created with express, mongoDB, mongoose, and node.',
        image: socialAPI,
        githubUrl: 'https://github.com/kaylommy/Social-Network-API'
    }
  ];
  
  function PortfolioProjects() {
    const [hovered, setHovered] = useState(null);
  
    return (
      <>
        <Typography variant='h4' gutterBottom>Portfolio</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {projects.map((project) => (
            <Card
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{ marginTop: '9rem', marginBottom: '9rem', marginRight: '3rem', marginLeft: '3rem', position: 'relative', width: 345, height: 300 }}
            >
              <CardMedia
                component='img'
                image={project.image}
                alt={project.title}
                sx={{ height: '100%', objectFit: 'cover' }}
              />
              {hovered === project.id && (
                <Box sx={{ 
                    position: 'absolute', 
                    top: 0, left: 0, right: 0, bottom: 0, 
                    backgroundColor: '#fceee9', 
                    display: 'flex', 
                    '&:hover': {
                        backgroundColor: 'rgba(248, 211, 197, 0.5)'
                    },
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: 2 }}>
                  <Typography variant='h5' gutterBottom sx={{ color: '#152238' }}>{project.description}</Typography>
                  <Link href={project.githubUrl} target='_blank' color='inherit'>
                    <GitHubIcon sx={{ 
                        fontSize: '3rem', 
                        color: '#152238',
                        '&:hover': {
                            color: '#a3b899'
                        } }}/>
                  </Link>
                </Box>
              )}
              {hovered !== project.id && (
                <CardContent sx={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(252, 238, 233)', color: '#68736B' }}>
                  <Typography variant='h6'>{project.title}</Typography>
                </CardContent>
              )}
            </Card>
          ))}
        </Box>
      </>
    )
}

export default PortfolioProjects;