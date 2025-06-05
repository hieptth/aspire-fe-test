import { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  children: React.ReactNode;
  classNames?: string;
};

export const Drawer = ({ open, children, classNames }: Props) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("40dvh");

  useEffect(() => {
    if (!open) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!drawerRef.current || !contentRef.current) return;

      const atTop = contentRef.current.scrollTop === 0;
      const deltaY = e.deltaY;

      if (atTop && deltaY > 0) {
        // Scroll down: expand
        setHeight((prev) => {
          const val = Math.min(parseInt(prev), 80);
          return `${val + 5}dvh`;
        });
      } else if (deltaY < 0) {
        // Scroll up: collapse
        setHeight((prev) => {
          const val = Math.max(parseInt(prev), 40);
          return `${val - 5}dvh`;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={`fixed bottom-0 left-0 w-full z-999 ${classNames}`}>
      <div
        ref={drawerRef}
        className="bg-neutral-0 rounded-t-3xl overflow-hidden transition-[height] duration-200 ease-out pointer-events-auto"
        style={{ height }}
      >
        <div ref={contentRef} className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
