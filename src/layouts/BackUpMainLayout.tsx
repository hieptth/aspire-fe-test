import { Tab } from "@headlessui/react";
import cn from "classnames";
import { MobileNav, NoCardsMessage, Sidebar } from "components";
import { BalanceDisplay } from "components/BalanceDisplay";
import { useState } from "react";

interface CardData {
  id: string;
  name: string;
  last4: string;
  expiry: string;
  cvvHidden: boolean;
}

const cards: CardData[] = [
  {
    id: "1",
    name: "Mark Henry",
    last4: "2020",
    expiry: "12/20",
    cvvHidden: true,
  },
];

export const MainLayout = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-4 pb-24 overflow-auto">
        <BalanceDisplay balance="$3,000" />

        <Tab.Group
          selectedIndex={selectedTabIndex}
          onChange={setSelectedTabIndex}
        >
          <Tab.List className="flex space-x-4 border-b">
            {["My debit cards", "All company cards"].map((tab: string) => (
              <Tab
                key={tab}
                className={({ selected }: { selected: boolean }) =>
                  cn(
                    "px-4 py-2 border-b-2",
                    selected
                      ? "border-black font-semibold"
                      : "border-transparent text-gray-500"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-4">
            <Tab.Panel>
              {cards.length > 0 ? (
                <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory pb-4">
                  {cards.map((card) => (
                    <div key={card.id} className="snap-center shrink-0 w-72">
                      <div className="bg-green-500 text-white rounded-xl p-4 shadow-md w-72">
                        <div className="flex justify-between items-center mb-2">
                          <span>aspire</span>
                          <span className="text-sm">👁 Show card number</span>
                        </div>
                        <div className="text-lg font-semibold mb-1">
                          {card.name}
                        </div>
                        <div className="text-xl tracking-widest">
                          •••• •••• •••• {card.last4}
                        </div>
                        <div className="text-sm mt-2">Thru: {card.expiry}</div>
                        <div className="text-sm">CVV: ***</div>
                        <div className="text-right mt-2 font-bold">VISA</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <NoCardsMessage />
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
      <MobileNav />
    </div>
  );
};
