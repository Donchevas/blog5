import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';

interface PostCardProps {
    post: Post;
}

// FIX: Use React.FC to correctly type the component and resolve issues with special props like 'key'.
const PostCard: React.FC<PostCardProps> = ({ post }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
        <Link href={`/post/${post.slug}`} className="block">
            <div className="relative w-full h-56">
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </Link>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h2 className="text-2xl font-bold mt-2">
                <Link href={`/post/${post.slug}`} className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">{post.title}</Link>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 flex-grow">{post.excerpt}</p>
            <Link href={`/post/${post.slug}`} className="inline-block mt-6 text-blue-500 hover:text-blue-700 font-semibold self-start">
                Leer más &rarr;
            </Link>
        </div>
    </div>
);

export default PostCard;