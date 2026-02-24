import Card from "@/src/components/landing/Card";
import CardEngagement from "@/src/components/landing/CardEngagement";

export const Content = () => {
  const services = [
    {
      title: "PLOMBERIE GÉNÉRALE",
      imageUrl: "/imgplombgene.png",
      tags: ["Dépannage urgent", "Installation", "Rénovation"],
      desc: "Installation, réparation de fuites et entretien de robinetterie."
    },
    {
      title: "CARRELAGE ET FAÏENCE",
      imageUrl: "/imgcarrelagecard.png",
      desc: "Pose technique de carrelage et faïence pour cuisines et salles de bains."
    },
    {
      title: "ISOLATION THERMIQUE",
      imageUrl: "/imgiso.png",
      desc: "Solutions d'isolation par l'intérieur pour optimiser votre consommation."
    },
    {
      title: "ÉLECTRICITÉ GÉNÉRALE",
      imageUrl: "/elecimgcard.png",
      desc: "Mise aux normes NF C 15-100 et dépannages électriques complets."
    },
    {
      title: "INSTALLATION SANITAIRE",
      imageUrl: "/imginstalsani.png",
      desc: "Pose de chauffe-eau, WC, douches et équipements sanitaires."
    },
    {
      title: "CHAUFFAGE & ECS",
      imageUrl: "/Chaufimgcard.png",
      desc: "Systèmes de chauffage central et production d'eau chaude sanitaire."
    },
    {
      title: "MAÇONNERIE GÉNÉRALE",
      imageUrl: "/maconimgcard.png",
      desc: "Travaux de maçonnerie de second œuvre et aménagements structurels."
    },
    {
      title: "PLÂTRERIE & PLACO",
      imageUrl: "/placoimgcard.png",
      desc: "Pose de cloisons sèches, doublages et finitions prêtes à peindre."
    },
    {
      title: "ENTRETIEN TOITURE",
      imageUrl: "/toitimgcard.png",
      desc: "Démoussage et protection des couvertures pour garantir l'étanchéité."
    },
  ];

  return (
      <section className="mx-auto my-16 max-w-7xl px-4 sm:px-6">

        {/* HEADER : Carré et sobre */}
        <div className="mb-12 border-l-8 border-primary pl-6 py-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl uppercase">
            Nos <span className="text-primary">Services Professionnels</span>
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            Solutions techniques et interventions d'urgence à Nantes.
          </p>
        </div>

        {/* GRID SERVICES : Angles réduits (rounded-md), structure stable */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((service, index) => (
              <Card
                  key={index}
                  {...service}
                   // Force la carte à remplir toute la hauteur de sa cellule
              />
          ))}
        </div>

        {/* SECTION ENGAGEMENTS : Design "Bloc" solide */}
        <div className="mt-20 border-t-2 border-slate-100 pt-16">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-800">
              Nos Engagements <span className="text-primary">Métier</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-0 border border-slate-200 md:grid-cols-3">
            {[
              { title: "Réactivité", desc: "Intervention sous 24h pour les urgences plomberie.", icon: "/icon-fast.png" },
              { title: "Rigueur", desc: "Respect strict des normes DTU et certifications en vigueur.", icon: "/icon-qualite.png" },
              { title: "Transparence", desc: "Devis détaillés et conseils personnalisés avant travaux.", icon: "/icon-notation.png" }
            ].map((item, i) => (
                <div
                    key={i}
                    className={`p-10 flex flex-col items-center text-center ${i !== 2 ? 'border-b md:border-b-0 md:border-r border-slate-200' : ''}`}
                >
                  <CardEngagement
                      title={item.title}
                      description={item.desc}
                      imageUrl={item.icon}
                  />
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};