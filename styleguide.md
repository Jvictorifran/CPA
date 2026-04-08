# Styleguide — CPA Landing Page

## 🎨 Paleta de Cores

### Verdes Primários (extraídos da logo)

| Nome             | HEX       | Uso                             |
|------------------|-----------|---------------------------------|
| Green 900        | `#0d2e1f` | Footer background, texto dark   |
| Green 800        | `#123a2f` | Backgrounds secundários escuros |
| **Green 700**    | `#1a5240` | **Botões primários, headings**  |
| Green 600        | `#1f6b4f` | Textos de destaque, labels      |
| Green 500        | `#27875f` | Focus rings, ícones ativos      |
| **Green 400**    | `#38a169` | **CTA alternativo, hover**      |
| Green 300        | `#5cb97e` | Bordas hover, destaques         |
| Green 200        | `#8ed4a2` | Badges, chips                   |
| Green 100        | `#c6ecd3` | Backgrounds leves de cards      |
| Green 50         | `#eaf7ef` | Backgrounds de seção, badges    |

### Neutros

| Nome        | HEX       | Uso                          |
|-------------|-----------|------------------------------|
| White       | `#ffffff` | Background principal         |
| Gray 50     | `#f8faf9` | Background de seções         |
| Gray 100    | `#f1f3f2` | Dividers, backgrounds        |
| Gray 200    | `#e2e5e3` | Bordas de cards              |
| Gray 300    | `#c9ceca` | Bordas desabilitadas         |
| Gray 400    | `#9ca39e` | Texto terciário, captions    |
| Gray 500    | `#6b756d` | Texto secundário, subtítulos |
| Gray 600    | `#4a524c` | Texto corporal               |
| Gray 700    | `#333a35` | Texto enfatizado             |
| Gray 800    | `#1e2420` | Texto de headings            |
| **Gray 900**| `#0f1720` | **Texto primário (body)**    |

---

## 🔤 Tipografia

| Elemento  | Font Family | Tamanho (mobile → desktop) | Weight | Line-height |
|-----------|-------------|----------------------------|--------|-------------|
| h1        | Inter       | 2.25rem → 3.5rem          | 800    | 1.1         |
| h2        | Inter       | 1.875rem → 2.25rem        | 700    | 1.2         |
| h3        | Inter       | 1.25rem                   | 700    | 1.3         |
| Body      | Inter       | 1rem (16px)               | 400    | 1.625       |
| Body lg   | Inter       | 1.125rem → 1.25rem        | 400    | 1.625       |
| Caption   | Inter       | 0.75rem                   | 500    | 1.5         |
| Label     | Inter       | 0.875rem                  | 600    | 1.4         |
| Button    | Inter       | 0.875rem – 1rem           | 600    | 1           |

---

## 📐 Tokens de Espaçamento

Base: **4px (0.25rem)**

| Token | Valor | Uso                       |
|-------|-------|---------------------------|
| xs    | 4px   | Gaps mínimos              |
| sm    | 8px   | Padding interno leve      |
| md    | 16px  | Padding cards, margens    |
| lg    | 24px  | Seção interna             |
| xl    | 32px  | Gap entre cards           |
| 2xl   | 48px  | Separação de seções       |
| 3xl   | 64px  | Padding de seção (mobile) |
| 4xl   | 80px  | Padding de seção (desktop)|
| 5xl   | 112px | Padding de hero           |

---

## 🔘 Border Radius

| Token      | Valor  | Uso                     |
|------------|--------|-------------------------|
| sm         | 4px    | Chips, badges           |
| DEFAULT    | 6px    | Inputs, botões pequenos |
| md         | 8px    | Cards, containers       |
| lg         | 12px   | Botões primários        |
| xl         | 16px   | Cards grandes, imagens  |
| 2xl        | 24px   | Hero images             |
| full       | 9999px | Avatares, pills         |

---

## 🔲 Botões

### Primário

