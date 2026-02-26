import Image from "next/image";

export function WelcomeHeader({ name = "Ankit", age = 28 }: { name?: string; age?: number }) {
  return (
    <div className="flex flex-row justify-between items-center w-full h-[78px] gap-1">
      <div className="flex flex-col px-2 items-start gap-1 w-[293px] h-[78px]">
        <h1 className="w-[293px] h-[34px] text-[#294F7C] font-['Inter'] font-normal text-[28px] leading-[34px]">
          Good Morning, <span className="font-semibold">{name}!</span>
        </h1>
        <div className="relative w-[293px] h-[40px]">
          <p className="absolute left-0 top-[6.5px] w-[686px] h-[27px] text-[#294F7C] font-['Inter'] font-normal text-[22px] leading-[27px] whitespace-nowrap">
            At <span className="font-semibold">{age}</span>, your income is strong, but your wealth efficiency is lagging.
          </p>
        </div>
      </div>
      <div
        className="flex flex-row items-center gap-2 px-5 pl-4 w-[196px] h-[48px] bg-[#E2FFE2] rounded-[80px]"
        style={{ boxShadow: "0px 2px 5.9px rgba(0,0,0,0.05)" }}
      >
        <div className="relative w-[24px] h-[24px] flex-shrink-0">
          <Image src="/assets/check.png" alt="" width={24} height={24} aria-hidden="true" />
        </div>
        <span className="w-[140px] h-[18px] text-[#098309] font-['Inter'] font-normal text-[16px] leading-[18px]">
          Verified Analysis
        </span>
      </div>
    </div>
  );
}
