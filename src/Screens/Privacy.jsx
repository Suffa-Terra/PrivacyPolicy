import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import Fondo from '../Assets/Fondo.png'

const Privacy = () => {
    return (
        <div style={{ background: '#fff3ece7' }}>
            <Container maxWidth="md" sx={{ py: 6, backgroundColor: '#fff3ece7' }}>
                <Box textAlign="center" mb={4}
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
                }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Política de Privacidad
                    </Typography>
                    <Typography variant="h6">
                        Última actualización: Abril 2025
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" gutterBottom>1. Información de la Empresa</Typography>
                    <Typography>
                        Esta política es emitida por <strong>AZAKTILSA S.A.</strong>, con domicilio en Pública SL 13 y Juan Montalván Cornejo, Durán, Ecuador. Para cualquier consulta, puede contactarse al correo <strong>terrawasuffa@gmail.com</strong> o al teléfono <strong>0958600426</strong>.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>2. Alcance y Aceptación</Typography>
                    <Typography>
                        Al acceder y utilizar nuestra aplicación de Alimentación de Camarón, usted acepta los términos establecidos en esta Política de Privacidad. Esta política rige el tratamiento de los datos personales recolectados a través de la aplicación.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>3. Datos Recopilados</Typography>
                    <Typography>
                        Recopilamos los siguientes tipos de datos personales:
                        <ul>
                            <li>Información de contacto: nombre, correo electrónico, número de teléfono.</li>
                            <li>Información técnica: tipo de dispositivo, sistema operativo, ubicación aproximada.</li>
                            <li>Datos de uso: historial de alimentación, configuraciones, preferencias de usuario.</li>
                        </ul>
                        Estos datos son recopilados a través del uso de la aplicación y formularios voluntarios.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>4. Finalidad del Tratamiento</Typography>
                    <Typography>
                        Los datos personales serán utilizados para:
                        <ul>
                            <li>Brindar recomendaciones nutricionales personalizadas.</li>
                            <li>Optimizar la experiencia del usuario.</li>
                            <li>Enviar notificaciones y alertas relevantes.</li>
                            <li>Cumplir obligaciones legales y de seguridad.</li>
                        </ul>
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>5. Seguridad de la Información</Typography>
                    <Typography>
                        Nos comprometemos a implementar medidas técnicas y organizativas adecuadas para proteger sus datos contra acceso no autorizado, pérdida o alteración. Utilizamos estándares de seguridad compatibles con la legislación ecuatoriana vigente.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>6. Derechos del Usuario</Typography>
                    <Typography>
                        Usted tiene derecho a acceder, rectificar, actualizar o suprimir sus datos personales en cualquier momento, así como oponerse al tratamiento de los mismos. Puede ejercer estos derechos escribiendo a <strong>terrawasuffa@gmail.com</strong>.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>7. Claves y Accesos</Typography>
                    <Typography>
                        El usuario es responsable exclusivo de mantener la confidencialidad de su contraseña y claves de acceso. No nos responsabilizamos por el uso no autorizado que terceros hagan con dichas credenciales.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>8. Cancelaciones y Reclamos</Typography>
                    <Typography>
                        Las devoluciones están sujetas al Art. 45 de la Ley Orgánica de Defensa del Consumidor. Tiene 72 horas posteriores a la recepción del producto para solicitar un reembolso si el estado del producto lo permite.
                        <br />
                        Para reclamos, puede comunicarse al 6005231 EXT. 140 – 126 o escribir a <strong>terrawasuffa@gmail.com</strong>.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>9. Cambios en esta Política</Typography>
                    <Typography>
                        Nos reservamos el derecho de modificar esta Política en cualquier momento. En caso de realizarse cambios significativos, se notificará a través de la aplicación.
                    </Typography>
                </Box>

                <Box textAlign="center" mt={6}>
                    <Typography variant="body2" color="text.secondary">
                        © 2025 AZAKTILSA S.A. - Todos los derechos reservados.
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default Privacy;
