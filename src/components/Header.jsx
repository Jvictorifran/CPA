"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="CPA - Página inicial">
          <Image
            src="/assets/logo.png"
            alt="CPA — Consultoria e Planejamento em Agronegócio"
            width={160}
            height={52}
            className="h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-cpa-700
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cpa-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            id="cta-header"
            className="rounded-lg bg-cpa-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-cpa-700/20
              transition-all duration-300 hover:bg-cpa-600 hover:shadow-lg hover:shadow-cpa-600/30 hover:-translate-y-0.5
              focus-visible:ring-2 focus-visible:ring-cpa-400 focus-visible:ring-offset-2"
          >
            Solicitar Consultoria
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 mt-1.5 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 mt-1.5 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 border-t border-gray-100" : "max-h-0"
        }`}
        aria-label="Menu de navegação mobile"
      >
        <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-medium text-gray-700 rounded-lg hover:bg-cpa-50 hover:text-cpa-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-cpa-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-md
              transition-all hover:bg-cpa-600"
          >
            Solicitar Consultoria
          </a>
        </div>
      </nav>
    </header>
  );
}
