interface BalanceDisplayProps {
  balance: string;
}

const BalanceDisplay = ({ balance }: BalanceDisplayProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">
            Available balance
          </h3>
          <p className="text-3xl font-bold mt-1">{balance}</p>
        </div>
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          <span>New Card</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BalanceDisplay;
