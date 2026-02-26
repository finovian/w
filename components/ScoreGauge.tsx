import Image from "next/image";
import { getArcPath } from "../utils/math";

export function ScoreGauge() {
  const arcPath = getArcPath(43, 100, 177, 199, 199, 22, 199);

  return (
    <div className="relative w-[414px] h-[313px] flex-none" role="img" aria-label="Current WealthUp score is 43, better than 46 percent of peers">
      <div
        className="absolute pointer-events-none"
        style={{
          width: "516px", height: "449px", left: "-110px", top: "-169px",
          background: "#FF6A6A", opacity: 0.06, filter: "blur(67px)",
          transform: "rotate(-8.26deg)", borderRadius: "50%",
        }}
      />
      <div
        className="absolute rounded-[16px]"
        style={{
          width: "398px", height: "221px", left: "7px", top: "52px",
          background: "#FFFFFF", boxShadow: "0px 0px 28px rgba(209, 230, 255, 0.6)",
        }}
      />
      <svg className="absolute" style={{ left: "7px", top: "52px" }} width="398" height="221" viewBox="0 0 398 221" fill="none">
        <path d={`M 22 199 A 177 177 0 0 1 376 199`} stroke="#F0F0F0" strokeWidth="22" strokeLinecap="round" fill="none" />
        <defs>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6969" />
            <stop offset="60%" stopColor="#FF9A5C" />
            <stop offset="100%" stopColor="#FFBC70" />
          </linearGradient>
        </defs>
        {/* End point is derived from score percentage on a semicircle. */}
        <path
          d={arcPath}
          stroke="url(#arcGrad)" strokeWidth="22" strokeLinecap="round" fill="none"
        />
      </svg>
      <Image
        src="/assets/Line.png"
        alt=""
        width={22}
        height={22}
        className="absolute pointer-events-none"
        style={{ left: "275px", top: "80px" }}
        aria-hidden="true"
      />
      <span className="absolute font-['Inter'] font-bold text-[80px] leading-[97px] text-[#FF6A6A]" style={{ left: "147px", top: "114px" }}>
        43
      </span>
      <span className="absolute font-['Urbanist'] font-semibold text-[19px] leading-[23px] text-center tracking-[0.05em] text-[#294F7C]" style={{ width: "227px", left: "92px", top: "214px" }}>
        Current WealthUp Score
      </span>
      <div className="absolute flex flex-col items-center" style={{ left: "196px", top: "17px" }}>
        <div className="bg-white rounded-[8px] px-3 py-2" style={{ boxShadow: "0px 8px 16px -2px rgba(27,33,44,0.12)", width: "192px" }}>
          <p className="font-['Inter'] font-normal text-[14px] leading-[20px] text-[#4B4B4B]">
            You need <span className="font-bold text-[#294F7C]">+27 points</span> to reach a <span className="font-bold text-[#00BA00]">good</span> score of <span className="font-bold text-[#294F7C]">70</span>
          </p>
        </div>
        <div aria-hidden="true" style={{ width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "10px solid white", filter: "drop-shadow(0px 4px 4px rgba(27,33,44,0.06))" }} />
      </div>
      <span className="absolute font-['Urbanist'] italic font-normal text-[16px] leading-[19px] text-[#48688E]" style={{ width: "174px", left: "121px", top: "292px" }}>
        Better than <strong className="not-italic">46%</strong> of peers
      </span>
    </div>
  );
}
