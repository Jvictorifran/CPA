"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  {
    id: "planejamento-safra",
    title: "Planejamento de Safra",
    description:
      "Estruturação completa do ciclo produtivo, da escolha da semente à logística de colheita.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: "gestao-insumos",
    title: "Gestão de Insumos",
    description:
      "Otimização do uso de fertilizantes e defensivos para garantir eficiência e sustentabilidade financeira.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    id: "analise-solo",
    title: "Análise de Solo e Fertilidade",
    description:
      "Diagnósticos precisos para que cada nutriente aplicado se transforme em produtividade.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    id: "monitoramento-relatorios",
    title: "Monitoramento e Relatórios",
    description:
      "Acompanhamento constante com dados reais para correções rápidas durante a safra.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
];

export default function Services() {
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
    <section
      id="servicos"
      ref={sectionRef}
      className="section-padding bg-cpa-50/40"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            data-animate
            className="opacity-0 text-sm font-semibold uppercase tracking-widest text-cpa-600 mb-3"
          >
            O que fazemos
          </p>
          <h2
            data-animate
            className="opacity-0 delay-100 text-3xl font-bold text-gray-900 md:text-4xl"
          >
            Nossos Serviços
          </h2>
          <p
            data-animate
            className="opacity-0 delay-200 mt-4 text-lg text-gray-500 leading-relaxed"
          >
            Soluções completas para impulsionar o agronegócio com planejamento,
            tecnologia e excelência.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              id={service.id}
              data-animate
              className={`opacity-0 delay-${(idx + 1) * 100} group relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100
                transition-all duration-500 hover:shadow-xl hover:shadow-cpa-500/8 hover:-translate-y-1 hover:border-cpa-200`}
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cpa-100 text-cpa-700
                transition-all duration-300 group-hover:bg-cpa-700 group-hover:text-white group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-base text-gray-500 leading-relaxed">
                {service.description}
              </p>

              {/* Arrow link indicator */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cpa-600 opacity-0 translate-x-[-8px]
                transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                Saiba mais
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
