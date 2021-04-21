import React from "react";
import { StocksContext } from "@contexts";

const StocksContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [stocks, setStocks] = React.useState([]);
  // Important to prevent unnecessary re-renderings
  const providerValue = React.useMemo(() => ({ stocks, setStocks }), [
    stocks,
    setStocks,
  ]);

  return (
    <StocksContext.Provider value={providerValue}>
      {children}
    </StocksContext.Provider>
  );
};

export default StocksContextProvider;
