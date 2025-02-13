import React from 'react';
import { Link } from 'react-router-dom'; // Para la navegación
import '../Template/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Bienvenido a la Aplicación de Alimentación de Camarón</h1>
                <p>Optimiza la alimentación de tus camarones de manera fácil y eficiente.</p>
            </header>

            <section className="home-info">
                <h2>¿Cómo Funciona?</h2>
                <p>
                    Nuestra aplicación utiliza tecnología avanzada para calcular las necesidades nutricionales de tus
                    camarones, basándose en factores como su tamaño, tipo y cantidad. Con nuestras recomendaciones
                    personalizadas, asegurarás el crecimiento saludable de tus camarones.
                </p>
            </section>

            <section className="home-features">
                <h2>Características Principales</h2>
                <ul>
                    <li><strong>Recomendaciones Personalizadas:</strong> Alimentación ajustada a las necesidades de tus camarones.</li>
                    <li><strong>Historial de Alimentación:</strong> Lleva un registro de todas las sesiones de alimentación.</li>
                    <li><strong>Notificaciones:</strong> Recibe alertas sobre las horas de alimentación y recomendaciones.</li>
                </ul>
            </section>

            <section className="home-privacy-link">
                <h2>Política de Privacidad</h2>
                <p>Para conocer cómo manejamos tu información, por favor revisa nuestra <Link to="/privacy">Política de Privacidad</Link>.</p>
            </section>

            <footer className="home-footer">
                <p>© 2025 Alimentación de Camarón. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;
