"use client";

import { useState, useEffect, useRef } from "react";

export default function LegalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(null);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    const handleOpen = (e) => {
      previousFocusRef.current = document.activeElement;
      setType(e.detail?.type || "termos");
      setIsOpen(true);
    };
    window.addEventListener("open-legal-modal", handleOpen);
    return () => window.removeEventListener("open-legal-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
        if (focusable?.length) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isTermos = type === "termos";

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      ref={modalRef}
      tabIndex={-1}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-cpa-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal */}
      <div className="relative flex flex-col w-full max-w-2xl max-h-[85vh] md:max-h-[80vh] rounded-2xl bg-white shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 id="legal-modal-title" className="text-xl md:text-2xl font-bold text-gray-900">
            {isTermos ? "Termos de Uso" : "Política de Privacidade"}
          </h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 flex-shrink-0"
            aria-label="Fechar"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="p-6 overflow-y-auto custom-scrollbar text-gray-600 text-sm md:text-base leading-relaxed space-y-5">
          {isTermos ? (
            <>
              <p>Bem-vindo ao site da <strong>CPA — Consultoria e Planejamento em Agronegócio</strong>. Ao acessar e utilizar este site, você concorda com os seguintes termos e condições:</p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">1. Objetivo do Site</h4>
              <p>O conteúdo deste site tem caráter estritamente informativo, destinado a apresentar os serviços de consultoria estratégica, planejamento financeiro e gestão de produção agrícola oferecidos pela CPA.</p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">2. Propriedade Intelectual</h4>
              <p>Todo o material, incluindo textos, gráficos, logotipos, imagens e design, é propriedade da CPA. É expressamente proibida a cópia, reprodução ou distribuição sem autorização prévia por escrito.</p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">3. Limitação de Responsabilidade</h4>
              <p>A CPA se esforça para manter as informações do site precisas e atualizadas. No entanto, a contratação de qualquer serviço de consultoria dependerá de contato direto, avaliação prévia e formalização de contrato específico. As informações aqui contidas não constituem oferta vinculativa.</p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">4. Alterações nos Termos</h4>
              <p>Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio. Recomendamos a leitura periódica desta seção.</p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">5. Foro</h4>
              <p>Fica eleito o foro da comarca da sede da empresa (Dourados - MS) para dirimir quaisquer controvérsias oriundas do uso deste site, regido pelas leis da República Federativa do Brasil.</p>
            </>
          ) : (
            <>
              <p>A <strong>CPA — Consultoria e Planejamento em Agronegócio</strong> preza pela sua privacidade e pela segurança dos seus dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">1. Coleta de Dados</h4>
              <p>Coletamos informações fornecidas voluntariamente por você ao entrar em contato conosco via e-mail ou WhatsApp, como nome, telefone e endereço de e-mail.</p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">2. Finalidade do Uso</h4>
              <p>Os dados coletados são utilizados exclusivamente para:<br/>
                - Responder às suas dúvidas ou solicitações de contato;<br/>
                - Enviar propostas ou orçamentos sobre nossos serviços;<br/>
                - Manter um histórico de atendimento ao cliente.
              </p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">3. Compartilhamento de Dados</h4>
              <p>A CPA não vende, aluga ou compartilha seus dados pessoais com terceiros para fins publicitários. O compartilhamento só ocorrerá mediante obrigação legal ou regulatória.</p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">4. Armazenamento e Segurança</h4>
              <p>Adotamos medidas de segurança técnicas e administrativas para proteger suas informações contra acessos não autorizados, perdas ou alterações.</p>
              
              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">5. Uso de Cookies</h4>
              <p>Nosso site pode utilizar cookies essenciais para melhorar o desempenho da página e entender, de forma anônima, estatísticas de acesso. Você pode ajustar as configurações do seu navegador para recusar cookies, se preferir.</p>

              <h4 className="font-bold text-gray-900 text-base mt-6 mb-2">6. Seus Direitos</h4>
              <p>Você tem o direito de solicitar o acesso, correção, atualização ou exclusão dos seus dados pessoais da nossa base. Para isso, entre em contato através do e-mail <strong>contato@cpa-agro.com.br</strong>.</p>
            </>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button 
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-cpa-700 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cpa-600"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
