import React from "react";
import { IStocksContext, IStockWeightsContext } from "./types";

const StocksContextInitialState = { stocks: [], setStocks: () => {} };

export const StocksContext = React.createContext<IStocksContext>(
  StocksContextInitialState
);

const StockWeightsContextInitialState = {
  stockWeights: {},
  setStockWeights: () => {},
};

export const StockWeightsContext = React.createContext<IStockWeightsContext>(
  StockWeightsContextInitialState
);
