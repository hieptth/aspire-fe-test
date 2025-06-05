import { Button } from "@headlessui/react";
import { formatNumber } from "@shared/utils";
import { useState } from "react";
import { CreateCardModal } from "./CreateCardModal";
import { IconWrapper } from "@shared/ui";

interface BalanceDisplayProps {
  balance: number;
}

export const BalanceDisplay = ({ balance }: BalanceDisplayProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 text-neutral-0 md:text-neutral-900">
        <p className="text-sm/[19px] font-medium">Available balance</p>

        <div className="flex items-center justify-between h-9">
          <div className="flex items-center gap-3">
            <div className="pt-0.5 pb-1 px-3 rounded-sm bg-aspire-green text-[13px]/[18px] font-semibold text-neutral-0">
              {"S$"}
            </div>

            <p className="text-[26px]/[36px] font-bold">
              {formatNumber(balance)}
            </p>
          </div>

          <Button
            className="flex items-center gap-2 cursor-pointer bg-transparent md:bg-aspire-blue hover:opacity-95 rounded-sm py-2 px-3 text-aspire-blue-light md:text-neutral-0 text-[13px]/[18px] font-semibold"
            onClick={() => setModalOpen(true)}
          >
            <IconWrapper
              src="icons/add-icon.svg"
              size={16}
              color="currentColor"
              className="inline-block"
            />
            {"New card"}
          </Button>
        </div>
      </div>

      <CreateCardModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
