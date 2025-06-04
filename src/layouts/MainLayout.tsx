import { Sidebar, BalanceDisplay } from "components";
import "./mainLayout.scss";
import { Tabs } from "@shared/ui";

const tabs = ["My debit cards", "All company cards"];

export const MainLayout = () => {
  return (
    <div className="flex h-dvh overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto p-15 scrollbar-hidden">
        <div className="mb-8.5">
          <BalanceDisplay balance={3000} />
        </div>

        <div className="mb-6 md:mb-4">
          <Tabs tabs={tabs} selectedIndex={0} />
        </div>

        <div className="p-10 pt-15 rounded-lg border-1 border-neutral-50 shadow-[0px_2px_12px_#00000014]">
          hello kitty
        </div>
      </main>
    </div>
  );
};
