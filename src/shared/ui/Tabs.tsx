import { useState } from "react";
import cn from "classnames";

type TabsProps = {
  tabs?: string[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
};

export function Tabs({ tabs = [], selectedIndex = 0, onChange }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div className="flex gap-8 font-avenirNext text-sm/5">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => handleTabClick(index)}
          className={cn(
            "relative cursor-pointer pb-1.25 text-neutral-0 md:text-neutral-900 transition-opacity duration-200",
            activeIndex === index
              ? "font-bold after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-aspire-blue-light after:rounded-full"
              : "opacity-30"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
