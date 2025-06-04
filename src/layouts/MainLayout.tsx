import type { CreditCard } from "@shared/types";
import { Slider, Tabs } from "@shared/ui";
import { AspireCard, BalanceDisplay, Sidebar } from "components";
import "./mainLayout.scss";

const tabs = ["My debit cards", "All company cards"];

const cards: Array<CreditCard> = [
  {
    id: "card-1",
    logo: "svg/aspire-logo-white.svg",
    holder: "Mark Henry",
    number: "1234 5678 9012 2020",
    expiry: "12/20",
    cvv: "123",
    brand: "svg/visa-logo.svg",
  },
  {
    id: "card-2",
    logo: "svg/aspire-logo-white.svg",
    color: "aspire-blue",
    holder: "Sarah Connor",
    number: "1111 2222 3333 4444",
    expiry: "01/26",
    cvv: "456",
    brand: "svg/visa-logo.svg",
  },
  {
    id: "card-3",
    logo: "svg/aspire-logo-white.svg",
    color: "secondary",
    holder: "John Doe",
    number: "5555 6666 7777 8888",
    expiry: "11/25",
    cvv: "789",
    brand: "svg/visa-logo.svg",
  },
];

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
          <Slider className="max-w-103.5">
            {cards.map((card) => (
              <AspireCard key={card.id} card={card} />
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
};
