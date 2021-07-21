import React from "react";
import { StockWeightsContext } from "@contexts";

const StockWeightsContextProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [stockWeights, setStockWeights] = React.useState<
    Record<string, number>
  >({});
  /**
   * Pass useState functionality to children.
   * Memoized to avoid unnecessary re-rendering.
   * @function
   */
  const providerValue = React.useMemo(
    () => ({ stockWeights, setStockWeights }),
    [stockWeights, setStockWeights]
  );

  return (
    <StockWeightsContext.Provider value={providerValue}>
      {children}
    </StockWeightsContext.Provider>
  );
};

export default StockWeightsContextProvider;
