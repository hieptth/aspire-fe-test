import type { NavItem } from "./Sidebar";

export const MobileNav = () => {
  const navItems: NavItem[] = [
    { icon: "🏠", label: "Home", active: false },
    { icon: "💳", label: "Cards", active: true },
    { icon: "💸", label: "Payments", active: false },
    { icon: "📈", label: "Credit", active: false },
    { icon: "👤", label: "Profile", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-2 md:hidden">
      {navItems.map(({ icon, label }) => (
        <div
          key={label}
          className="flex flex-col items-center text-xs text-gray-600"
        >
          <span className="text-lg">{icon}</span>
          <span>{label}</span>
        </div>
      ))}
    </nav>
  );
};
