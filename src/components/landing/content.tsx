import Card from "./Card"
import CardEngagement from "./CardEngagement"

export const Content = () => {
    return (

        <div className="flew flew-row  max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8 justify-center items-center">
            <h2 className="text-5xl mb-8 text-center">NOS SERVICES</h2>
            <div className="flex flex-row gap-8">
                <Card
                    title="PLOMBERIE GÉNÉRALE"
                    description="Une isolation performante pour un meilleur confort et des économies d’énergie."
                    imageUrl="/imgplombgene.png"
                />
                <Card
                    title="CARRELAGE ET FAÏENCE"
                    description="Carrelage de qualité, durable et élégant pour tous vos espaces intérieurs et extérieurs."
                    imageUrl="/imgcarrelagecard.png"
                />
                <Card
                    title="ISOLATION THERMIQUE"
                    description="Une isolation performante pour un meilleur confort et des économies d’énergie."
                    imageUrl="/imgiso.png"
                />

            </div>
            <div className="flex flex-row justify-center my-10 gap-8">
                <Card
                    title="ELECTRICITÉ"
                    description="Des installations électriques sûres, conformes et adaptées à vos besoins."
                    imageUrl="/elecimgcard.png"
                />
                <Card
                    title="INSTALATION SANITAIRE ET CHAUFFAGE"
                    description="Ceci est une description de carte simple, tu peux personnaliser ce texte."
                    imageUrl="/imginstalsani.png"
                />


            </div>
            <div>
                <h2 className="text-5xl mb-8 text-center pt-10">NOS ENGAEMENTS</h2>
                <div className="flex flex-row gap-8">

                    <CardEngagement
                        title="Service rapide et efficace"
                        description="Nous nous engageons à intervenir rapidement, souvent dans les 24 heures, pour répondre à vos urgences en plomberie."
                        imageUrl="/icon-fast.png"
                    />
                    <CardEngagement
                        title="Qualité garantie"
                        description="Nos plombiers sont des professionnels certifiés, utilisant des matériaux de qualité pour garantir un travail durable et sécurisé."
                        imageUrl="/icon-qualite.png"
                    />
                    <CardEngagement
                        title="Satisfaction client"
                        description="Votre satisfaction est notre priorité. Nous faisons en sorte que chaque projet soit mené à bien selon vos attentes."
                        imageUrl="/icon-notation.png"
                    />
                </div>


            </div>
            <div>
                <h2 className="text-5xl mb-8 text-center pt-10">NOS EQUIPEMENTS</h2>
                <div className="flex flex-row gap-8">

                    <CardEngagement
                        title="Titre de la carte"
                        description="Ceci est une description de carte simple, tu peux personnaliser ce texte."
                        imageUrl="https://via.placeholder.com/400"
                    />
                    <CardEngagement
                        title="Titre de la carte"
                        description="Ceci est une description de carte simple, tu peux personnaliser ce texte."
                        imageUrl="https://via.placeholder.com/400"
                    />
                    <CardEngagement
                        title="Titre de la carte"
                        description="Ceci est une description de carte simple, tu peux personnaliser ce texte."
                        imageUrl="https://via.placeholder.com/400"
                    />
                </div>


            </div>


        </div>


    )
}