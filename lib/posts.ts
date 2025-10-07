import { Post } from '@/types';

// En una aplicación real, estos datos vendrían de un CMS o una base de datos.
const postsData: Post[] = [
    {
        title: 'Creando un Blog con Next.js y TailwindCSS',
        slug: 'creating-a-blog-with-nextjs-and-tailwindcss',
        excerpt: 'Una guía paso a paso para construir un blog moderno, rápido y estilizado. Aprende los fundamentos de Next.js y cómo TailwindCSS puede acelerar tu desarrollo.',
        content: `
            <p>Construir un blog es un excelente proyecto para aprender nuevas tecnologías. En esta guía, exploraremos cómo usar Next.js, un framework de React, para crear un sitio estático increíblemente rápido.</p>
            <h2>¿Por qué Next.js?</h2>
            <p>Next.js ofrece renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG) de forma nativa, lo que resulta en un rendimiento excepcional y un SEO óptimo.</p>
            <h2>Integrando TailwindCSS</h2>
            <p>TailwindCSS es un framework de CSS "utility-first" que nos permite construir diseños complejos directamente en nuestro HTML (o JSX).</p>
        `,
        date: '2024-07-29',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'Entendiendo los React Hooks',
        slug: 'understanding-react-hooks',
        excerpt: 'Una inmersión profunda en `useState`, `useEffect` y otros hooks esenciales de React para construir componentes funcionales y potentes.',
        content: `
            <p>Los Hooks de React revolucionaron la forma en que escribimos componentes. Nos permiten usar estado y otras características de React sin escribir una clase.</p>
            <h2>useState y useEffect</h2>
            <p>El hook <code>useState</code> nos permite añadir estado a nuestros componentes. El hook <code>useEffect</code> nos permite realizar efectos secundarios, como la obtención de datos o suscripciones.</p>
        `,
        date: '2024-07-25',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop'
    },
    {
        title: 'El Futuro del Desarrollo Web: ¿JAMstack o SSR?',
        slug: 'future-of-web-dev-jamstack-vs-ssr',
        excerpt: 'Analizamos las arquitecturas JAMstack y de Renderizado en Servidor (SSR). ¿Cuál es la mejor opción para tu próximo proyecto?',
        content: `
            <p>La elección de la arquitectura correcta es crucial. JAMstack (JavaScript, APIs, y Markup) y el tradicional Renderizado en Servidor (SSR) son dos enfoques populares.</p>
            <h2>JAMstack</h2>
            <p>Se enfoca en pre-renderizar las páginas en el momento del despliegue, ofreciendo máxima velocidad y seguridad.</p>
            <h2>SSR</h2>
            <p>Genera el HTML en el servidor para cada petición, ideal para sitios con contenido altamente dinámico.</p>
        `,
        date: '2024-07-20',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop'
    }
];

export const getPosts = async ({ page = 1, limit = 6 }: { page?: number; limit?: number } = {}): Promise<{posts: Post[], totalPosts: number}> => {
    const sortedPosts = postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    const totalPosts = sortedPosts.length;
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

    return {
        posts: paginatedPosts,
        totalPosts: totalPosts
    };
};

export const getPostBySlug = async (slug: string): Promise<Post | undefined> => {
    return postsData.find(post => post.slug === slug);
};

export const getAllPostSlugs = async (): Promise<{ slug: string }[]> => {
    return postsData.map(post => ({ slug: post.slug }));
};