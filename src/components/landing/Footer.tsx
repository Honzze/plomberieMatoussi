export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Plomberie Matoussi</h3>
                        <p className="text-gray-400">Votre expert en plomberie et multi-services, à votre service pour
                            tous vos besoins de réparation et installation.</p>
                    </div>

                    <div className="w-full md:w-1/3 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Accueil</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Nos services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contactez-nous</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Nos engagements</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10zm-14 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4 5c-2.3 0-4-1.7-4-4s1.7-4 4-4 4 1.7 4 4-1.7 4-4 4zm6-5c0 1.1-.9 2-2 2s-2-.9-2-2.5c0-1.5.9-2.5 2-2.5s2 .9 2 2.5z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21c-4.959 0-9-4.041-9-9s4.041-9 9-9 9 4.041 9 9-4.041 9-9 9zm-2.25-9c0 .691.559 1.25 1.25 1.25s1.25-.559 1.25-1.25-.559-1.25-1.25-1.25-1.25.559-1.25 1.25zm2.5 0c0 .691.559 1.25 1.25 1.25s1.25-.559 1.25-1.25-.559-1.25-1.25-1.25-1.25.559-1.25 1.25zM13 9h-2v2h2V9zm4 1v2h-2V9h2zm1-1h-1V7h1V6h-1V5h-1v1h-2V5h-1v1h-2V5h-1v1h-1V5h-1V6h-1v1h1v1h-1v2h1v1h1v1h-1v1h1v2h2v-2h2v-1h2V9h-2z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M22.5 12c0 1.5-.5 2.9-1.5 4.1-.9 1.1-2.1 1.9-3.5 2.5 1-1.4 1.5-3.1 1.5-4.6V9.5c0-1.4-.5-3.2-1.5-4.6 1.4.6 2.6 1.4 3.5 2.5 1 .8 1.5 1.9 1.5 3.1zm-2.4-4.7c-.8-.7-1.5-1.1-2.4-1.4-1.4-.5-3.2-.6-4.6.3-.5.3-.9.8-1.2 1.3-.2-.2-.5-.4-.7-.6-1-.9-1.9-1.8-3.1-2.4-.4-.3-.8-.6-1.3-.9-.3.3-.5.6-.7.9-2.2 3.2-1.4 7.4.9 10.1-1.1-.3-2.3-.7-3.4-1.1-.4.2-.8.4-1.2.7-1.5 1.4-2.3 3.5-1.9 5.5 1.3-.2 2.7-.5 4.1-.9-.1-.6-.2-1.2-.2-1.7-.1-.6.1-1.3.3-1.9 1-2 2.9-3.1 5.1-2.4 1.4.4 2.7 1.5 3.7 2.7 1 .7 1.9 1.7 2.4 2.7z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-400 mt-6">
                    <p>&copy; 2026 Plomberie Matoussi. Tous droits réservés.</p>
                </div>
            </div>
        </footer>

    )
}