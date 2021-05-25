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
