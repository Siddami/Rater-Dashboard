import React from "react";

interface MarketRateCardProps {
  platform: string;
  usdPrice: string;
  ngnPrice: string;
}

const MarketRateCard: React.FC<MarketRateCardProps> = React.memo(
  ({ platform, usdPrice, ngnPrice }) => {
    return (
      <div className="bg-card shadow rounded-lg p-4 flex-1 mx-2 transition-transform hover:scale-105 font-circular-normal">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-circular-medium text-card-foreground">
            {platform}
          </h3>
          <svg
            className="w-6 h-6 text-warning-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h5m11 6v5h-5m0-20v5h5m-20 6v5h5"
            />
          </svg>
        </div>
        <p className="text-muted-foreground">USD: ${usdPrice}</p>
        <p className="text-muted-foreground">NGN: ₦{ngnPrice}</p>
      </div>
    );
  }
);

MarketRateCard.displayName = "MarketRateCard";

export default MarketRateCard;
