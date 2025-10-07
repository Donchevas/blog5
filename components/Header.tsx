import Link from 'next/link';

const Header = () => (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Mi Blog Moderno
            </Link>
            <nav>
                <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    Sobre Mí
                </Link>
            </nav>
        </div>
    </header>
);

export default Header;
