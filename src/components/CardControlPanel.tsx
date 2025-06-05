export const CardControlPanel = () => {
  return (
    <div className="flex gap-7.5 rounded-2xl py-5 px-8 bg-[#EDF3FF]">
      {/* Freeze card */}
      <div className="flex flex-col items-center max-w-10 gap-2 cursor-pointer">
        <img
          src="icons/freeze-icon.svg"
          alt="freeze-card"
          width={32}
          height={32}
        />

        <span className="text-[13px]/[18px] text-center text-neutral-900">
          Freeze card
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
