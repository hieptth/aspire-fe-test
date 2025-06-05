import { navItems } from "@shared/constants";
import { IconWrapper } from "@shared/ui";
import cn from "classnames";

export interface NavItem {
  icon: string;
  label: string;
  active: boolean;
}

export const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-85 bg-secondary text-white p-12">
      <img
        src="svg/aspire-logo.svg"
        alt="Aspire Logo"
        width={125}
        height={35}
        className="mb-4.5"
      />
      <p className="text-[15px]/[20px] font-light text-neutral-0 opacity-30 mb-20">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>

      <nav className="flex flex-col gap-15">
        {navItems.map(({ icon, label, active }) => (
          <div
            key={label}
            className={cn(
              "flex items-center gap-4 cursor-pointer transition-colors duration-200",
              active ? "text-aspire-green font-semibold" : "text-white"
            )}
          >
            <IconWrapper src={icon} size={24} />
            <span className="text-base">{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};
