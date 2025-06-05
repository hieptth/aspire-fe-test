import { create } from "zustand";
import type { Transaction } from "@shared/types";

type TransactionState = {
  transactions: Transaction[];
  setTransactions: (txs: Transaction[]) => void;
};

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  setTransactions: (txs) => set({ transactions: txs }),
}));
