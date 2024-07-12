import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import resumePdf from '../assets/resume/Kayla_Freeman.pdf'

function Resume() {
    return (
        <Box sx={{ padding: '4rem'}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{
                        padding: 2,
                        marginBottom: 4,
                        borderStyle: 'solid',
                        borderColor: '#f8d3c5',
                        borderWidth: '3px',
                        borderRadius: '10px',
                        backgroundColor: '#fceee9',
                    }}>
                        <Typography variant="h6" gutterBottom>
                            My Resume
                        </Typography>
                        <Typography>
                            Download my resume <a href={resumePdf} download="Kayla_Freeman.pdf">here</a>
                             
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{
                        padding: 2,
                        marginBottom: 4,
                        borderStyle: 'solid',
                        borderColor: '#f8d3c5',
                        borderWidth: '3px',
                        borderRadius: '10px',
                        backgroundColor: '#fceee9',
                    }}>
                        <Typography variant="h6" gutterBottom>
                            Education
                        </Typography>
                        <Typography sx={{ fontSize: '14px'}}>
                            edX Coding Bootcamp January 2024 - Present <br />

                            University of Connecticut. MERN Full Stack in JavaScript <br />
                            <br />

                            Pre health September 2022 - June 2023

                            Fanshawe College
                        </Typography>
                    </Paper>

                    <Paper elevation={3} sx={{
                        padding: 2,
                        marginBottom: 4,
                        borderStyle: 'solid',
                        borderColor: '#f8d3c5',
                        borderWidth: '3px',
                        borderRadius: '10px',
                        backgroundColor: '#fceee9',
                    }}>
                        <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
                            Skills
                        </Typography>
                        <Typography sx={{ fontSize: '15px'}}>
                            <strong>
                                React<br />
                                CSS and Frameworks (Material-UI, Bulma, Tailwind, Bootstrap)<br />
                                Node.js <br />
                                Express.js <br />
                                MongoDB <br />
                                mySQL and noSQL <br />
                                GraphQL</strong></Typography>
                    </Paper>

                    <Paper elevation={3} sx={{
                        padding: 2,
                        marginBottom: 4,
                        borderStyle: 'solid',
                        borderColor: '#f8d3c5',
                        borderWidth: '3px',
                        borderRadius: '10px',
                        backgroundColor: '#fceee9',
                    }}>
                        <Typography variant="h6" gutterBottom>
                            Projects
                        </Typography>
                        <Typography sx={{ fontSize: '15px'}}>
                            <strong>Aniname</strong><br />

                            Aniname
                            is a website made with JavaScript, HTML, and a CSS framework we used Bulma. On this site you can search anime, view top anime and their ratings, and you are able to add them to your own list. <br />
                            <br />
                            <strong>GoodPicks</strong><br />

                            GoodPicks is a social media site that uses the Spotify API to get artists pictures, album covers and songs. The HTML structure was created with handlebars, CSS was Tailwind, and JavaScript was vanilla JavaScript.<br />
                            <br />
                            <strong>FitSync Pro</strong><br />

                            FitSync Pro is a fitness website created with React, MongoDB, Mongoose, and Material UI. The Gemini API is being used to create workouts for users using AI based on their age, fitness level, and goals.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            </Box>
    );
}

export default Resume;