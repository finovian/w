import { ScoreBarItem } from "../types";

export function ScoreBarRow({ item }: { item: ScoreBarItem }) {
  return (
    <div className="flex flex-col items-start gap-3 w-[219.33px] flex-none flex-grow">
      <div className="flex flex-row justify-between items-center w-full">
        <span className="font-['Urbanist'] font-bold text-[16px] leading-[19px] text-[#294F7C]">
          {item.label}
        </span>
        <span className="font-['Urbanist'] font-light text-[14px] leading-[17px] text-[#294F7C]">
          {item.score} / {item.max}
        </span>
      </div>
      <div className="relative w-full h-[16px]">
        <div
          className="absolute inset-0 rounded-[30px] opacity-80"
          style={{ background: "#F7F7F7", boxShadow: "inset 0px 0px 4px rgba(0,0,0,0.08)" }}
        />
        <div
          className="absolute top-0 left-0 h-[16px] rounded-[30px] z-10"
          style={{ width: `${item.barWidth}px`, background: item.barGradient }}
        />
      </div>
    </div>
  );
}
