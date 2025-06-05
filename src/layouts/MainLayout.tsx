import type { Transaction } from "@shared/types";
import { Accordion, Slider, Tabs } from "@shared/ui";
import {
  AspireCard,
  BalanceDisplay,
  CardControlPanel,
  Sidebar,
  TransactionItem,
} from "components";
import { useEffect } from "react";
import { fetchInitialCards } from "services";
import { useCardStore } from "stores";
import "./mainLayout.scss";

const tabs = ["My debit cards", "All company cards"];

// Example transactions
const transactions: Transaction[] = [
  {
    title: "Hamleys",
    date: "20 May 2020",
    amount: 150,
    subtitle: "Refund on debit card",
  },
  {
    icon: "icons/flight-icon.svg",
    iconBg: "bg-[#00D6B51A]",
    title: "Hamleys",
    date: "20 May 2020",
    amount: -150,
    subtitle: "Charged to debit card",
  },
  {
    icon: "icons/megaphone-icon.svg",
    iconBg: "bg-[#F251951A]",
    title: "Hamleys",
    date: "20 May 2020",
    amount: -150,
    subtitle: "Charged to debit card",
  },
  {
    title: "Hamleys",
    date: "20 May 2020",
    amount: -150,
    subtitle: "Charged to debit card",
  },
];

export const MainLayout = () => {
  const { cards, setCards } = useCardStore();

  useEffect(() => {
    if (cards.length === 0) {
      fetchInitialCards().then((fetchedCards) => {
        setCards(fetchedCards);
        useCardStore.getState().setCurrentCard(fetchedCards[0]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        <div className="p-10 pt-15 rounded-lg border-1 border-neutral-50 shadow-[0px_2px_12px_#00000014] grid grid-cols-[minmax(0,25.875rem)_1fr] gap-11.5">
          <div className="flex flex-col gap-8">
            {cards.length > 0 && (
              <Slider key={cards.length}>
                {cards.map((card) => (
                  <AspireCard key={card.id} card={card} />
                ))}
              </Slider>
            )}

            <CardControlPanel />
          </div>

          <div className="flex flex-col gap-6">
            <Accordion>
              <Accordion.Header>
                <div className="flex items-center gap-3">
                  <img
                    src="icons/detail-icon.svg"
                    alt="card-details-icon"
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  Card details
                </div>
              </Accordion.Header>
              <Accordion.Content>{""}</Accordion.Content>
            </Accordion>

            <div className="bg-[#EDFFF5] rounded-lg">
              <Accordion openByDefault>
                <Accordion.Header>
                  <div className="flex items-center gap-3">
                    <img
                      src="icons/outline-swap-icon.svg"
                      alt="recent-transaction-icon"
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                    Recent transactions
                  </div>
                </Accordion.Header>
                <Accordion.Content>
                  <div className="flex flex-col">
                    {transactions.map((transaction, idx) => (
                      <TransactionItem key={idx} item={transaction} />
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion>

              <div className="flex justify-center text-[13px]/4.5 font-semibold text-aspire-green py-4 cursor-pointer">
                View all card transactions
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
