import React from "react";

interface IStocksContext {
  stocks: Array<any>;
  setStocks: React.Dispatch<React.SetStateAction<never[]>>;
}

const StocksContextInitialState = { stocks: [], setStocks: () => {} };

export const StocksContext = React.createContext<IStocksContext>(
  StocksContextInitialState
);
