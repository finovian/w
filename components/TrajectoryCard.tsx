export function TrajectoryCard() {
  return (
    <div className="flex flex-col items-start gap-3 w-[484px]">
      <h3 className="font-['Urbanist'] font-normal text-[20px] leading-[24px] text-[#294F7C]">
        Financial independence age
      </h3>
      <div className="relative flex flex-row items-center w-[484px] h-[131px]">
        <div className="flex flex-col justify-center items-center gap-[10px] w-[210px] h-[131px] rounded-l-[8px] z-0" style={{ background: "#F9F9F9", borderWidth: "1px 0px 1px 1px", borderStyle: "solid", borderColor: "#FFFFFF", boxShadow: "0px 0px 24px rgba(74,144,226,0.25)", padding: "12px 8px" }}>
          <span className="font-['Urbanist'] font-semibold text-[14px] leading-[17px] text-center tracking-[0.05em] text-[#828282]">Current Trajectory</span>
          <span className="font-['Urbanist'] font-bold text-[30px] leading-[36px] text-center tracking-[0.05em] text-[#616161]">65</span>
          <span className="font-['Urbanist'] font-normal text-[12px] leading-[14px] text-center tracking-[0.05em] text-[#7C7C7C] w-[150px]">Based on current savings you have</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] w-[210px] h-[125px] rounded-r-[8px] z-[1]" style={{ background: "#EAF4FB", border: "1px solid #FFFFFF", boxShadow: "0px 0px 24px rgba(74,144,226,0.25)", padding: "12px 8px" }}>
          <span className="font-['Urbanist'] font-semibold text-[14px] leading-[17px] text-center tracking-[0.05em] text-[#307ED9]">Your Potential</span>
          <span className="font-['Urbanist'] font-bold text-[30px] leading-[36px] text-center tracking-[0.05em] text-[#294F7C]">38</span>
          <span className="font-['Urbanist'] font-normal text-[12px] leading-[14px] text-center tracking-[0.05em] text-[#294F7C] w-[163px]">By following our personalized roadmap</span>
        </div>
        <div className="absolute z-[2] w-[1px] bg-[#DADADA]" style={{ height: "114px", left: "210px", top: "9px" }} />
        <div className="absolute z-[3] flex items-center" style={{ left: "130px", top: "44px" }}>
          <div className="flex items-center justify-center h-[28px] pl-3 pr-1" style={{ background: "#00BA00", borderRadius: "4px 0 0 4px", minWidth: "110px" }}>
            <span className="font-['Inter'] font-bold text-[11px] text-white whitespace-nowrap">✨ 27 years sooner !</span>
          </div>
          <div style={{ width: 0, height: 0, borderTop: "14px solid transparent", borderBottom: "14px solid transparent", borderLeft: "12px solid #00BA00" }} />
        </div>
      </div>
    </div>
  );
}
