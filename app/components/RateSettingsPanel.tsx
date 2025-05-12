import React from "react";

const RateSettingsPanel: React.FC = React.memo(() => {
  return (
    <div className="bg-card shadow rounded-lg p-4 font-circular-normal">
      <h3 className="text-lg font-circular-medium text-card-foreground mb-4">
        Rate Settings
      </h3>
      <p className="text-muted-foreground mb-4">Selling Price: $1000</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-muted-foreground mb-1 font-circular-medium">
            USDT/NGN
          </label>
          <input
            type="text"
            placeholder="Enter rate"
            className="w-full p-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-muted text-muted-foreground no-spinner"
          />
        </div>
        <div>
          <label className="block text-muted-foreground mb-1 font-circular-medium">
            BTC/NGN
          </label>
          <input
            type="text"
            placeholder="Enter rate"
            className="w-full p-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-muted text-muted-foreground no-spinner"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
        <button className="btn-primary">Set</button>
        <button className="btn-primary">Save Rates</button>
        <button className="btn-primary">Setup Markup 2</button>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-muted-foreground font-circular-medium">
          Offers
        </span>
        <input
          type="checkbox"
          className="h-5 w-5 text-primary focus:ring-ring border-input rounded"
        />
      </div>
    </div>
  );
});

RateSettingsPanel.displayName = "RateSettingsPanel";

export default RateSettingsPanel;
