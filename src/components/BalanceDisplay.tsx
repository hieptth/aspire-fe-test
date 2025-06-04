import { Button } from "@headlessui/react";

interface BalanceDisplayProps {
  balance: string;
}

export const BalanceDisplay = ({ balance }: BalanceDisplayProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      <div>
        <p className="text-sm text-gray-500">Account balance</p>
        <h2 className="text-2xl font-bold">{balance}</h2>
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 rounded-lg p-2 border text-white mt-2 md:mt-0">
        + New card
      </Button>
    </div>
  );
};
