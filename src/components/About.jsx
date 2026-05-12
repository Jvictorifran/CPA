"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const BENEFITS = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Experiência Comprovada",
    description:
      "Mais de 18 anos atuando no agronegócio brasileiro, com casos de sucesso em diversas culturas e regiões do país.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Equipe Especializada",
    description:
      "Profissionais com formação em agronomia, prontos para atender suas demandas.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Resultados Mensuráveis",
    description:
      "Relatórios claros e indicadores precisos para que você acompanhe o retorno de cada decisão tomada.",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image side */}
          <div data-animate className="opacity-0 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full aspect-[7/5]">
              <Image
                src="/assets/imagens/campo.jpeg"
                alt="Reunião de consultores agrícolas analisando dados de produção e planejamento"
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cpa-900/15 via-transparent to-transparent" />
            </div>
            {/* Year badge */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 rounded-2xl bg-cpa-700 px-5 py-4 text-center shadow-lg shadow-cpa-800/30">
              <p className="text-3xl font-extrabold text-white">2007</p>
              <p className="text-xs font-medium text-cpa-200 mt-0.5">Fundação</p>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <p
              data-animate
              className="opacity-0 text-sm font-semibold uppercase tracking-widest text-cpa-600 mb-3"
            >
              Sobre nós
            </p>
            <h2
              data-animate
              className="opacity-0 delay-100 text-3xl font-bold text-gray-900 md:text-4xl"
            >
              Por que escolher a CPA?
            </h2>
            <p
              data-animate
              className="opacity-0 delay-200 mt-5 text-lg text-gray-500 leading-relaxed"
            >
              Fundada em 2007, a CPA nasceu da paixão pelo agronegócio e da
              vontade de transformar a realidade do produtor rural brasileiro.
              Combinamos conhecimento técnico, visão estratégica e tecnologia
              para entregar resultados consistentes.
            </p>

            {/* Benefits list */}
            <div className="mt-10 space-y-6">
              {BENEFITS.map((benefit, idx) => (
                <div
                  key={benefit.title}
                  data-animate
                  className={`opacity-0 delay-${(idx + 2) * 100} flex gap-4 items-start group`}
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-cpa-50 text-cpa-600
                    transition-all duration-300 group-hover:bg-cpa-700 group-hover:text-white group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
