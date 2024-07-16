import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import aninameImage from '../assets/images/aniname-project1.jpg';
import goodPicksImage from '../assets/images/goodpicks-project2.jpg';
import socialAPI from '../assets/images/homework-1.jpg';
import workSchedule from '../assets/images/work-schedule.jpg';
import weatherDashboard from '../assets/images/Weather-Dashboard.jpg';
import javaQuiz from '../assets/images/javaquiz.jpg';
import LinkIcon from '@mui/icons-material/Link';


const projects = [
    {
      id: 1,
      title: 'Aniname',
      description: 'Anime website created with JavaScript, HTML and a CSS framework (Bulma)',
      image: aninameImage,
      deployedLink: 'https://mikef13x.github.io/project-1-null/',
      githubUrl: 'https://github.com/mikef13x/project-1-null',
    },
    {
        id: 2,
        title: 'Good Picks',
        description: 'A social media involving music. Created with Handlebars, JavaScript, and a CSS framework (tailwind)',
        image: goodPicksImage,
        deployedLink: 'https://hidden-depths-01820-f84c3739770d.herokuapp.com/',
        githubUrl: 'https://github.com/dgomie/good-picks',
    },
    {
        id: 3,
        title: 'Work day scheduler',
        description: 'A schedule to help you through your work day! Made with JavaScript',
        image: workSchedule,
        deployedLink: 'https://kaylommy.github.io/kaylommy-module-5-challenge/',
        githubUrl: 'https://kaylommy.github.io/kaylommy-module-5-challenge/',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather site. Created with JavaScript',
      image: weatherDashboard,
      deployedLink: 'https://kaylommy.github.io/weather-dashboard-challenge/',
      githubUrl: 'https://github.com/kaylommy/weather-dashboard-challenge',
    },
    {
      id: 5,
      title: 'Social Network API',
      description: 'A social network API created with express, mongoDB, mongoose, and node.',
      image: socialAPI,
      githubUrl: 'https://github.com/kaylommy/Social-Network-API',
    },
    {
      id: 6,
      title: 'Java Script Quiz',
      description: 'A quiz made with JavaScript',
      image: javaQuiz,
      deployedLink: 'https://kaylommy.github.io/kaylommy-module-4-challenge/',
      githubUrl: 'https://github.com/kaylommy/kaylommy-module-4-challenge',
    }
  ];
  
  function PortfolioProjects() {
    const [hovered, setHovered] = useState(null);
  
    return (
      <Box sx={{ 
        backgroundColor: '#f8d3c5', 
        borderRadius: '2rem', 
        width: '75vw', 
        mx: 'auto', 
        display: 'block', }}>
        <Typography variant='h4' sx={{ color: '#68736B', marginTop: '9rem', textAlign: 'center', paddingTop: '20px' }}>Portfolio</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {projects.map((project) => (
            <Card
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{ marginTop: '7rem', marginBottom: '9rem', marginRight: '3rem', marginLeft: '3rem', position: 'relative', width: 345, height: 300 }}
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
                  <Link href={project.deployedLink} target='_blank' color='inherit'>
                  <LinkIcon sx={{ 
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
      </Box>
    )
}

export default PortfolioProjects;