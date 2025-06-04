import { Sidebar, BalanceDisplay } from "components";
import "./mainLayout.scss";

export const MainLayout = () => {
  return (
    <div className="flex h-dvh overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto p-15 scrollbar-hidden">
        <BalanceDisplay balance={3000} />
      </main>
    </div>
  );
};
