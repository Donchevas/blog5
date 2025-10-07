
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
 
  if (!post) {
    return {
      title: "Post no encontrado"
    }
  }
 
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map(({ slug }) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
        <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-center">{post.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-center">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="relative w-full h-64 md:h-96 rounded-lg shadow-lg mb-8 overflow-hidden">
            <Image 
                src={post.image} 
                alt={post.title} 
                fill
                style={{ objectFit: 'cover' }}
                priority
            />
        </div>
        
        <div 
            className="prose dark:prose-invert max-w-none mx-auto lg:prose-lg" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <Link href="/" className="inline-block mt-12 text-blue-500 hover:text-blue-700 font-semibold">
            &larr; Volver a todos los artículos
        </Link>
    </article>
  );
}
