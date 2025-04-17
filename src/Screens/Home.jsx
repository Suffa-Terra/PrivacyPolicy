import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import FeedIcon from '@mui/icons-material/Feed';
import HistoryIcon from '@mui/icons-material/History';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Fondo from '../Assets/Fondo.png';

const Home = () => {
    return (
        <div style={{ background: '#fff3ece7' }}>
            <Container maxWidth="md" sx={{ py: 6, backgroundColor: '#fff3ece7' }}>
                <Box textAlign="center" mb={5}
                    sx={{
                        backgroundImage: `url("${Fondo}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        padding: '60px 20px',
                        borderRadius: '16px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        color: '#fff3ece7',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                        '& h1': {
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                        },
                        '& h6': {
                            fontSize: '1.2rem',
                            fontWeight: 'normal',
                        },
                        '& p': {
                            fontSize: '1rem',
                            fontWeight: 'normal',
                        }
                    }}
                >
                    <Typography variant="h3" component="h1" gutterBottom>
                        La excelencia en la cría de camarón es nuestra meta, cosechando calidad, entregando confianza.
                    </Typography>
                    <Typography variant="h6">
                        Optimiza la alimentación de tus camarones de manera fácil y eficiente.
                    </Typography>
                </Box>

                <Box mb={5}>
                    <Typography variant="h5" gutterBottom>
                        ¿Cómo Funciona?
                    </Typography>
                    <Typography paragraph>
                        Nuestra aplicación realiza cálculos de alimentación a partir de datos clave como el peso promedio del camarón, la densidad poblacional, el tipo de alimento utilizado y la etapa de crecimiento. Esto permite una planificación precisa y personalizada.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Tipos de Cálculo:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon style={{ color: '#7E3500' }} /></ListItemIcon>
                            <ListItemText
                                primary="Por Animal"
                                secondary="Se estima la cantidad ideal de alimento por camarón, basada en su biomasa y requerimientos diarios."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon style={{ color: '#7E3500' }} /></ListItemIcon>
                            <ListItemText
                                primary="Por Población"
                                secondary="Calcula la cantidad total de alimento para toda la población del estanque o jaula."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon style={{ color: '#7E3500' }} /></ListItemIcon>
                            <ListItemText
                                primary="Por Tipo de Alimentación"
                                secondary="Adapta las raciones según el tipo de dieta (inicial, crecimiento, engorde) para maximizar eficiencia y salud."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon style={{ color: '#7E3500' }} /></ListItemIcon>
                            <ListItemText
                                primary="Por Dato"
                                secondary="Permite ingresar manualmente parámetros como temperatura, salinidad o tasa de conversión alimenticia para afinar los cálculos."
                            />
                        </ListItem>
                    </List>
                </Box>

                <Box mb={5}>
                    <Typography variant="h5" gutterBottom>
                        Características Principales
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon><FeedIcon style={{ color: '#7E3500' }} /></ListItemIcon>
                            <ListItemText primary="Recomendaciones Personalizadas" secondary="Alimentación ajustada a las necesidades de tus camarones." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><HistoryIcon style={{ color: '#7E3500' }} /></ListItemIcon>
                            <ListItemText primary="Historial de Alimentación" secondary="Lleva un registro de todas las sesiones de alimentación." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><NotificationsActiveIcon style={{ color: '#7E3500' }} /></ListItemIcon>
                            <ListItemText primary="Notificaciones" secondary="Recibe alertas sobre las horas de alimentación y recomendaciones." />
                        </ListItem>
                    </List>
                </Box>

                <Box mb={5}>
                    <Typography variant="h5" gutterBottom>
                        Política de Privacidad
                    </Typography>
                    <Typography mb={2}>
                        Para conocer cómo manejamos tu información, revisa nuestra política detallada.
                    </Typography>
                    <Button
                        variant="outlined"
                        startIcon={<PrivacyTipIcon style={{ color: '#7E3500' }} />}
                        component={RouterLink}
                        to="/privacy"
                        sx={{
                            color: '#7E3500',
                            borderColor: '#7E3500',
                            '&:hover': {
                                backgroundColor: '#7E3500',
                                color: '#fff'
                            }
                        }}
                    >
                        Leer Política de Privacidad
                    </Button>
                </Box>

                <Box textAlign="center" mt={8}>
                    <Typography variant="body2" color="text.secondary">
                        © 2025 Alimentación de Camarón. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default Home;
