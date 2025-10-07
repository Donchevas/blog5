import { getPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

const POSTS_PER_PAGE = 2;

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams?.page) || 1;
  const { posts, totalPosts } = await getPosts({ page, limit: POSTS_PER_PAGE });

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const hasPrevPage = page > 1;
  const hasNextPage = page < totalPages;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">Artículos Recientes</h1>
      
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No hay artículos disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Paginación de artículos" className="flex justify-center items-center space-x-2 mt-12">
            {/* Previous Button */}
            <Link 
                href={`/?page=${page - 1}`}
                className={`px-4 py-2 rounded-lg shadow-md transition-colors ${
                  !hasPrevPage 
                    ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                aria-disabled={!hasPrevPage}
                onClick={(e) => !hasPrevPage && e.preventDefault()}
                aria-label="Ir a la página anterior"
            >
                Anterior
            </Link>

            {/* Page Numbers */}
            <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <Link
                        key={pageNumber}
                        href={`/?page=${pageNumber}`}
                        className={`px-4 py-2 rounded-lg shadow-md transition-colors w-10 text-center ${
                            page === pageNumber
                                ? 'bg-blue-500 text-white font-bold cursor-default'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                        aria-current={page === pageNumber ? 'page' : undefined}
                        aria-label={`Ir a la página ${pageNumber}`}
                    >
                        {pageNumber}
                    </Link>
                ))}
            </div>

            {/* Next Button */}
            <Link 
                href={`/?page=${page + 1}`}
                className={`px-4 py-2 rounded-lg shadow-md transition-colors ${
                  !hasNextPage 
                    ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                aria-disabled={!hasNextPage}
                onClick={(e) => !hasNextPage && e.preventDefault()}
                aria-label="Ir a la página siguiente"
            >
                Siguiente
            </Link>
        </nav>
      )}
    </div>
  );
}