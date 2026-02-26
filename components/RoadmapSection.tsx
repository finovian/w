import { Step1Card } from "./Step1Card";
import { LockedStepCard } from "./LockedStepCard";

export function RoadmapSection() {
  return (
    <section
      aria-labelledby="roadmap-heading"
      className="flex flex-col items-start gap-7 p-6 w-[1307px] h-[502px] rounded-[20px]"
      style={{ background: "#F8FAFC", boxShadow: "0px 0px 15px rgba(74, 144, 226, 0.5)" }}
    >
      <div className="flex flex-row items-center gap-8 w-[1259px] h-[29px]">
        <h2 id="roadmap-heading" className="font-['Urbanist'] font-normal text-[24px] leading-[29px] text-[#294F7C] w-[542px]">
          Your personalized roadmap to{" "}
          <span className="font-bold">70+ WealthUp</span> score
        </h2>
      </div>

      <div className="flex flex-row flex-wrap items-start gap-5 w-[1258px] h-[397px]">
        <Step1Card />
        <LockedStepCard
          stepNumber={2}
          title="Optimize investments"
          description="Invest regularly to build long-term wealth. Explore diversified mutual funds and asset allocation strategies tailored to your risk profile."
          buttonLabel="Begin Investing"
          points={12}
        />
        <LockedStepCard
          stepNumber={3}
          title="Maximize growth"
          description="Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient investment vehicles."
          buttonLabel="Analyse your Mutual Funds"
          points={8}
        />
      </div>
    </section>
  );
}
