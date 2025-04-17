import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    Link
} from '@mui/material';
import { FacebookOutlined, Instagram, WhatsApp, LinkedIn } from '@mui/icons-material';
import yo from "../Assets/yo.png";

const Developer = () => {
    return (
        <Box sx={{ background: '#fff3ece7', py: { xs: 4, md: 6 } }}>
            <Container maxWidth="lg"> {/* <-- Cambiado a lg */}
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    {/* PERFIL */}
                    <Grid item xs={12} md={6}> {/* <-- xs: una columna; md: dos columnas */}
                        <Card raised sx={{ borderRadius: 4 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={yo}
                                    alt="Anthony"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        sx={{ color: '#7E3500', textAlign: 'center', fontWeight: 'bold' }}
                                    >
                                        Systems Engineer Anthony C. Moreno
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* DESCRIPCIÓN */}
                    <Grid item xs={12} md={6}>
                        <Card raised sx={{ borderRadius: 4 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h5" sx={{ color: '#7E3500' }} gutterBottom>
                                        Hello, I'm Anthony 👨‍💻
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        I develop and apply knowledge in the design, development and maintenance of computer systems.
                                        I'm passionate about software development, system architecture, cybersecurity, and tech innovation.
                                        My skills include HTML, CSS, JavaScript, React.js, React Native, Node.js, Java, and databases such as
                                        MongoDB, Firebase, PostgreSQL, and MySQL. I also deploy web apps using GitHub Pages and Heroku.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* REDES SOCIALES */}
                    <Grid item xs={12}>
                        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3} mt={2}>
                            <Link href="https://www.facebook.com/profile.php?id=100095502885829" target="_blank">
                                <FacebookOutlined sx={{ fontSize: 40, color: '#3b5998' }} />
                            </Link>
                            <Link href="https://www.instagram.com/thony_cm_18/" target="_blank">
                                <Instagram
                                    sx={{
                                        fontSize: 40,
                                        background:
                                            'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                />
                            </Link>
                            <Link href="https://api.whatsapp.com/qr/FNSLSZHWS3CFM1?autoload=1&app_absent=0" target="_blank">
                                <WhatsApp sx={{ fontSize: 40, color: '#25D366' }} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/anthony-c-a12928111/" target="_blank">
                                <LinkedIn sx={{ fontSize: 40, color: '#0e76a8' }} />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Developer;
