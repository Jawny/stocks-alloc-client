export interface IStock {
  ticker: string;
  shares: number;
  quoteType: string;
  topHoldings?: Record<string, any> | null;
  price: number;
}

export interface IStocksContext {
  stocks: Array<IStock>;
  setStocks: React.Dispatch<React.SetStateAction<IStock[]>>;
}

export interface IStockWeightsContext {
  stockWeights: Record<string, number>;
  setStockWeights: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}
