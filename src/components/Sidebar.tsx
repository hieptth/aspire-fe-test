// src/components/Sidebar.jsx
import { useEffect } from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const tabs = ["Home", "Cards", "Payments", "Credit", "Settings"];

  // Add scroll effect to sidebar
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar) {
        if (window.scrollY > 50) {
          sidebar.classList.add("scrolled");
        } else {
          sidebar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="sidebar w-20 md:w-64 bg-blue-900 text-white h-screen fixed left-0 top-0 overflow-hidden transition-all duration-300 z-10">
      <div className="h-full flex flex-col">
        <div className="p-4 md:p-6 flex items-center justify-center md:justify-start">
          <div className="bg-gray-300 border-2 border-dashed rounded-xl w-10 h-10" />
          <h1 className="hidden md:block font-bold text-xl ml-3">Bank</h1>
        </div>

        <nav className="flex-1 mt-8">
          <ul>
            {tabs.map((tab) => (
              <li key={tab}>
                <button
                  className={`w-full py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-center md:justify-start transition-all duration-200 ${
                    activeTab === tab ? "bg-blue-800" : "hover:bg-blue-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <div className="bg-gray-300 border-2 border-dashed rounded-xl w-5 h-5 mb-1 md:mb-0 md:mr-3" />
                  <span className="text-sm md:text-base mt-1 md:mt-0">
                    {tab}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 flex items-center justify-center md:justify-start">
          <div className="bg-gray-300 border-2 border-dashed rounded-full w-8 h-8" />
          <div className="hidden md:block ml-3">
            <p className="font-medium">Mark Henry</p>
            <p className="text-xs text-blue-200">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
