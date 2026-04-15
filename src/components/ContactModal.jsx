"use client";

import { useEffect, useRef } from "react";

export default function ContactModal() {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Fecha se clicar fora da modal (no backdrop)
    const handleClickOutside = (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    };

    dialog.addEventListener("click", handleClickOutside);
    return () => dialog.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <dialog
      id="contact-modal"
      ref={dialogRef}
      className="backdrop:bg-black/60 backdrop:backdrop-blur-sm rounded-2xl shadow-2xl p-0 m-auto open:animate-fade-in-up bg-transparent"
    >
      <div className="w-[90vw] max-w-md bg-white p-6 md:p-8 flex flex-col items-center rounded-2xl relative">

        {/* Botão Fechar Top-Right */}
        <button
          onClick={() => dialogRef.current?.close()}
          className="absolute top-4 right-4 text-gray-400 hover:bg-gray-100 hover:text-gray-900 rounded-full p-2 transition-colors"
          aria-label="Fechar modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Ícone ou Ilustração no Topo */}
        <div className="h-14 w-14 rounded-full bg-cpa-100 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-cpa-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">Falar com um Consultor</h3>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Escolha o melhor canal para conversarmos sobre como aumentar a produtividade e a rentabilidade da sua propriedade.
        </p>

        <div className="flex flex-col gap-3 w-full">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5567998050521"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 rounded-xl border border-gray-200 bg-white hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all shadow-sm group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-gray-900 group-hover:text-[#25D366] transition-colors leading-tight">WhatsApp</p>
              <p className="text-xs text-gray-500 mt-0.5">Resposta rápida em instantes</p>
            </div>
          </a>

          {/* Telefone */}
          <a
            href="tel:+556734228119"
            className="flex items-center gap-4 w-full p-4 rounded-xl border border-gray-200 bg-white hover:border-cpa-600 hover:bg-cpa-50 transition-all shadow-sm group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cpa-100 text-cpa-700 group-hover:bg-cpa-600 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.265-3.965-6.861-6.861l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-gray-900 group-hover:text-cpa-700 transition-colors leading-tight">Ligação Direta</p>
              <p className="text-xs text-gray-500 mt-0.5">Fale diretamente com os consultores</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:contato@cpa-agro.com.br"
            className="flex items-center gap-4 w-full p-4 rounded-xl border border-gray-200 bg-white hover:border-cpa-600 hover:bg-cpa-50 transition-all shadow-sm group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cpa-100 text-cpa-700 group-hover:bg-cpa-600 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-gray-900 group-hover:text-cpa-700 transition-colors leading-tight">E-mail Corporativo</p>
              <p className="text-xs text-gray-500 mt-0.5">Para propostas e agendamentos longos</p>
            </div>
          </a>
        </div>
      </div>
    </dialog>
  );
}
