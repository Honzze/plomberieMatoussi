export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-wrap justify-between">


                    <div className="w-full md:w-1/3 mb-6">
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Accueil</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Nos services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contactez-nous</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Nos engagements</a></li>
                        </ul>
                    </div>

                </div>

                <div className="text-center text-gray-400 mt-6">
                    <p>&copy; 2026 LegendAgency. Tous droits réservés.</p>
                </div>
            </div>
        </footer>

    )
}