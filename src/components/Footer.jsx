import React from 'react';
import { Box, Container, Link, ThemeProvider, createTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const theme = createTheme({
    palette: {
        primary: {
            main: '#a3b899'
        }
    }
});


function Footer() {

  return (
    <ThemeProvider theme={theme}>
     <Box component="footer" bgcolor="primary.main" py={2}>
     <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link aria-label="github" href="https://github.com/kaylommy">
          <GitHubIcon sx={{ 
            color: 'white', 
            padding: '1rem',
            '&:hover': {
                color: '#68736B'
            } }} />
        </Link>
        <Link aria-label="linkedin" href="https://www.linkedin.com/in/kayla-undefined-8a88a02b4/">
          <LinkedInIcon sx={{ 
            color: 'white', 
            padding: '1rem',
            '&:hover': {
                color: '#68736B'
            } }} />
        </Link>
        <Link aria-label="email" href="mailto:kaylajfreeman13@gmail.com">
          <EmailIcon sx={{ 
            color: 'white', 
            padding: '1rem',
            '&:hover': {
                color: '#68736B'
            } }} />
        </Link>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;