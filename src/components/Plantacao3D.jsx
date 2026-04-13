"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra o plugin no lado do cliente
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Plantacao3D() {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Força o preload dos metadados
        video.load();

        const setupScrollAnimation = () => {
            // Precisamos da duração do vídeo para calcular os frames exatos
            if (isNaN(video.duration)) {
                return;
            }

            // ScrollTrigger para controlar os frames (currentTime) do vídeo
            // Utilizamos o próprio container alto h-[400vh] para ter bastante espaço de scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top", // Inicia quando o topo do container bater no topo da tela
                    end: "bottom bottom", // Termina quando o fundo do container bater no fundo da tela
                    scrub: 1.5, // Scrub maior garante um "delay" macio, deixando a animação muito mais fluida
                }
            });

            // Animação 1: Controle do vídeo usando um proxy para evitar sobrecarregar o decodificador do navegador
            // A atualização ocorre num frame rate ideal (aproximadamente 30fps) simulando keyframes, o que reduz bastante os travamentos
            const proxy = { time: 0 };
            tl.to(proxy, {
                time: video.duration || 1,
                ease: "none",
                onUpdate: () => {
                    // Atualiza apenas se o delta for maior que ~0.033s (evita micro-updates pesados)
                    if (Math.abs(video.currentTime - proxy.time) > 0.033) {
                        video.currentTime = proxy.time;
                    }
                }
            }, 0);

            // Animação 2 (Opcional): Animação suave para os textos da frente
            if (overlayRef.current) {
                tl.fromTo(
                    overlayRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: video.duration * 0.2, ease: "power2.out" },
                    0
                );

                tl.to(
                    overlayRef.current,
                    { opacity: 0, y: -50, duration: video.duration * 0.2, ease: "power2.in" },
                    video.duration * 0.8 // Esconde suavemente no final do scroll
                );
            }

            // Reinicia os cálculos de height responsivo no GSAP
            ScrollTrigger.refresh();
        };

        // Handler para disparar animação apenas quando o metadado (e a tag duration) estiverem prontos
        if (video.readyState >= 1) {
            setupScrollAnimation();
        } else {
            video.addEventListener('loadedmetadata', setupScrollAnimation);
        }

        // Cleanup: mata os triggers na desmontagem do componente (previne leaks de SSR e navegação)
        return () => {
            video.removeEventListener('loadedmetadata', setupScrollAnimation);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        // Seção super alta (4 telas de altura) como trilho para o scroll do usuário
        <section
            ref={containerRef}
            className="relative w-full h-[500vh] bg-white"
        >
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-white px-4 md:px-8">

                <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-black">
                    {/* Video manipulado pelo GSAP para "scrubbar" os frames */}
                    <video
                        ref={videoRef}
                        src="/video/plantacao3d.mp4"
                        className="w-full h-full object-cover opacity-90"
                        muted
                        playsInline
                        preload="auto"
                    />

                    {/* Texts - ganham movimento parallax/fade amarrados ao mesmo ScrollTrigger */}
                    <div
                        ref={overlayRef}
                        className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20 pointer-events-none"
                    >
                        <div className="bg-cpa-900/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl border border-cpa-800/50 text-center pointer-events-auto">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#adebaf]">
                                Tecnologia no Campo
                            </h2>
                            <p className="text-base md:text-xl text-white/95 font-light">
                                Acompanhe a revolução do agronegócio em cada detalhe da safra, do plantio à colheita.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}