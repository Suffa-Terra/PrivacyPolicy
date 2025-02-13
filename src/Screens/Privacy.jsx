import React from "react";
import '../Template/Privacy.css';

const Privacy = () => {
    return (
        <div className="privacy-container">
            <div className="parallax">
                <h1>Política de Privacidad</h1>
            </div>

            <div className="content">
                <section>
                    <h2>1. Información que Recopilamos</h2>
                    <p><strong>1.1. Información Personal Identificable:</strong> Nombre, Correo electrónico, Información de la cuenta (si se utiliza una cuenta de usuario), Información de pago (si aplica).</p>
                    <p><strong>1.2. Información No Identificable:</strong> Información sobre el dispositivo, Datos de ubicación, Datos de uso, Cookies y tecnologías de seguimiento.</p>
                    <p><strong>1.3. Información de la Actividad de la Aplicación:</strong> Recopilamos información sobre cómo utilizas la aplicación para mejorar las recomendaciones y el servicio, como las preferencias de alimentación y el historial de actividades.</p>
                </section>

                <section>
                    <h2>2. Cómo Usamos la Información</h2>
                    <p><strong>2.1. Proveer y Mejorar los Servicios:</strong> Utilizamos la información recopilada para personalizar las recomendaciones, mejorar la calidad de la aplicación y enviar notificaciones.</p>
                    <p><strong>2.2. Comunicaciones:</strong> Podremos enviarte correos electrónicos o notificaciones dentro de la app sobre actualizaciones, promociones y soporte.</p>
                    <p><strong>2.3. Análisis:</strong> Usamos la información para analizar el uso de la app y mejorar la experiencia de usuario.</p>
                </section>

                <section>
                    <h2>3. Compartición de la Información</h2>
                    <p><strong>3.1. Proveedores de Servicios:</strong> Compartimos tu información con proveedores de servicios que ayudan en el funcionamiento de la app.</p>
                    <p><strong>3.2. Cumplimiento Legal:</strong> Podemos compartir tu información si es requerido por ley o para proteger nuestros derechos.</p>
                    <p><strong>3.3. Terceros:</strong> No compartimos tu información con terceros para fines comerciales sin tu consentimiento.</p>
                </section>

                <section>
                    <h2>4. Seguridad de la Información</h2>
                    <p>Tomamos medidas para proteger tu información, pero ten en cuenta que ninguna transmisión es 100% segura.</p>
                </section>

                <section>
                    <h2>5. Cookies y Tecnologías de Seguimiento</h2>
                    <p><strong>5.1. Uso de Cookies:</strong> Utilizamos cookies para mejorar tu experiencia y personalizar tu interacción con la app.</p>
                    <p><strong>5.2. Opciones del Usuario:</strong> Puedes configurar tu dispositivo para rechazar cookies, aunque algunas funciones de la app podrían no funcionar correctamente.</p>
                </section>

                <section>
                    <h2>6. Retención de Datos</h2>
                    <p>Conservamos tu información mientras sea necesario para cumplir con los fines para los que fue recopilada. Después de este período, eliminamos o anonimizamos los datos.</p>
                </section>

                <section>
                    <h2>7. Derechos de los Usuarios</h2>
                    <p><strong>7.1. Acceso y Corrección:</strong> Tienes derecho a acceder y corregir tu información personal en cualquier momento.</p>
                    <p><strong>7.2. Eliminación de Información:</strong> Puedes solicitar la eliminación de tu cuenta y tus datos.</p>
                    <p><strong>7.3. Retiro de Consentimiento:</strong> Puedes retirar tu consentimiento en cualquier momento, lo que podría afectar algunas funcionalidades.</p>
                </section>

                <section>
                    <h2>8. Cambios en la Política de Privacidad</h2>
                    <p>Nos reservamos el derecho de actualizar esta Política de Privacidad y te notificaremos sobre cualquier cambio.</p>
                </section>

                <section>
                    <h2>9. Contacto</h2>
                    <p>Si tienes preguntas, contáctanos a: <a href="mailto:tu-correo@dominio.com">tu-correo@dominio.com</a></p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;
