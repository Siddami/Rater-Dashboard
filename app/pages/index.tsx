"use client"

import dynamic from "next/dynamic";
import RateSettingsPanel from "../components/RateSettingsPanel"; // Ensure this component is correctly implemented
const CostPriceAnalysisTable = dynamic(
  () => import("../components/CostPriceAnalysisTable"),
  { ssr: false }
);// Ensure this component has the correct props type
const MarketRateCard = dynamic(() => import("../components/MarketRateCard"), {
  ssr: false,
});

interface MarketData {
  platform: string;
  usdPrice: string;
  ngnPrice: string;
}

const Dashboard: React.FC = () => {
  const marketData: MarketData[] = [
    { platform: "Binance", usdPrice: "50000", ngnPrice: "75000000" },
    { platform: "Paxful", usdPrice: "50500", ngnPrice: "75750000" },
    { platform: "Noones", usdPrice: "49500", ngnPrice: "74250000" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        {marketData.map((data, index) => (
          <MarketRateCard key={index} platform={data.platform} usdPrice={data.usdPrice} ngnPrice={data.ngnPrice} />
        ))}
      </div>
      <RateSettingsPanel />
      <CostPriceAnalysisTable />
    </div>
  );
};

export default Dashboard;
