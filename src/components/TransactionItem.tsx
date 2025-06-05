import type { Transaction } from "@shared/types";
import cn from "classnames";

export const TransactionItem = ({ item }: { item: Transaction }) => {
  return (
    <div className="flex flex-col pb-4 not-first:pt-4 border-b border-[#F5F5F5] last:border-b-0">
      <div className="flex items-start">
        <div
          className={cn(
            "p-4 rounded-full mr-3",
            item.iconBg || "bg-[#009DFF1A]"
          )}
        >
          <img
            src={item.icon || "icons/bucket-icon.svg"}
            alt="transaction-icon"
            className="object-contain flex min-w-4 min-h-4"
          />
        </div>

        <div className="flex flex-col pt-1 flex-1 mr-6">
          <p className="text-sm/4.5 font-semibold text-neutral-900">
            {item.title}
          </p>

          <p className="mt-1 text-[#AAAAAA] text-[13px]/4.5">
            {/* {new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })} */}
            {item.date}
          </p>
        </div>

        <div className="flex items-center gap-2.5 mt-1">
          <p
            className={cn("text-sm/4.5 font-bold", {
              "text-aspire-green": item.amount > 0,
              "text-neutral-900": item.amount < 0,
            })}
          >
            {item.amount > 0 ? "+" : "-"}
            {" S$ "}
            {Math.abs(item.amount).toFixed(0)}
          </p>

          <img
            src="icons/chevron-right-icon.svg"
            alt="chevron-right"
            width={6.5}
            height={12}
            className="object-contain"
          />
        </div>
      </div>

      <div className="mt-3 ml-15 flex items-center gap-2">
        <div className="py-1.5 px-1.75 rounded-full bg-[#325BAF]">
          <img
            src="icons/credit-card-icon.svg"
            alt="credit-card"
            width={10}
            height={8}
            className="object-contain"
          />
        </div>

        <p className="text-xs/4.5 font-semibold text-[#325BAF]">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
};
