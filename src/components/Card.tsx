/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/Card.jsx
import { useState } from "react";

interface CardProps {
  showCardNumber: boolean;
  setShowCardNumber: (show: boolean) => void;
  name: string;
  number: string;
  expiry: string;
  cvv: string;
  type: string;
}

const Card = ({
  showCardNumber,
  setShowCardNumber,
  name,
  number,
  expiry,
  cvv,
  type,
}: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative">
      <div
        className={`card-container transform transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ perspective: "1000px" }}
      >
        {/* Front of the card */}
        <div
          className={`card-front bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl ${
            isFlipped ? "hidden" : ""
          }`}
          style={{ height: "220px", backfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">Company Name</p>
              <p className="text-xl font-semibold mt-1">{name}</p>
            </div>
            <div className="text-2xl font-bold">{type}</div>
          </div>

          <div className="mt-8">
            <p className="text-sm opacity-80">Card Number</p>
            <div className="flex items-center mt-1">
              <span className="text-xl tracking-wider">
                {showCardNumber
                  ? `•••• •••• •••• ${number}`
                  : "•••• •••• •••• ••••"}
              </span>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <div>
              <p className="text-xs opacity-80">Expiry</p>
              <p className="text-sm">{expiry}</p>
            </div>
            <div>
              <p className="text-xs opacity-80">CVV</p>
              <p className="text-sm">{showCardNumber ? cvv : "•••"}</p>
            </div>
          </div>

          <button
            className="absolute bottom-4 right-4 text-xs opacity-70 hover:opacity-100"
            onClick={handleFlip}
          >
            Show CVV
          </button>
        </div>

        {/* Back of the card */}
        <div
          className={`card-back bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-6 text-white shadow-lg ${
            !isFlipped ? "hidden" : ""
          }`}
          style={{
            height: "220px",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-10 bg-black mt-8"></div>
          <div className="bg-gray-200 h-8 rounded mt-6 flex items-center px-4">
            <div className="w-full h-4 bg-gray-400 rounded-sm"></div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
              {cvv}
            </div>
          </div>
          <button
            className="absolute bottom-4 right-4 text-xs opacity-70 hover:opacity-100"
            onClick={handleFlip}
          >
            Show Front
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
