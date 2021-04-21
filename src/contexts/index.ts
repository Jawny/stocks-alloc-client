import React from "react";

interface IStock {
  ticker: string;
  shares: number;
  [key: string]: any;
}

interface IStocksContext {
  stocks: Array<IStock>;
  setStocks: React.Dispatch<React.SetStateAction<never[]>>;
}

const StocksContextInitialState = { stocks: [], setStocks: () => {} };

export const StocksContext = React.createContext<IStocksContext>(
  StocksContextInitialState
);
