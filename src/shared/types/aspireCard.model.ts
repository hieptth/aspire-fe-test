export type CreditCard = {
  id: string;
  logo?: string;
  color?: string;
  holder: string;
  number: string;
  expiry: string;
  cvv: string;
  frozen?: boolean;
  createdAt?: string; // Optional, used for sorting or display purposes
};
