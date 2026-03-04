import React from "react";

// I added English comments only where logic might be unclear as requested.
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND SECTION */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Matoussi <span className="text-blue-500">Plomberie</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Expert en solutions de plomberie, multi-services et dépannage d'urgence à Nantes.
              Une intervention certifiée pour un confort durable.
            </p>
            {/* Trust Badges moved here for better vertical flow */}
            <div className="flex flex-wrap gap-2 pt-2">
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-[0.2em] text-white uppercase">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                "Accueil",
                "Nos services",
                "Contactez-nous",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-blue-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-[0.2em] text-white uppercase">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-blue-500">📍</span>
                <span>Nantes et Loire-Atlantique</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span>
                <a
                  href="tel:0687780794"
                  className="transition hover:text-white"
                >
                  06 87 78 07 94
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span>
                <a
                  href="mailto:matoussiplomberiemultiservices@gmail.com"
                  className="transition hover:text-white"
                >
                  matoussiplomberiemultiservices@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* OPENING HOURS OR SECONDARY INFO */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-[0.2em] text-white uppercase">
              Disponibilité
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Intervention d'urgence 24h/7j pour les fuites majeures. <br />
            </p>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="group mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
            {/* Grayscale filter that clears on hover for a premium effect */}
            <iframe
              title="Localisation Matoussi Plomberie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86684.5121287903!2d-1.6300435372436417!3d47.23812555627685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee81f0a8a3d1%3A0x40d3542daa351d0!2sNantes!5e0!3m2!1sfr!2sfr!4v1700000000000"
              className="h-[300px] w-full border-0 contrast-[1.1] grayscale transition-all duration-500 group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row">
          <p>© {currentYear} Matoussi Plomberie. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="transition hover:text-white">
              CGV
            </a>
            <a href="#" className="transition hover:text-white">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>

      {/* FLOATING CALL BUTTON */}
      <a
        href="tel:0687780794"
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 md:hidden"
        aria-label="Appeler maintenant"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </footer>
  );
};
