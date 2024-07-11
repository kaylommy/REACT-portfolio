import { Typography, Box, ThemeProvider, createTheme, Link } from "@mui/material";
import React from "react";
import image from '../assets/images/react.portfolio.jpg';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fceee9'
        }
    }
});

function AboutMe() {
    // const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        display: 'flex',
                        height: '100vh',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: '45%',
                            height: '50vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '2rem',
                            backgroundColor: 'primary.main',
                            border: '1rem solid #fceee9',
                            boxShadow: 'inset 0 0 0 3px #f8d3c5',
                            padding: '1rem',
                            marginRight: '5rem',

                        }}
                    >
                        <Typography variant="h5" sx={{ color: '#68736B', textAlign: 'center' }}>
                            I'm Kayla, a junior developer from Ontario, Canada but currently based in Charlotte, North Carolina.
                            <br />
                            <br />
                            I am currently in a fullstack development bootcamp with EdX. Throughout this bootcamp I have become skillful in JavaScript and REACT. I am a very hardworker and put my best effort into everything I do.
                            <br />
                            <br />
                            <Link href="https://github.com/kaylommy" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ 
                        color: '#68736B', 
                        verticalAlign: 'middle', 
                        fontSize: '3rem', 
                        marginTop: '3rem', 
                        marginLeft: '9rem',
                        '&:hover': {
                            color: '#a3b899'
                        } }} />
                    GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/kayla-undefined-8a88a02b4/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ 
                color: '#68736B', 
                verticalAlign: 'middle', 
                fontSize: '3rem', 
                marginTop: '3rem',
                '&:hover': {
                    color: '#a3b899'
                } }} />
            LinkedIn
        </Link>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                width: '350px',
                                height: '375px',
                                objectFit: 'contain',
                                border: '0.5rem solid #f8d3c5',
                                boxShadow: 'inset 0 0 0 5rem #f8d3c5',
                            }}
                            alt="Kayla Freeman"
                            src={image}
                        />
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#68736B',
                                textAlign: 'center',
                                marginTop: '2rem'
                            }}>Kayla Freeman</Typography>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default AboutMe;