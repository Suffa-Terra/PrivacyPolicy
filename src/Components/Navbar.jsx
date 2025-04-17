import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: '#7E3500',
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                >
                    🦐 AZAKTILSA
                </Typography>

                {/* Menú en pantallas grandes */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button component={RouterLink} to="/" color="inherit">Inicio</Button>
                    <Button component={RouterLink} to="/privacy" color="inherit">Privacidad</Button>
                    <Button component={RouterLink} to="/terms" color="inherit">Términos</Button>
                    <Button component={RouterLink} to="/Developer" color="inherit">Desarrollador</Button>
                </Box>

                {/* Menú hamburguesa en pantallas pequeñas */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={RouterLink} to="/" onClick={handleMenuClose}>Inicio</MenuItem>
                        <MenuItem component={RouterLink} to="/privacy" onClick={handleMenuClose}>Privacidad</MenuItem>
                        <MenuItem component={RouterLink} to="/terms" onClick={handleMenuClose}>Términos</MenuItem>
                        <MenuItem component={RouterLink} to="/Developer" onClick={handleMenuClose}>Desarrollador</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
