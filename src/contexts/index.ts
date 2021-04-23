import React from "react";

export interface IStock {
  ticker: string;
  shares: number;
  quoteType: string;
  topHoldings?: Record<string, string | object | number> | null;
}

interface IStocksContext {
  stocks: Array<IStock>;
  setStocks: React.Dispatch<React.SetStateAction<IStock[]>>;
}

const StocksContextInitialState = { stocks: [], setStocks: () => {} };

export const StocksContext = React.createContext<IStocksContext>(
  StocksContextInitialState
);
