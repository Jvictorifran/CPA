"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
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
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--cpa-green-700) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative gradient blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cpa-100/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cpa-50/60 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div
              data-animate
              className="opacity-0 inline-flex items-center gap-2 rounded-full bg-cpa-50 border border-cpa-200 px-4 py-1.5 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-cpa-500 animate-pulse" />
              <span className="text-xs font-medium text-cpa-700 tracking-wide uppercase">
                Desde 2007 no agronegócio
              </span>
            </div>

            <h1
              data-animate
              className="opacity-0 delay-100 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              Soluções que fazem o{" "}
              <span className="relative">
                <span className="relative z-10 text-cpa-700">campo crescer</span>
                <span className="absolute bottom-1 left-0 right-0 z-0 h-3 bg-cpa-100 rounded-sm" />
              </span>
            </h1>

            <p
              data-animate
              className="opacity-0 delay-200 mt-6 text-lg leading-relaxed text-gray-500 md:text-xl"
            >
              Desde 2007 desenvolvendo as melhores soluções para custeio
              agrícola e aumento da produtividade do seu plantio.
            </p>

            {/* CTAs */}
            <div
              data-animate
              className="opacity-0 delay-300 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contato"
                id="cta-hero-primary"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cpa-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cpa-700/25
                  transition-all duration-300 hover:bg-cpa-600 hover:shadow-xl hover:shadow-cpa-600/30 hover:-translate-y-0.5
                  animate-pulse-glow"
              >
                Solicitar Consultoria
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#servicos"
                id="cta-hero-secondary"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-cpa-200 bg-white px-8 py-4 text-base font-semibold text-cpa-700
                  transition-all duration-300 hover:border-cpa-400 hover:bg-cpa-50 hover:-translate-y-0.5"
              >
                Ver Serviços
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div
              data-animate
              className="opacity-0 delay-400 mt-12 flex items-center gap-8 border-t border-gray-100 pt-8"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-cpa-700">18+</p>
                <p className="text-xs text-gray-400 font-medium">Anos de experiência</p>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-cpa-700">500+</p>
                <p className="text-xs text-gray-400 font-medium">Clientes atendidos</p>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-cpa-700">98%</p>
                <p className="text-xs text-gray-400 font-medium">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            data-animate
            className="opacity-0 delay-200 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cpa-900/10">
              {/* Placeholder image — replace with actual client photo */}
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80"
                alt="Vista aérea de plantação agrícola com fileiras verdes — Representação da consultoria CPA"
                className="w-full h-auto aspect-[4/3] object-cover"
                loading="eager"
                width={800}
                height={600}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cpa-900/20 via-transparent to-transparent" />
            </div>
            {/* Floating card decoration */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg shadow-black/10 border border-gray-100 md:-bottom-6 md:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cpa-100">
                  <svg className="h-5 w-5 text-cpa-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Produtividade</p>
                  <p className="text-xs text-cpa-600">+35% em média</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
