# WealthUp | Professional Financial Roadmap Dashboard

![WealthUp Dashboard Preview](https://storage.googleapis.com/advor/chat/694a937fb7a600427c5f422a/2026/feb/26/chat-kfkhdtftcur8.png)

WealthUp is a high-performance, production-ready financial wellness dashboard built with **Next.js 15** and **TypeScript**. It provides users with a personalized roadmap to financial independence, featuring a dynamic wealth score gauge, detailed breakdowns, and interactive investment steps.

## 🚀 Architectural Vision: Scalability & Precision

This project has been meticulously refactored from a monolithic structure into a **decoupled, component-based architecture**. The primary goal was to ensure maximum scalability and maintainability while preserving the pixel-perfect UI/UX design.

### 🏗️ Directory Structure
```text
├── app/                # Next.js App Router (Pages & Layouts)
├── components/         # Atomic & Molecular UI Components
├── consts/             # Centralized Data & Configuration
├── types/              # Global TypeScript Interfaces
├── utils/              # Pure Logic & Mathematical Helpers
├── public/             # Static Assets (Images & SVGs)
└── tailwind.config.ts  # Design System Configuration
```

## ⚡ Performance Excellence

Performance isn't just a feature; it's a foundation. WealthUp is engineered for speed:

- **Core Web Vitals Optimized**:
  - **LCP (Largest Contentful Paint)**: Optimized via `next/image` and prioritized asset loading.
  - **CLS (Cumulative Layout Shift)**: Zero-shift font loading using `next/font`.
  - **FID (First Input Delay)**: Minimal main-thread blocking by isolating client-side state.
- **Hybrid Rendering**: Strategic use of Server Components for static content to reduce the JavaScript bundle sent to the client.
- **Mathematical Efficiency**: SVG paths for the score gauge are calculated using optimized pure functions, ensuring smooth rendering even on low-end devices.
- **Tree Shaking**: Modular architecture ensures that only the necessary code is bundled for each route.

## 💎 Component Strategy

The UI is decomposed into specialized, reusable modules:
- **`ScoreGauge`**: A custom-engineered SVG arc that visualizes the WealthUp score with mathematical precision.
- **`ScoreBreakdown`**: A modular grid displaying individual financial health metrics.
- **`Step1Card`**: An interactive state-managed component for user investment commitments.
- **`LockedStepCard`**: A reusable template for roadmap progression, emphasizing user flow.

## 🔍 SEO & Metadata Strategy

WealthUp is optimized for search engines and social sharing:
- **Server-Side Metadata**: Leveraging Next.js `Metadata` API for dynamic title and description injection.
- **OpenGraph & Twitter Cards**: Pre-configured for high-impact social media visibility.
- **Semantic HTML**: Extensive use of `<article>`, `<section>`, and `aria-labels` to ensure accessibility (A11y) and SEO crawler compatibility.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons/Images**: Next.js Image Optimization

## 🏁 Getting Started

### Installation

1. **Clone and Install:**
   ```bash
   git clone <repository-url>
   npm install
   ```

2. **Run Development:**
   ```bash
   npm run dev
   ```

---

*WealthUp - Empowering your financial future through data-driven insights.*
