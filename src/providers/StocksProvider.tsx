import React from "react";
import { StocksContext, IStock } from "@contexts";

const StocksContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [stocks, setStocks] = React.useState<IStock[]>([]);
  /**
   * Pass useState functionality to children.
   * Memoized to avoid unnecessary re-rendering.
   * @function
   */
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
