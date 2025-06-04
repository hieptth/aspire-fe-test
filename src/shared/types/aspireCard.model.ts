export type CreditCard = {
  id: string;
  logo: string;
  color?: string;
  holder: string;
  number: string;
  expiry: string;
  cvv: string;
  brand: "VISA" | "Mastercard" | "Amex" | string;
};
