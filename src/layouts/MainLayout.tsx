import type { CreditCard, Transaction } from "@shared/types";
import { Accordion, Slider, Tabs } from "@shared/ui";
import {
  AspireCard,
  BalanceDisplay,
  CardControlPanel,
  Sidebar,
  TransactionItem,
} from "components";
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
            <Slider>
              {cards.map((card) => (
                <AspireCard key={card.id} card={card} />
              ))}
            </Slider>

            <CardControlPanel />
          </div>

          <div className="flex flex-col gap-6">
            <Accordion>
              <Accordion.Header>Card details</Accordion.Header>
              <Accordion.Content>{""}</Accordion.Content>
            </Accordion>

            <div className="bg-[#EDFFF5] rounded-lg">
              <Accordion openByDefault>
                <Accordion.Header>Recent transactions</Accordion.Header>
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
