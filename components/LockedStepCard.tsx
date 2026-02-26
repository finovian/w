import { LockedStepCardProps } from "../types";

export function LockedStepCard({ stepNumber, title, description, buttonLabel, points }: LockedStepCardProps) {
  return (
    <article
      className="flex flex-col items-start justify-between gap-5 w-[405px] h-[397px] rounded-[20px]"
      aria-labelledby={`step-${stepNumber}-title`}
      style={{
        background: "#F6F6F6",
        border: "1px solid #DDDDDD",
        padding: "16px 20px",
      }}
    >
      <div className="flex flex-col items-start gap-3 w-[365px]">
        <span className="font-['Urbanist'] font-medium text-[12px] leading-[14px] tracking-[0.05em] text-[#696969]">
          Step {stepNumber}
        </span>
        <div className="flex flex-col items-start gap-1 w-[365px]">
          <h3 id={`step-${stepNumber}-title`} className="font-['Inter'] font-semibold text-[18px] leading-[22px] text-[#294F7C] w-full">
            {title}
          </h3>
          <span className="font-['Inter'] font-normal text-[12px] leading-[17px] text-gray-500 w-full">
            {description}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 w-[365px]">
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="relative flex flex-row justify-center items-center gap-[10px] w-full h-[54px] rounded-[90px] px-6 py-3"
          style={{
            background: "linear-gradient(90deg, #294F7C 0%, #4B90E2 100%)",
            opacity: 0.5,
          }}
        >
          <span className="font-['Inter'] font-semibold text-[14px] leading-[17px] text-white">
            {buttonLabel}
          </span>
          <div className="relative w-[70px] h-[30px]">
            <div
              className="absolute inset-0 rounded-[60px]"
              style={{ background: "#F8FAFC", border: "0.5px solid #00BA00" }}
            />
            <span
              className="absolute font-['Urbanist'] font-semibold text-[14px] leading-[17px] text-[#00BA00]"
              style={{ left: "50%", transform: "translateX(-50%)", top: "6px", whiteSpace: "nowrap" }}
            >
              +{points} pts
            </span>
          </div>
        </button>

        <div className="flex flex-row justify-center items-center gap-1">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M7 9V6.5C7 4.567 8.343 3 10 3C11.657 3 13 4.567 13 6.5V9M5 9H15C15.552 9 16 9.448 16 10V16C16 16.552 15.552 17 15 17H5C4.448 17 4 16.552 4 16V10C4 9.448 4.448 9 5 9Z"
              stroke="#8F8F8F"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-['Inter'] font-normal text-[14px] leading-[17px] text-[#4C4C4C]">
            Complete step 1 (critical) to unlock
          </span>
        </div>
      </div>
    </article>
  );
}
