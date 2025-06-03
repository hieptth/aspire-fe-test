import BalanceDisplay from "components/BalanceDisplay";
import Card from "components/Card";
import Sidebar from "components/Sidebar";
import { useState } from "react";

export const MainLayout = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [showCardNumber, setShowCardNumber] = useState(false);

  const transactions = [
    {
      id: 1,
      merchant: "Hamleys",
      date: "20 May 2020",
      type: "Refund on debit card",
      amount: "+ $150",
    },
    {
      id: 2,
      merchant: "Hamleys",
      date: "20 May 2020",
      type: "Charged to debit card",
      amount: "- $150",
    },
    {
      id: 3,
      merchant: "Hamleys",
      date: "20 May 2020",
      type: "Charged to debit card",
      amount: "- $150",
    },
    {
      id: 4,
      merchant: "Amazon",
      date: "21 May 2020",
      type: "Online purchase",
      amount: "- $89.99",
    },
    {
      id: 5,
      merchant: "Starbucks",
      date: "22 May 2020",
      type: "Coffee purchase",
      amount: "- $5.75",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 overflow-auto p-4 md:p-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Tasted way of banking for 3,000+ SMEs and startups in Singapore
          </h1>

          <BalanceDisplay balance="$3,000" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">My debit cards</h2>
                <p className="text-blue-600 font-medium">All company cards</p>
              </div>

              <Card
                showCardNumber={showCardNumber}
                setShowCardNumber={setShowCardNumber}
                name="Mark Henry"
                number="2020"
                expiry="12/20"
                cvv="123"
                type="VISA"
              />

              <div className="mt-6 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Card settings</h3>
                  <button
                    className="text-blue-600 font-medium flex items-center"
                    onClick={() => setShowCardNumber(!showCardNumber)}
                  >
                    <span className="mr-1">
                      {showCardNumber ? "Hide" : "Show"}
                    </span>
                    card number
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Weekly spending limit</span>
                    <div className="flex items-center">
                      <span className="text-gray-800 font-medium mr-2">
                        $5,000
                      </span>
                      <div className="w-10 h-5 bg-blue-100 rounded-full flex items-center p-1">
                        <div className="w-3 h-3 bg-blue-600 rounded-full transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Freeze card</span>
                    <div className="flex items-center">
                      <div className="w-10 h-5 bg-gray-200 rounded-full flex items-center p-1">
                        <div className="w-3 h-3 bg-white rounded-full transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recent transactions</h2>
                  <button className="text-blue-600 font-medium">
                    View all
                  </button>
                </div>

                <div className="space-y-2">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <div className="bg-gray-300 border-2 border-dashed rounded-xl w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium">{transaction.merchant}</p>
                          <p className="text-sm text-gray-500">
                            {transaction.date}
                          </p>
                          <div className="flex items-center mt-1">
                            <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                            <p className="text-xs text-gray-500">
                              {transaction.type}
                            </p>
                          </div>
                        </div>
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
                  ))}
                </div>

                <button className="w-full mt-6 py-3 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  View all card transactions
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
