import type { CreditCard } from "@shared/types";
import { defaultCards } from "services";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CardState = {
  cards: Array<CreditCard>;
  currentCard: CreditCard | null;
  setCurrentCard: (card: CreditCard) => void;
  addCard: (card: CreditCard) => void;
  setCards: (cards: Array<CreditCard>) => void;
  deleteCard: (id: string) => void;
  toggleFreeze: (id: string) => void;
};

export const useCardStore = create<CardState>()(
  persist(
    (set) => ({
      cards: [],
      setCards: (cards) => set({ cards }),
      currentCard: null,
      setCurrentCard: (card) => set({ currentCard: card }),
      addCard: (card) =>
        set((state) => ({
          cards: [...state.cards, card],
        })),
      deleteCard: (id) =>
        set((state) => ({
          cards: state.cards.filter((c) => c.id !== id),
        })),
      toggleFreeze: (id: string) => {
        set((state) => {
          const updatedCards = state.cards.map((card) =>
            card.id === id ? { ...card, frozen: !card.frozen } : card
          );
          const updatedCurrentCard =
            state.currentCard?.id === id
              ? { ...state.currentCard, frozen: !state.currentCard.frozen }
              : state.currentCard;

          return {
            cards: updatedCards,
            currentCard: updatedCurrentCard,
          };
        });
      },
    }),
    {
      name: "card-storage",
      onRehydrateStorage: () => (state?: CardState) => {
        if (!state || state.cards.length === 0) {
          useCardStore.setState({
            cards: defaultCards,
          });
        }
      },
    }
  )
);
