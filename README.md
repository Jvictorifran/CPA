# CPA — Consultoria e Planejamento em Agronegócio

Landing page profissional para a CPA, construída com **Next.js 15** (App Router) + **Tailwind CSS v4**.

![CPA Logo](public/assets/logo.png)

## 🚀 Quick Start

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
# → Abre em http://localhost:3000

# 3. Build de produção
npm run build

# 4. Preview do build
npm start
```

## 📁 Estrutura do Projeto

```
cpa-landing/
├── public/
│   └── assets/
│       └── logo.png              # Logo da CPA
├── src/
│   ├── app/
│   │   ├── globals.css           # Design system (Tailwind + tokens)
│   │   ├── layout.js             # Layout raiz + SEO metadata
│   │   └── page.js               # Página principal
│   └── components/
│       ├── Header.jsx            # Header fixo responsivo
│       ├── Hero.jsx              # Hero com CTAs e trust indicators
│       ├── Services.jsx          # 3 Cards de serviços
│       ├── About.jsx             # Sobre + benefícios
│       └── Footer.jsx            # Footer com contato e social
├── wireframe/
│   └── top-hero.svg              # Wireframe mobile → desktop
├── styleguide.md                 # Paleta, tipografia, tokens
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

## 🎨 Design

- **Paleta:** Tons de verde derivados da logo (`#1a5240`, `#1f6b4f`, `#38a169`)
- **Fundo:** Branco predominante (`#ffffff`)
- **Fonte:** Inter (Google Fonts via CSS import)
- **Estilo:** Clean, white-space generoso, cards com hover suave

Consulte [`styleguide.md`](./styleguide.md) para detalhes completos.

## 🏗️ Seções

| Seção       | Descrição                                              |
|-------------|--------------------------------------------------------|
| **Header**  | Logo + nav + CTA fixo com blur no scroll               |
| **Hero**    | Headline, subheadline, CTAs, imagem, trust indicators  |
| **Serviços**| 3 cards: Consultoria, Planejamento, Gestão             |
| **Sobre**   | História (2007), 3 benefícios com ícones               |
| **Footer**  | CTA final, contato, redes sociais, copyright           |

## 📱 Responsividade

- **Mobile-first** com breakpoints `md` (768px) e `lg` (1024px)
- Hero: coluna única (mobile) → 2 colunas (desktop)
- Cards de serviço: empilhados → 3 colunas
- Header: hamburger menu → nav inline

## 🖼️ Imagens

As imagens atuais são **placeholders do Unsplash**. Para produção:

1. Substitua por fotos reais da propriedade/equipe do cliente
2. Converta para WebP/AVIF para otimização
3. Use `next/image` com `sizes` para responsive loading

## ♿ Acessibilidade

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- `alt` descritivo em todas as imagens
- `aria-label` / `aria-expanded` no menu mobile
- Focus visible com ring verde
- Contraste WCAG AA verificado

## 🚀 Deploy

### Vercel (recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Ou conecte o repositório GitHub no https://vercel.com/new
```

### Netlify

```bash
# Build command: npm run build
# Publish directory: .next
# Ou use @netlify/plugin-nextjs
```

## 📝 Personalização

1. **Contato:** Edite e-mail e telefone em `src/components/Footer.jsx`
2. **Redes Sociais:** Atualize os hrefs em `Footer.jsx`
3. **Conteúdo:** Textos diretamente nos componentes
4. **Cores:** Modifique as variáveis CSS em `src/app/globals.css`
5. **SEO:** Atualize metadata em `src/app/layout.js`

---

Feito com ❤️ para CPA — Consultoria e Planejamento em Agronegócio
