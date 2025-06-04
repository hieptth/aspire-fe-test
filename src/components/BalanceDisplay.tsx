import { Button } from "@headlessui/react";
import { formatNumber } from "@shared/utils";

interface BalanceDisplayProps {
  balance: number;
}

export const BalanceDisplay = ({ balance }: BalanceDisplayProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm/[19px] text-neutral-900 font-medium">
        Available balance
      </p>

      <div className="flex items-center justify-between h-9">
        <div className="flex items-center gap-3">
          <div className="pt-0.5 pb-1 px-3 rounded-sm bg-aspire-green text-[13px]/[18px] font-semibold text-white">
            {"S$"}
          </div>

          <p className="text-[26px]/[36px] font-bold text-neutral-900">
            {formatNumber(balance)}
          </p>
        </div>

        <Button className="flex items-center gap-2 cursor-pointer bg-aspire-blue hover:opacity-95 rounded-sm py-2 px-3 text-neutral-0 text-[13px]/[18px] font-semibold">
          <img
            src="icons/add-icon.svg"
            alt="Add card"
            className="inline-block"
            width={16}
            height={16}
          />
          {"New card"}
        </Button>
      </div>
    </div>
  );
};
