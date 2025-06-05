import type { CreditCard } from "@shared/types";

export const defaultCards: Array<CreditCard> = [
  {
    id: "card-1",
    holder: "Mark Henry",
    number: "1234 5678 9012 3456",
    expiry: "12/26",
    cvv: "123",
    createdAt: new Date().toISOString(),
  },
  {
    id: "card-2",
    color: "#23CEFD",
    holder: "Sarah Connor",
    number: "4321 8765 2109 6543",
    expiry: "01/27",
    cvv: "456",
    createdAt: new Date().toISOString(),
  },
  {
    id: "card-3",
    color: "#536DFF",
    holder: "John Doe",
    number: "5555 6666 7777 8888",
    expiry: "11/25",
    cvv: "789",
    createdAt: new Date().toISOString(),
  },
];

export function fetchInitialCards(): Promise<Array<CreditCard>> {
  return Promise.resolve(defaultCards);
}

const generateCardNumber = (): string =>
  Array(4)
    .fill(null)
    .map(() => Math.floor(1000 + Math.random() * 9000).toString())
    .join(" ");

const generateExpiry = (): string => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = String((now.getFullYear() + 3) % 100);
  return `${month}/${year}`;
};

const generateCVV = (): string =>
  Math.floor(100 + Math.random() * 900).toString();

export async function createCard({
  holder,
}: {
  holder: string;
}): Promise<CreditCard> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: crypto.randomUUID(),
        holder,
        number: generateCardNumber(),
        expiry: generateExpiry(),
        cvv: generateCVV(),
        frozen: false,
        createdAt: new Date().toISOString(),
      });
    }, 200);
  });
}
