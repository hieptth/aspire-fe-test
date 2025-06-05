import { createContext, useContext, useState } from "react";
import cn from "classnames";

const AccordionContext = createContext<{
  open: boolean;
  toggle: () => void;
} | null>(null);

export const Accordion = ({
  openByDefault = false,
  children,
  classNames,
}: {
  openByDefault?: boolean;
  children: React.ReactNode;
  classNames?: string;
}) => {
  const [open, setOpen] = useState(openByDefault || false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      <div
        className={cn(
          "border border-[#F0F0F0] rounded-lg bg-neutral-0",
          classNames
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const Header = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionHeader must be used inside Accordion");

  return (
    <div
      className={`flex items-center justify-between gap-6 p-6 rounded-lg bg-[#F5F9FF] border-1 border-[#F5F5F5] shadow-[0px_0px_8px_#0000000A] text-[#0C365A] text-sm/4.5 font-medium cursor-pointer ${classNames}`}
      onClick={ctx.toggle}
    >
      {children}

      <img
        src="icons/chevron-down-icon.svg"
        alt="toggle-accordion"
        width={20}
        height={20}
        className={cn("transition-transform duration-200", {
          "transform rotate-180": ctx.open,
        })}
      />
    </div>
  );
};

const Content = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionContent must be used inside Accordion");

  if (!ctx.open) {
    return null;
  }

  return (
    <div className={cn("p-6 bg-neutral-0 rounded-lg", classNames)}>
      {children}
    </div>
  );
};

Accordion.Header = Header;
Accordion.Content = Content;
