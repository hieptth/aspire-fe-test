import { Sidebar, BalanceDisplay } from "components";

export const MainLayout = () => {
  return (
    <div className="flex h-dvh overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto p-15">
        <BalanceDisplay balance="$3,000" />
      </main>
    </div>
  );
};
