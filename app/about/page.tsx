import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mí | Mi Blog Moderno',
  description: 'Conoce más sobre el autor de Mi Blog Moderno.',
};

const AboutPage = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Sobre Mí</h1>
            <div className="prose dark:prose-invert max-w-none mx-auto lg:prose-lg">
                <p>
                    ¡Hola! Soy un desarrollador apasionado por la tecnología, el diseño y compartir conocimiento.
                    Este blog es mi pequeño rincón en internet donde escribo sobre desarrollo web, frameworks
                    modernos como Next.js y React, y otros temas que me parecen interesantes.
                </p>
                <p>
                    Mi objetivo es crear contenido claro, práctico y útil que pueda ayudar a otros desarrolladores
                    en su camino de aprendizaje. Cuando no estoy programando, probablemente me encuentres
                    explorando nuevas rutas de senderismo o disfrutando de una buena taza de café.
                </p>
                <p>
                    Gracias por visitar mi blog. ¡Espero que disfrutes del contenido!
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
