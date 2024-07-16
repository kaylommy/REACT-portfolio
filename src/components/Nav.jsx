import { AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#a3b899'
        }
    }
});

function NavBar() {
    const navigate = useNavigate(); // navigate to each page
    const location = useLocation();
    const matches = useMediaQuery(theme.breakpoints.down('sm')); //mediaquery for small screens(small)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }; // hamburger menu handler

    const handleClose = () => {
        setAnchorEl(null);
    }; // closing hamburger menu handler
    const isActive = (path) => location.pathname === path;

  return (
    <ThemeProvider theme={theme}>
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: 'white', marginX: { sm: '0', md: '4rem' } }}>Kayla</Typography>
            {matches ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleMenu}
                                sx={{ color: 'white' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                keepMounted
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => { handleClose(); navigate('/'); }}>About Me</MenuItem>
                               <MenuItem onClick={() => { handleClose(); navigate('/portfolio'); }}>Portfolio</MenuItem>
                                <MenuItem onClick={() => { handleClose(); navigate('/resume'); }}>My Resume</MenuItem>
                                {/* <MenuItem onClick={() => { handleClose(); navigate('/contact'); }}>Contact Me</MenuItem> */}
                            </Menu>
                            </>
                            ) : (
                                <>
                                <Button onClick={() => navigate('/')} sx={{ color: isActive('/') ? 'grey' : 'white', padding: '1rem'}}>About Me</Button>
                                <Button onClick={() => navigate('/portfolio')} sx={{ color: isActive('/portfolio') ? 'grey' : 'white', padding: '1rem'}}>Portfolio</Button>
                                <Button onClick={() => navigate('/resume')} sx={{ color: isActive('/resume') ? 'grey' : 'white', padding: '1rem'}}>My Resume</Button>
                                <Button onClick={() => navigate('/contact')} sx={{ color: isActive('/contact') ? 'grey' : 'white', padding: '1rem'}}>Contact Me</Button>
                                </>
                            )}
            </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;