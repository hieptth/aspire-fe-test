import type { CreditCard } from "@shared/types";
import cn from "classnames";
import { useState } from "react";

type AspireCardProps = {
  card: CreditCard;
};

export const AspireCard = ({ card }: AspireCardProps) => {
  card.color = card.color || "#01D167";
  const [showNumber, setShowNumber] = useState(false);

  const renderDigitGroups = () =>
    Array.from({ length: 3 }, (_, i) => (
      <div key={i} className="flex items-center gap-1.5 mr-6 md:mr-6.75">
        {showNumber
          ? Array.from({ length: 4 }, (_, j) => (
              <div key={j} className="text-sm/2">
                {card.number[i * 5 + j]}
              </div>
            ))
          : Array.from({ length: 4 }, (_, j) => (
              <div key={j} className="rounded-full w-2 h-2 bg-neutral-0"></div>
            ))}
      </div>
    ));

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl p-6 md:p-6.75 text-neutral-0",
        {
          "scale-[0.98] transition-transform duration-300 ease-in-out":
            card.frozen,
        }
      )}
      style={{ backgroundColor: card.color }}
      aria-label={`Card for ${card.holder}`}
    >
      {/* Icy freeze overlay */}
      {card.frozen && (
        <div className="absolute inset-0 rounded-xl bg-blue-100/30 backdrop-blur-[4px] border border-blue-300 shadow-[0_0_15px_3px_rgba(191,219,255,0.6)] pointer-events-none z-10" />
      )}

      {/* Frozen badge with icy style */}
      {card.frozen && (
        <div
          className="absolute top-3 right-3 z-20 px-3 py-1 bg-white/70 text-blue-700 font-bold rounded-full 
          text-xs select-none flex items-center gap-1 shadow-[0_0_8px_#7BC6FF]"
          aria-label="Frozen card indicator"
        >
          <span className="text-lg leading-none">❄️</span>
          <span>Frozen</span>
        </div>
      )}

      {/* Show Card Number Toggle */}
      <button
        onClick={() => !card.frozen && setShowNumber((prev) => !prev)}
        className={`
          absolute -top-6 md:-top-8 right-0 -z-1 rounded-t-md flex items-start md:items-center gap-1.5 h-9 md:h-auto text-xs/[17px] font-bold py-1.5 px-2.5 md:px-0 md:pb-3
          ${
            card.frozen
              ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
              : "bg-neutral-0 text-aspire-green cursor-pointer"
          }
        `}
        disabled={card.frozen}
      >
        <img
          src="icons/green-eye-icon.svg"
          alt="eye-icon"
          className="w-4 h-4"
        />
        {showNumber ? "Hide card number" : "Show card number"}
      </button>

      {/* Card Brand Top Right */}
      <div className="self-end mb-6 md:mb-6.75">
        <img
          src={card.logo || "svg/aspire-logo-white.svg"}
          alt="card-logo"
          className="h-6"
        />
      </div>

      {/* Holder Name */}
      <div className="text-2xl/8.5 font-semibold mb-6 md:mb-6.75">
        {card.holder}
      </div>

      {/* Card Number */}
      <div className="h-[19px] flex items-center tracking-widest text-sm/4.75 font-semibold md:mb-4.25">
        <>
          {renderDigitGroups()}
          <span>{card.number.slice(-4)}</span>
        </>
      </div>

      {/* Expiry & CVV */}
      <div className="flex gap-9 text-[13px]/[18px] font-semibold mb-1">
        <div className="flex items-center gap-1">
          Thru: <span className="tracking-[1.56px]">{card.expiry}</span>
        </div>
        <div className="flex items-center gap-1">
          CVV:
          <span className="text-2xl/6">{showNumber ? card.cvv : "***"}</span>
        </div>
      </div>

      {/* Card Brand Bottom Right */}
      <div className="self-end">
        <img src="svg/visa-logo.svg" alt="card-brand" width={66} height={22} />
      </div>
    </div>
  );
};
