"use client";
import Image from "next/image";
import { useState } from "react";
import { commitOptions } from "../consts/data";

export function Step1Card() {
  const [selected, setSelected] = useState("₹500");
  const [customAmount, setCustomAmount] = useState("");

  return (
    <article
      className="flex flex-col items-start gap-5 w-full md:w-[405px] min-h-[397px] rounded-[20px] p-4"
      aria-labelledby="step-1-title"
      style={{
        background: "#FFFFFF",
        border: "1px solid #294F7C",
        boxShadow: "0px 0px 12px rgba(41, 79, 124, 0.15)",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div className="flex flex-col items-start gap-3 w-full">
        <span className="font-['Urbanist'] font-semibold text-[12px] leading-[14px] tracking-[0.05em] text-[#FF0000]">
          Step 1: Critical
        </span>
        <div className="flex flex-col items-start gap-1 w-full">
          <h3 id="step-1-title" className="font-['Inter'] font-semibold text-[16px] md:text-[18px] leading-tight md:leading-[22px] text-[#374E6A] w-full">
            Build your safety net (Emergency fund)
          </h3>
          <span className="font-['Inter'] font-normal text-[11px] md:text-[12px] leading-[1.4] text-gray-500 w-full">
            Ankit, avoid a potential 2-year setback. Build your emergency fund to be risk-free within the next 6 months.
          </span>
        </div>

        <div className="flex flex-row justify-center items-end gap-2 h-[23px]">
          <span className="font-['Urbanist'] font-semibold text-[12px] md:text-[14px] leading-tight text-[#374E6A]">
            I can commit to saving
          </span>
          <div
            className="flex items-center justify-center px-[6px] py-[3px] rounded-[4px] h-[23px]"
            style={{ background: "rgba(210, 227, 247, 0.5)" }}
          >
            <span className="font-['Urbanist'] font-semibold text-[12px] md:text-[14px] leading-tight text-[#294F7C]">
              {selected}
            </span>
          </div>
          <span className="font-['Urbanist'] font-semibold text-[12px] md:text-[14px] leading-tight text-[#374E6A]">
            monthly
          </span>
        </div>

        <div className="flex flex-row items-end gap-2 flex-wrap">
          {commitOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setSelected(opt)}
              className="flex items-start px-3 py-[6px] rounded-[4px] font-['Urbanist'] font-semibold text-[11px] md:text-[12px] leading-tight transition-all"
              style={
                selected === opt
                  ? { background: "#E6F2FF", border: "1px solid #294F7C", color: "#363636" }
                  : { background: "transparent", border: "1px solid #D9D9D9", color: "#585858" }
              }
            >
              {opt}
            </button>
          ))}

          <div className="relative flex items-center h-[21px] w-[80px] md:w-[87px]" style={{ borderBottom: "1px solid #294F7C" }}>
            <span className="font-['Urbanist'] font-semibold text-[11px] md:text-[12px] text-[#585858] absolute left-0 top-0">
              ₹
            </span>
            <label htmlFor="custom-amount" className="sr-only">
              Custom monthly savings amount in rupees
            </label>
            <input
              id="custom-amount"
              type="text"
              inputMode="numeric"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              aria-label="Custom monthly amount"
              className="absolute left-[13px] top-0 w-full h-[14px] bg-transparent outline-none font-['Urbanist'] font-normal text-[11px] md:text-[12px] leading-tight text-[#818181] placeholder:text-[#818181]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 w-full isolation-isolate">
        <span className="font-['Urbanist'] font-semibold text-[12px] md:text-[14px] leading-tight text-[#374E6A] z-0">
          Recommended Funds (Top performers)
        </span>

        <div className="relative flex flex-row items-start gap-2 w-full h-auto z-[1]">
          <div
            className="flex flex-row items-start gap-[10px] flex-1 h-[46px] rounded-[4px] p-2"
            style={{ border: "1px solid #D9D9D9" }}
          >
            <div className="w-[34px] h-[24px] bg-red-100 rounded flex items-center justify-center flex-shrink-0">
              <Image src="/assets/HDFC.png" alt="HDFC" width={34} height={24} />
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <span className="font-['Urbanist'] font-semibold text-[11px] md:text-[12px] leading-tight text-[#363636]">
                HDFC Mid-Cap Fund
              </span>
              <span className="font-['Urbanist'] font-medium text-[9px] md:text-[10px] leading-tight text-[#00BA00]">
                26.6% (3Y)
              </span>
            </div>
          </div>

          <div
            className="flex flex-row items-start gap-[10px] flex-1 h-[46px] rounded-[4px] p-2"
            style={{ background: "#E6F2FF", border: "1px solid #294F7C" }}
          >
            <div className="w-[34px] h-[27px] bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
              <Image src="/assets/BD.png" alt="Bandhan" width={34} height={27} />
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <span className="font-['Urbanist'] font-semibold text-[11px] md:text-[12px] leading-tight text-[#363636]">
                Bandhan Small Ca...
              </span>
              <span className="font-['Urbanist'] font-medium text-[9px] md:text-[10px] leading-tight text-[#00BA00]">
                32% (3Y)
              </span>
            </div>
          </div>

          <button
            type="button"
            aria-label="View more recommended funds"
            className="absolute flex items-center justify-center w-[24px] h-[24px] rounded-full z-[2] right-0 bottom-[-12px]"
            style={{
              background: "rgba(248, 250, 252, 0.2)",
              boxShadow: "0px 0px 15px rgba(74, 144, 226, 0.5)",
            }}
          >
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" aria-hidden="true">
              <path d="M1 1L7 7.5L1 14" stroke="#294F7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 w-full mt-auto">
        <button
          type="button"
          aria-label="Start investing today and gain 20 points"
          className="flex flex-row justify-center items-center gap-[10px] w-full min-h-[54px] rounded-[90px] px-4 md:px-6 py-3"
          style={{ background: "linear-gradient(90deg, #294F7C 0%, #4B90E2 100%)" }}
        >
          <div className="flex flex-row items-center gap-2 md:gap-[10px]">
            <span className="font-['Inter'] font-semibold text-[14px] md:text-[16px] leading-tight text-white">
              Start Investing Today
            </span>
            <div className="relative w-[60px] md:w-[70px] h-[26px] md:h-[30px]">
              <div
                className="absolute inset-0 rounded-[60px]"
                style={{ background: "#F8FAFC", border: "0.5px solid #00BA00" }}
              />
              <span
                className="absolute font-['Urbanist'] font-semibold text-[12px] md:text-[14px] leading-tight text-[#00BA00] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              >
                +20 pts
              </span>
            </div>
          </div>
        </button>

        <div className="flex flex-row justify-center items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M11 2L4 11H10L9 18L16 9H10L11 2Z" fill="#294F7C" />
          </svg>
          <span className="font-['Inter'] font-bold text-[12px] md:text-[14px] leading-tight text-[#294F7C]">
            Express setup:{" "}
            <span className="font-normal text-[#294F7C]">Complete in under 3 minutes</span>
          </span>
        </div>
      </div>
    </article>
  );
}
