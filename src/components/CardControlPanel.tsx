import { useState } from "react";
import { useCardStore } from "stores";

export const CardControlPanel = () => {
  const currentCard = useCardStore((s) => s.currentCard);
  const toggleFreeze = useCardStore((s) => s.toggleFreeze);
  const [animate, setAnimate] = useState(false);

  if (!currentCard) return null;

  const handleClick = () => {
    setAnimate(true);
    toggleFreeze(currentCard.id);

    setTimeout(() => setAnimate(false), 200);
  };

  return (
    <div className="flex gap-7.5 rounded-2xl py-5 px-8 bg-[#EDF3FF]">
      {/* Freeze card */}
      <div
        className="flex flex-col items-center max-w-10 gap-2 cursor-pointer"
        onClick={handleClick}
      >
        <img
          src="icons/freeze-icon.svg"
          alt="freeze-card"
          width={32}
          height={32}
        />
        <span
          className={`text-[13px]/[18px] text-center text-neutral-900 transition-transform duration-200 ${
            animate ? "scale-90 opacity-50" : "scale-100 opacity-100"
          }`}
          key={currentCard.frozen ? "unfreeze" : "freeze"}
        >
          {currentCard.frozen ? "Unfreeze" : "Freeze"} card
        </span>
      </div>

      {/* Set spend limit */}
      <div className="flex flex-col items-center max-w-15 gap-2 cursor-pointer">
        <img
          src="icons/limit-icon.svg"
          alt="set-spend-limit"
          width={32}
          height={32}
        />

        <span className="text-[13px]/[18px] text-center text-neutral-900">
          Set spend limit
        </span>
      </div>

      {/* Add to GPay */}
      <div className="flex flex-col items-center max-w-10 gap-2 cursor-pointer">
        <img
          src="icons/google-pay-icon.svg"
          alt="add-to-google-pay"
          width={32}
          height={32}
        />

        <span className="text-[13px]/[18px] text-center text-neutral-900">
          Add to GPay
        </span>
      </div>

      {/* Replace card */}
      <div className="flex flex-col items-center max-w-10 gap-2 cursor-pointer">
        <img
          src="icons/reload-icon.svg"
          alt="replace-card"
          width={32}
          height={32}
        />

        <span className="text-[13px]/[18px] text-center text-neutral-900">
          Replace card
        </span>
      </div>

      {/* Cancel card */}
      <div className="flex flex-col items-center max-w-10 gap-2 cursor-pointer">
        <img
          src="icons/trash-icon.svg"
          alt="cancel-card"
          width={32}
          height={32}
        />

        <span className="text-[13px]/[18px] text-center text-neutral-900">
          Cancel card
        </span>
      </div>
    </div>
  );
};
