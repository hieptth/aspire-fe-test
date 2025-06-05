import type { Transaction } from "@shared/types";

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

export async function fetchTransactions(): Promise<Transaction[]> {
  // Simulate API call latency
  return new Promise((resolve) => {
    setTimeout(() => resolve(transactions), 300);
  });
}
