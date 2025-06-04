import type { CreditCard } from "@shared/types";
import { useState } from "react";

type AspireCardProps = {
  card: CreditCard;
};

export const AspireCard = ({ card }: AspireCardProps) => {
  card.color = card.color || "aspire-green"; // Default color if not provided
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
      className={`relative flex flex-col rounded-xl p-6 md:p-6.75 text-neutral-0 bg-${card.color}`}
    >
      {/* Show Card Number Toggle */}
      <button
        onClick={() => setShowNumber((prev) => !prev)}
        className="absolute -top-5 right-2 z-10 bg-neutral-0 text-aspire-green text-xs px-3 py-1 rounded-full shadow flex items-center gap-1"
      >
        <span role="img" aria-label="eye">
          👁
        </span>
        Show card number
      </button>

      {/* Card Brand Top Right */}
      <div className="self-end mb-6 md:mb-6.75">
        <img src={card.logo} alt="card-logo" className="h-6" />
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
        <img src={card.brand} alt="card-brand" width={66} height={22} />
      </div>
    </div>
  );
};
