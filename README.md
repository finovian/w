# WealthUp | Professional Financial Roadmap Dashboard

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

## 💎 Component Strategy

The UI is decomposed into specialized, reusable modules:
- **`ScoreGauge`**: A custom-engineered SVG arc that visualizes the WealthUp score with mathematical precision.
- **`ScoreBreakdown`**: A modular grid displaying individual financial health metrics.
- **`Step1Card`**: An interactive state-managed component for user investment commitments.
- **`LockedStepCard`**: A reusable template for roadmap progression, emphasizing user flow.
- **`TrajectoryCard`**: A comparison module highlighting current vs. potential financial outcomes.

## 🔍 SEO & Metadata Strategy

WealthUp is optimized for search engines and social sharing:
- **Server-Side Metadata**: Leveraging Next.js `Metadata` API for dynamic title and description injection.
- **OpenGraph & Twitter Cards**: Pre-configured for high-impact social media visibility.
- **Semantic HTML**: Extensive use of `<article>`, `<section>`, and `aria-labels` to ensure accessibility (A11y) and SEO crawler compatibility.
- **Font Optimization**: Utilizing `next/font` for zero-layout-shift (CLS) performance.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons/Images**: Next.js Image Optimization
- **Deployment**: Vercel Ready

## 🏁 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm / pnpm / yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd wealthup-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📈 Optimization & Performance

- **Zero CSS Bloat**: Strictly adheres to the established design system without redundant style overrides.
- **Mathematical Utilities**: Isolated SVG path calculations into pure functions for testability.
- **Type Safety**: 100% TypeScript coverage ensuring a bug-free development experience.

---

*WealthUp - Empowering your financial future through data-driven insights.*
