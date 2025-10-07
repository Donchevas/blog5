
# Mi Blog Moderno con Next.js (App Router)

Este es un proyecto de blog creado con Next.js (usando el App Router), TypeScript y TailwindCSS. Está diseñado para ser rápido, moderno, y fácil de mantener y escalar.

## Características

-   **Next.js App Router:** Utiliza la última y más potente arquitectura de Next.js para renderizado en el servidor (SSR) y generación de sitios estáticos (SSG).
-   **TypeScript:** Código más seguro y mantenible.
-   **TailwindCSS con Plugin de Tipografía:** Interfaz moderna y responsiva, con un estilizado de contenido de blog profesional y listo para usar.
-   **Estructura preparada para CMS:** La obtención de datos está abstraída en la carpeta `lib/`, facilitando la conexión con cualquier CMS Headless (Sanity, Contentful, Strapi, etc.).
-   **SEO Optimizado:** Generación de metadatos dinámicos para cada página de post.
-   **Imágenes Optimizadas:** Usa el componente `next/image` para optimizar automáticamente las imágenes.

## Cómo Iniciar el Proyecto Localmente

1.  **Crea los archivos:** Asegúrate de tener todos los archivos de este proyecto en la estructura de carpetas correcta.
2.  **Instala las dependencias:** Abre una terminal en la carpeta del proyecto y ejecuta:
    ```bash
    npm install
    ```
3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
4.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Cómo Desplegar en Vercel

1.  **Sube tu proyecto a GitHub:** Crea un repositorio en GitHub y sube tu código.
2.  **Importa el Proyecto en Vercel:**
    -   Regístrate en [Vercel](https://vercel.com) con tu cuenta de GitHub.
    -   En tu dashboard, haz clic en "Add New... -> Project".
    -   Selecciona tu repositorio de GitHub.
3.  **Configura y Desplega:** Vercel detectará automáticamente que es un proyecto de Next.js. No necesitas cambiar ninguna configuración. Simplemente haz clic en "Deploy".
4.  **¡Listo!** Tu blog estará online. Cada `git push` a tu rama principal desplegará automáticamente los cambios.

## Conectando a un CMS (ej. Sanity)

La estructura está lista para que el cambio de fuente de datos sea trivial.

1.  **Instala el cliente del CMS:** `npm install @sanity/client`
2.  **Modifica `lib/posts.ts`:** Cambia las funciones para que hagan una petición a la API de tu CMS.
3.  **Variables de Entorno:** Añade las claves de tu API a las variables de entorno en Vercel para mantenerlas seguras.
