import Card from "@/src/components/landing/Card";
import CardEngagement from "@/src/components/landing/CardEngagement";

export const Content = () => {
  return (
    <div className="flew flew-col mx-auto my-20 max-w-7xl flex-col px-4 sm:flex">
      <h2 className="lg-8 mb-5 text-center text-5xl">NOS SERVICES</h2>
      <div className="flex flex-col justify-between gap-6 md:flex-col">
        <Card
          title="PLOMBERIE GÉNÉRALE"
          imageUrl="/imgplombgene.png"
          liprops={["Première info", "Deuxième info", "Troisième info"]}
        />
        <Card
          title="CARRELAGE ET FAÏENCE"
          description="Carrelage de qualité, durable et élégant pour tos vos espaces intérieurs et extérieurs."
          imageUrl="/imgcarrelagecard.png"
        />
        <Card
          title="ISOLATION THERMIQUE"
          description="Une isolation performante pour un meilleur confort et des économies d’énergie."
          imageUrl="/imgiso.png"
        />
        <Card
          title="ELECTRICITÉ GÉNÉRALE"
          description="Des installations électriques sûres, conformes et adaptées à vos besoins."
          imageUrl="/elecimgcard.png"
        />
        <Card
          title="INSTALATION SANITAIRE"
          description="Ceci est une description de carte simple, tu peux personnaliser ce texte."
          imageUrl="/imginstalsani.png"
        />
        <Card
          title="INSTALATION SANITAIRE ET CHAUFFAGE"
          description="Ceci est une description de carte simple, tu peux personnaliser ce texte."
          imageUrl="/Chaufimgcard.png"
        />
        <Card
          title="MACONNERIE GENÉRALE"
          description="Des installations électriques sûres, conformes et adaptées à vos besoins."
          imageUrl="/maconimgcard.png"
        />
        <Card
          title="PLACONNERIE ET PLATRIER"
          description="Ceci est une description de carte simple, tu peux personnaliser ce texte."
          imageUrl="/placoimgcard.png"
        />
        <Card
          title="NETTOYAGE DE TOITURE ET FACADE"
          description="Ceci est une description de carte simple, tu peux personnaliser ce texte."
          imageUrl="/toitimgcard.png"
        />
      </div>

      <div>
        <h2 className="mb-8 pt-10 text-center text-5xl">NOS ENGAEMENTS</h2>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
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
      <div></div>
    </div>
  );
};
