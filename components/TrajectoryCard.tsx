export function TrajectoryCard() {
  return (
    <div className="flex flex-col items-start gap-3 w-full max-w-[484px]">
      <h3 className="font-['Urbanist'] font-normal text-[18px] md:text-[20px] leading-tight md:leading-[24px] text-[#294F7C]">
        Financial independence age
      </h3>
      <div className="relative flex flex-row items-center w-full max-w-[484px] h-[131px]">
        <div className="flex flex-col justify-center items-center gap-[10px] flex-1 h-[131px] rounded-l-[8px] z-0" style={{ background: "#F9F9F9", borderWidth: "1px 0px 1px 1px", borderStyle: "solid", borderColor: "#FFFFFF", boxShadow: "0px 0px 24px rgba(74,144,226,0.25)", padding: "12px 8px" }}>
          <span className="font-['Urbanist'] font-semibold text-[12px] md:text-[14px] leading-tight text-center tracking-[0.05em] text-[#828282]">Current Trajectory</span>
          <span className="font-['Urbanist'] font-bold text-[24px] md:text-[30px] leading-tight text-center tracking-[0.05em] text-[#616161]">65</span>
          <span className="font-['Urbanist'] font-normal text-[10px] md:text-[12px] leading-tight text-center tracking-[0.05em] text-[#7C7C7C] w-full max-w-[150px]">Based on current savings you have</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] flex-1 h-[125px] rounded-r-[8px] z-[1]" style={{ background: "#EAF4FB", border: "1px solid #FFFFFF", boxShadow: "0px 0px 24px rgba(74,144,226,0.25)", padding: "12px 8px" }}>
          <span className="font-['Urbanist'] font-semibold text-[12px] md:text-[14px] leading-tight text-center tracking-[0.05em] text-[#307ED9]">Your Potential</span>
          <span className="font-['Urbanist'] font-bold text-[24px] md:text-[30px] leading-tight text-center tracking-[0.05em] text-[#294F7C]">38</span>
          <span className="font-['Urbanist'] font-normal text-[10px] md:text-[12px] leading-tight text-center tracking-[0.05em] text-[#294F7C] w-full max-w-[163px]">By following our personalized roadmap</span>
        </div>
        <div className="absolute z-[2] w-[1px] bg-[#DADADA]" style={{ height: "114px", left: "50%", top: "9px" }} />
        <div className="absolute z-[3] flex items-center" style={{ left: "calc(50% - 80px)", top: "44px" }}>
          <div className="flex items-center justify-center h-[24px] md:h-[28px] pl-3 pr-1 min-w-[90px] md:min-w-[110px]" style={{ background: "#00BA00", borderRadius: "4px 0 0 4px" }}>
            <span className="font-['Inter'] font-bold text-[9px] md:text-[11px] text-white whitespace-nowrap">✨ 27 years sooner !</span>
          </div>
          <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "10px solid #00BA00" }} />
        </div>
      </div>
    </div>
  );
}
