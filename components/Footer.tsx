
const Footer = () => (
    <footer className="bg-white dark:bg-gray-800 mt-12 py-6 border-t dark:border-gray-700">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Mi Blog. Todos los derechos reservados.</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Twitter</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">LinkedIn</a>
            </div>
        </div>
    </footer>
);

export default Footer;
