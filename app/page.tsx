import { Metadata } from "next";
import { Header } from "../components/Header";
import { WelcomeHeader } from "../components/WelcomeHeader";
import { ScoreOverviewSection } from "../components/ScoreOverviewSection";
import { RoadmapSection } from "../components/RoadmapSection";

export const metadata: Metadata = {
  title: "WealthUp | Your Personalized Financial Roadmap",
  description: "Track your WealthUp score, build your safety net, and optimize your investments for a better financial future.",
};

export default function WealthUpPage() {
  return (
    <div className="min-h-screen pb-16 bg-gradient-to-br from-[#ECF4FB] to-[#F8FAFC] font-['Urbanist',sans-serif]">
      <Header />

      <main className="flex flex-col items-start gap-8 w-[1307px] mx-auto mt-[55px]">
        <WelcomeHeader name="Ankit" age={28} />
        <ScoreOverviewSection />
        <RoadmapSection />
      </main>
    </div>
  );
}
