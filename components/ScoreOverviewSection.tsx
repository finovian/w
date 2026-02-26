import { ScoreGauge } from "./ScoreGauge";
import { TrajectoryCard } from "./TrajectoryCard";
import { ScoreBreakdown } from "./ScoreBreakdown";

export function ScoreOverviewSection() {
  return (
    <section
      aria-labelledby="wealth-score-heading"
      className="relative flex flex-col items-start gap-7 p-4 md:p-6 w-full max-w-[1307px] min-h-[397px] rounded-[20px] overflow-hidden"
      style={{ background: "#F8FAFC", boxShadow: "0px 0px 15px rgba(74, 144, 226, 0.5)" }}
    >
      <h2 id="wealth-score-heading" className="sr-only">
        WealthUp score overview
      </h2>
      <div className="absolute pointer-events-none hidden md:block" style={{ width: "1440px", height: "1440px", left: "217px", top: "-570px", opacity: 0.1, transform: "rotate(27.4deg)", zIndex: 0 }}>
        <div className="absolute w-full h-full" style={{ background: "conic-gradient(from 180deg at 50% 50%, rgba(207,230,247,0.1) 0deg, rgba(74,144,226,0.5) 180deg, rgba(207,230,247,0.1) 360deg)", filter: "blur(50px)" }} />
      </div>
      <div className="absolute pointer-events-none hidden md:block" style={{ width: "1418.59px", height: "399.49px", left: "-113.66px", top: "114.49px", background: "#FFFFFF", opacity: 0.8, filter: "blur(22px)", transform: "rotate(6.26deg)", zIndex: 1 }} />

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-6 w-full h-auto lg:h-[349px]" style={{ zIndex: 2 }}>
        <ScoreGauge />

        <div className="flex flex-col justify-center items-start gap-8 w-full lg:w-[746px] h-auto lg:h-[349px]">
          <TrajectoryCard />
          <ScoreBreakdown />
        </div>
      </div>
    </section>
  );
}
