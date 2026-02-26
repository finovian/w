import { scoreItems } from "../consts/data";
import { ScoreBarRow } from "./ScoreBarRow";

export function ScoreBreakdown() {
  return (
    <div className="flex flex-col items-start gap-3 w-[746px]">
      <h3 className="font-['Urbanist'] font-normal text-[20px] leading-[24px] text-[#294F7C]">Your score breakdown</h3>
      <div className="flex flex-col items-start gap-5 w-[746px]">
        <div className="flex flex-row items-center pl-2 gap-5 w-[746px]">
          <ScoreBarRow item={scoreItems[0]} />
          <div className="flex-none w-[1px] h-[38px] bg-[#D4D4D4]" />
          <ScoreBarRow item={scoreItems[1]} />
          <div className="flex-none w-[1px] h-[38px] bg-[#D4D4D4]" />
          <ScoreBarRow item={scoreItems[2]} />
        </div>
        <div className="flex flex-row items-center pl-2 gap-5 w-[746px]">
          <ScoreBarRow item={scoreItems[3]} />
          <div className="flex-none w-[1px] h-[38px] bg-[#D4D4D4]" />
          <ScoreBarRow item={scoreItems[4]} />
          <div className="flex-none w-[1px] h-[38px] bg-[#D4D4D4]" />
          <ScoreBarRow item={scoreItems[5]} />
        </div>
      </div>
    </div>
  );
}
