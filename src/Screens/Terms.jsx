import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import Fondo from '../Assets/Fondo.png'

const Terms = () => {
    return (
        <div style={{ background: '#fff3ece7' }}>
            <Container maxWidth="md" sx={{ py: 6, backgroundColor: '#fff3ece7' }}>
                <Box textAlign="center" mb={4} sx={{
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
                        Términos y Condiciones
                    </Typography>
                    <Typography variant="h6">
                        Última actualización: Abril 2025
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" gutterBottom>1. Aceptación de los Términos</Typography>
                    <Typography>
                        Al descargar, acceder o utilizar esta aplicación, usted acepta estos Términos y Condiciones. Si no está de acuerdo con alguno de ellos, por favor no utilice esta aplicación.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>2. Titularidad</Typography>
                    <Typography>
                        Esta aplicación es desarrollada y mantenida por <strong>AZAKTILSA S.A.</strong>, con domicilio en Pública SL 13 y Juan Montalván Cornejo, Durán, Ecuador. Correo de contacto: <strong>terrawasuffa@gmail.com</strong>.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>3. Uso Permitido</Typography>
                    <Typography>
                        Esta aplicación es para uso personal y no comercial. El usuario se compromete a utilizarla conforme a la ley y a no emplearla para fines ilícitos, fraudulentos o lesivos de derechos de terceros o del desarrollador.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>4. Propiedad Intelectual</Typography>
                    <Typography>
                        Todo el contenido, código fuente, logotipos, nombres comerciales, interfaces, textos, imágenes, modelos predictivos, bases de datos y diseño gráfico contenidos en esta aplicación son propiedad exclusiva de <strong>AZAKTILSA S.A.</strong>, protegidos por la <strong>Ley de Propiedad Intelectual del Ecuador</strong> y tratados internacionales como el Convenio de Berna y el ADPIC.
                        <br /><br />
                        Queda expresamente prohibida su reproducción, distribución, comunicación pública, transformación, ingeniería inversa o cualquier otra forma de utilización no autorizada sin el consentimiento previo y por escrito del titular. El incumplimiento de esta cláusula podrá ser perseguido judicialmente bajo las acciones civiles y penales que correspondan.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>5. Registro y Datos del Usuario</Typography>
                    <Typography>
                        Al registrarse en la aplicación, el usuario garantiza que los datos proporcionados son veraces, exactos y actualizados. AZAKTILSA S.A. se reserva el derecho de suspender cuentas con información falsa o sospechosa.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>6. Seguridad</Typography>
                    <Typography>
                        Nos comprometemos a proteger la información del usuario mediante tecnologías de seguridad. Sin embargo, el usuario es responsable de mantener la confidencialidad de sus credenciales y de notificar accesos no autorizados.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>7. Política de Pagos</Typography>
                    <Typography>
                        Todos los precios incluyen impuestos aplicables. Las transacciones son gestionadas por plataformas de pago externas, y AZAKTILSA S.A. no almacena información financiera del usuario.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>8. Devoluciones y Cancelaciones</Typography>
                    <Typography>
                        Conforme al Art. 45 de la Ley Orgánica de Defensa del Consumidor, el usuario podrá solicitar la devolución de productos en un plazo de 72 horas, siempre que estos no hayan sido alterados y conserven su estado original.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>9. Limitación de Responsabilidad</Typography>
                    <Typography>
                        Esta aplicación no se hace responsable por daños directos o indirectos derivados del uso del contenido, errores técnicos o interrupciones del servicio.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>10. Modificaciones</Typography>
                    <Typography>
                        AZAKTILSA S.A. se reserva el derecho de modificar estos Términos en cualquier momento. Los cambios se notificarán en la app o sitio web. El uso posterior de la aplicación implica aceptación de las nuevas condiciones.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>11. Jurisdicción</Typography>
                    <Typography>
                        Estos Términos se rigen por las leyes de la República del Ecuador. Cualquier disputa será resuelta ante los tribunales competentes del cantón Durán.
                    </Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>12. Protección de Datos Personales</Typography>
                    <Typography>
                        AZAKTILSA S.A. se compromete al cumplimiento íntegro de la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP)</strong>, vigente en Ecuador desde el 26 de mayo de 2021.
                        <br /><br />
                        La información personal que se recopile a través de esta aplicación será tratada de forma lícita, leal, transparente y segura, con fines estrictamente vinculados al funcionamiento de la app y mejora del servicio.
                        <br /><br />
                        <strong>Los datos personales no serán compartidos con terceros</strong>, excepto cuando sea necesario para cumplir con obligaciones legales, o por requerimiento judicial. No se venderá, divulgará ni transferirá información personal sin el consentimiento expreso del titular.
                        <br /><br />
                        En todo momento, el usuario podrá ejercer los derechos de:
                        <ul>
                            <li>Acceso</li>
                            <li>Rectificación</li>
                            <li>Eliminación</li>
                            <li>Oposición</li>
                            <li>Portabilidad</li>
                            <li>Suspensión del tratamiento</li>
                        </ul>
                        Para ejercer estos derechos, deberá comunicarse al correo electrónico: <strong>terrawasuffa@gmail.com</strong>.
                        <br /><br />
                        AZAKTILSA S.A. ha adoptado medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado que impida la pérdida, mal uso, alteración, acceso no autorizado o robo de los datos personales.
                        <br /><br />
                        El tratamiento de datos sensibles, como ubicación o hábitos de uso, se realizará únicamente si es estrictamente necesario y bajo consentimiento expreso del usuario.
                        <br /><br />
                        Cualquier vulneración de seguridad será notificada a la autoridad de control dentro de los plazos legales y, de ser necesario, al titular de los datos. La empresa se somete a todas las obligaciones establecidas por la LOPDP y las sanciones en caso de incumplimiento.
                    </Typography>
                </Box>

                {/* Sección 13: Certificación DPF */}
                <Divider sx={{ my: 3 }} />

                <Box>
                    <Typography variant="h6" gutterBottom>13. Certificación DPF de UTI</Typography>
                    <Typography>
                        UTI ha certificado al Departamento de Comercio de los Estados Unidos que se adhiere a (1) la UE-EE. UU. Principios del Marco de Privacidad de los datos relativos al tratamiento de los datos personales recibidos de los países miembros del EEA de acuerdo con UE-EE. UU. DPF, y del Reino Unido (y Gibraltar) en función de la Ampliación del Reino Unido al DPF UE-EE. UU. y (2) los Principios del Marco de Privacidad de los datos relacionados con el tratamiento de los datos personales recibidos de Suiza de acuerdo con la normativa del DPF Suiza-EE. UU.
                        <br /><br />
                        En caso de conflicto entre este aviso y los Principios mencionados anteriormente, prevalecerán los Principios. En caso de que los DPF UE-EE. UU. o el DPF Suiza-EE. UU. se invalidaran, UTI transferirá los datos que estén sujetos a estas certificaciones de acuerdo con los otros mecanismos de transferencia de datos descritos anteriormente.
                        <br /><br />
                        <strong>Tenga en cuenta lo siguiente:</strong>
                        <ul>
                            <li><strong>Ámbito:</strong> La certificación DPF de UTI se aplica a los datos relacionados con los interesados en el EEA, el Reino Unido o Suiza que recibe de otros responsables del tratamiento de datos.</li>
                            <li><strong>Acceso:</strong> Los usuarios tienen derecho a acceder a sus datos personales, que están sujetos a la certificación DPF de UTI. Para obtener información sobre cómo ejercer este derecho, consulte la sección “Elección y transparencia”.</li>
                            <li><strong>Transferencia posterior:</strong> UTI es el responsable de la transferencia de los datos personales, sujeta a su certificación a terceros.</li>
                            <li><strong>Solicitud de las autoridades judiciales:</strong> La ley aplicable exige que UTI comparta los datos de los usuarios, incluidos los que pueden estar sujetos a la certificación de UTI, de conformidad con un proceso legal o una solicitud gubernamental, incluida la de las fuerzas de seguridad.</li>
                            <li><strong>Investigación y ejecución:</strong> UTI está sujeto a las facultades de investigación y ejecución de la Comisión Federal de Comercio de los EE. UU.</li>
                            <li><strong>Preguntas y disputas:</strong> Los pasajeros y los destinatarios de las entregas pueden contactar con UTI aquí, y los conductores y repartidores pueden contactar con UTI aquí si tienen preguntas sobre nuestro cumplimiento de los Principios mencionados anteriormente.</li>
                        </ul>
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

export default Terms;
