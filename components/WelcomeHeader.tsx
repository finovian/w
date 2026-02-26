import Image from "next/image";

export function WelcomeHeader({ name = "Ankit", age = 28 }: { name?: string; age?: number }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full min-h-[78px] gap-4 md:gap-1">
      <div className="flex flex-col px-2 items-start gap-1 w-full md:w-auto min-h-[78px]">
        <h1 className="w-full md:w-[293px] text-[#294F7C] font-['Inter'] font-normal text-[24px] md:text-[28px] leading-tight md:leading-[34px]">
          Good Morning, <span className="font-semibold">{name}!</span>
        </h1>
        <div className="relative w-full md:w-[293px] h-auto md:h-[40px]">
          <p className="md:absolute left-0 top-[6.5px] w-full md:w-[686px] text-[#294F7C] font-['Inter'] font-normal text-[18px] md:text-[22px] leading-tight md:leading-[27px] md:whitespace-nowrap">
            At <span className="font-semibold">{age}</span>, your income is strong, but your wealth efficiency is lagging.
          </p>
        </div>
      </div>
      <div
        className="flex flex-row items-center gap-2 px-5 pl-4 w-fit h-[48px] bg-[#E2FFE2] rounded-[80px] flex-shrink-0"
        style={{ boxShadow: "0px 2px 5.9px rgba(0,0,0,0.05)" }}
      >
        <div className="relative w-[24px] h-[24px] flex-shrink-0">
          <Image src="/assets/check.png" alt="" width={24} height={24} aria-hidden="true" />
        </div>
        <span className="text-[#098309] font-['Inter'] font-normal text-[16px] leading-[18px]">
          Verified Analysis
        </span>
      </div>
    </div>
  );
}
