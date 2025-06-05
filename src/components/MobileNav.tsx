import { navItems } from "@shared/constants";
import { IconWrapper } from "@shared/ui";
import cn from "classnames";

export const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-neutral-0 shadow-[0px_-3px_6px_#00000014] flex justify-around px-8 py-2 md:hidden">
      {navItems.map(({ icon, label, active }) => (
        <div
          key={label}
          className={cn(
            "flex flex-col items-center gap-0.5 cursor-pointer transition-colors duration-200 text-[9px]/[13px]",
            active ? "text-aspire-green font-semibold" : "text-[#DDDDDD]"
          )}
        >
          <IconWrapper src={icon} size={24} />
          <span>{label}</span>
        </div>
      ))}
    </nav>
  );
};