```html
<a class="rounded-xl bg-cpa-700 px-8 py-4 text-base font-semibold text-white
    shadow-lg shadow-cpa-700/25
    transition-all duration-300
    hover:bg-cpa-600 hover:shadow-xl hover:shadow-cpa-600/30 hover:-translate-y-0.5
    focus-visible:ring-2 focus-visible:ring-cpa-400 focus-visible:ring-offset-2">
  Solicitar Consultoria
</a>
```

**Estados:**

| Estado   | Background  | Shadow                  | Transform        |
|----------|-------------|-------------------------|-------------------|
| Normal   | `cpa-700`   | `shadow-lg cpa-700/25`  | —                 |
| Hover    | `cpa-600`   | `shadow-xl cpa-600/30`  | `translateY(-2px)`|
| Focus    | `cpa-700`   | ring-2 `cpa-400`        | —                 |
| Active   | `cpa-800`   | `shadow-md`             | `translateY(0)`   |

### Secundário (outline)

```html
<a class="rounded-xl border-2 border-cpa-200 bg-white px-8 py-4
    text-base font-semibold text-cpa-700
    transition-all duration-300
    hover:border-cpa-400 hover:bg-cpa-50 hover:-translate-y-0.5">
  Ver Serviços
</a>
```

### Header CTA (compacto)

```html
<a class="rounded-lg bg-cpa-700 px-6 py-2.5 text-sm font-semibold text-white
    shadow-md shadow-cpa-700/20
    transition-all duration-300
    hover:bg-cpa-600 hover:shadow-lg hover:shadow-cpa-600/30 hover:-translate-y-0.5">
  Solicitar Consultoria
</a>
```

---

## 🃏 Cards

### Card de Serviço

```html
<article class="group rounded-2xl bg-white p-8
    shadow-sm border border-gray-100
    transition-all duration-500
    hover:shadow-xl hover:shadow-cpa-500/8
    hover:-translate-y-1 hover:border-cpa-200">

  <!-- Icon container (troca de cor no hover) -->
  <div class="mb-6 flex h-14 w-14 items-center justify-center
      rounded-xl bg-cpa-100 text-cpa-700
      transition-all duration-300
      group-hover:bg-cpa-700 group-hover:text-white group-hover:scale-110">
    <!-- SVG icon -->
  </div>

  <h3 class="text-xl font-bold text-gray-900 mb-3">Título</h3>
  <p class="text-base text-gray-500 leading-relaxed">Descrição...</p>
</article>
```

---

## 🌊 Animações

| Nome             | Tipo           | Duração | Easing   | Uso                      |
|------------------|----------------|---------|----------|--------------------------|
| fadeInUp         | translateY(30) | 0.7s    | ease-out | Entrada de seções        |
| fadeInLeft       | translateX(-30)| 0.7s    | ease-out | Imagens à esquerda       |
| fadeInRight      | translateX(30) | 0.7s    | ease-out | Imagens à direita        |
| pulse-glow       | box-shadow     | 2.5s    | infinite | CTA primário do hero     |

Delays para stagger: `100ms`, `200ms`, `300ms`, `400ms`, `500ms`

---

## 📦 Imagens Placeholder (Unsplash)

| Local                | URL sugerida                                        | Sugestão de substituição            |
|----------------------|-----------------------------------------------------|--------------------------------------|
| Hero                 | `unsplash.com/photo-1625246333195-78d9c38ad449`     | Foto aérea da propriedade do cliente |
| Sobre                | `unsplash.com/photo-1574943320219-553eb213f72d`     | Equipe CPA ou reunião de campo       |

> ⚠️ **Substituir por fotos reais do cliente** antes de publicar. Usar formato WebP/AVIF para otimização.

---

## ♿ Acessibilidade

- `alt` descritivo em todas as imagens
- Contraste mínimo 4.5:1 para textos (WCAG AA)
- `focus-visible` com ring verde em todos os interativos
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- `aria-label` em links de navegação e botões de menu
- `aria-expanded` no menu mobile
