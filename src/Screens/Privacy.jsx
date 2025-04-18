import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import Fondo from '../Assets/Fondo.png';

const Privacy = () => {
    return (
        <div style={{ background: '#fff3ece7' }}>
            <Container maxWidth="md" sx={{ py: 6, backgroundColor: '#fff3ece7' }}>
                <Box
                    textAlign="center"
                    mb={4}
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
                        },
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Política de Privacidad
                    </Typography>
                    <Typography variant="h6">Última actualización: Abril 2025</Typography>
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
                    <Typography variant="h6" gutterBottom>10. Nuestros Valores</Typography>

                    <Typography gutterBottom>
                        La confianza es la base de nuestra aplicación de alimentación de camarón, y creemos firmemente en hacer lo correcto con tu información. Tres valores principales guían el desarrollo de nuestros productos y servicios, especialmente en un contexto donde tus decisiones de cultivo se basan en los datos que nos proporcionas. Estos valores te ayudarán a entender cómo manejamos tu información y por qué tu privacidad es fundamental para nosotros.
                    </Typography>

                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Tu información te pertenece</Typography>
                    <Typography gutterBottom>
                        Analizamos cuidadosamente el tipo de datos necesarios para ofrecerte recomendaciones de alimentación precisas y personalizadas. Limitamos la recopilación a lo estrictamente esencial para mejorar la nutrición de tus camarones. Siempre que es posible, anonimizamos o eliminamos los datos cuando dejan de ser necesarios. Nuestros ingenieros trabajan codo a codo con los equipos de seguridad y privacidad para asegurarse de que tu información se utilice exclusivamente para tu beneficio como productor.
                    </Typography>

                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Protegemos tu información de terceros</Typography>
                    <Typography gutterBottom>
                        Si un tercero solicita tus datos personales, nos negaremos a compartirlos a menos que tengamos tu consentimiento o exista una obligación legal. En caso de estar obligados por ley, te informaremos antes de compartir cualquier información, a menos que una orden judicial lo prohíba.
                    </Typography>

                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Diseñamos pensando en la privacidad</Typography>
                    <Typography>
                        Desde el diseño inicial de nuestras funciones hasta su implementación, tomamos decisiones que priorizan la privacidad. Esto incluye cómo se almacenan los datos de alimentación, tus preferencias como usuario, y cualquier información relevante para mejorar el manejo eficiente del alimento en tus piscinas. La privacidad no es solo una característica, sino una base de nuestro sistema.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>11. Cambios en esta Política</Typography>
                    <Typography>
                        Nos reservamos el derecho de modificar esta Política en cualquier momento. En caso de realizarse cambios significativos, se notificará a través de la aplicación.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>12. Sus derechos sobre su información</Typography>
                    <Typography>
                        En <strong>AZAKTILSA S.A.</strong>, creemos que todos los usuarios deben tener la posibilidad de acceder y controlar su información personal, sin importar su ubicación. Dependiendo de cómo utilice nuestra aplicación de alimentación de camarón, usted podría tener derecho a:
                        <ul>
                            <li>Acceder a su información personal.</li>
                            <li>Solicitar la corrección, modificación o eliminación de sus datos.</li>
                            <li>Transferir su información a otro proveedor.</li>
                            <li>Restringir u oponerse a ciertos usos de sus datos.</li>
                        </ul>
                        El ejercicio de estos derechos no implicará cargos adicionales ni un trato discriminatorio en la calidad del servicio que le ofrecemos. Sin embargo, algunos de estos derechos solo aplican en determinadas circunstancias y están sujetos a las leyes vigentes en el Ecuador o en su jurisdicción.
                        <br /><br />
                        Si ha proporcionado su información a través de nuestra aplicación y desea ejercer cualquiera de estos derechos, puede contactarnos directamente a través del correo <strong>terrawasuffa@gmail.com</strong> o al teléfono <strong>0958600426</strong>. Deberá proporcionar información suficiente que nos permita verificar su identidad antes de procesar su solicitud.
                        <br /><br />
                        Nos comprometemos a atender todas las solicitudes de acuerdo con los marcos legales aplicables y, en caso de ser necesario, utilizaremos herramientas seguras para validar su identidad y garantizar que su información esté protegida en todo momento.
                        <br /><br />
                        Si no está satisfecho con nuestra respuesta o desea presentar una reclamación, puede comunicarse con la autoridad competente en protección de datos en Ecuador o su país de residencia.
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
