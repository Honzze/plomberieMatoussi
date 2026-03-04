import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-primary/5" />

      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
          {/* LEFT CONTENT */}
          <div className="flex w-full flex-col items-start lg:w-1/2">
            <span className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Plomberie & Multi-services à Nantes
            </span>

            <h1 className="text-4xl text-slate-800 leading-tight font-bold text-foreground sm:text-5xl">
              Matoussi Plomberie & Multi-services à{" "}
              <span className="text-primary">Nantes</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Technicien qualifié depuis 21 ans vous accompagnent pour tous vos projets de
              rénovation et de création. Intervention rapide à Nantes et dans
              ses alentours (Bouguenais, Rezé, Carquefou…).
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button href="mailto:matoussiplomberiemultiservices@gmail.com" className="rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-background shadow-md hover:opacity-90">
                Nous contacter
              </button>

              <Link
                  href="#services"
                  className="rounded-2xl border border-primary px-7 py-4 text-base font-semibold text-primary transition hover:bg-primary hover:text-background inline-block"
              >
                Nos services
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full lg:w-1/2">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                className="h-full w-full object-cover"
                src="/bg-hero2.jpg"
                width={900}
                height={700}
                priority
                alt="Technicien Matoussi Plomberie intervenant à Nantes"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
