interface Transaction {
  id: number;
  merchant: string;
  date: string;
  type: string;
  amount: string;
}

const TransactionList = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="border-b border-gray-100 last:border-b-0 transition-colors duration-200 hover:bg-gray-50"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{transaction.merchant}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {transaction.date}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {transaction.type}
                  </p>
                </div>
                <p
                  className={`font-medium ${
                    transaction.amount.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.amount}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
