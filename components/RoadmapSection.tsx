import { Step1Card } from "./Step1Card";
import { LockedStepCard } from "./LockedStepCard";

export function RoadmapSection() {
  return (
    <section
      aria-labelledby="roadmap-heading"
      className="flex flex-col items-start gap-7 p-4 md:p-6 w-full max-w-[1307px] min-h-[502px] rounded-[20px]"
      style={{ background: "#F8FAFC", boxShadow: "0px 0px 15px rgba(74, 144, 226, 0.5)" }}
    >
      <div className="flex flex-row items-center gap-8 w-full h-auto">
        <h2 id="roadmap-heading" className="font-['Urbanist'] font-normal text-[20px] md:text-[24px] leading-tight md:leading-[29px] text-[#294F7C] w-full max-w-[542px]">
          Your personalized roadmap to{" "}
          <span className="font-bold">70+ WealthUp</span> score
        </h2>
      </div>

      <div className="flex flex-row flex-wrap items-start gap-5 w-full h-auto">
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
