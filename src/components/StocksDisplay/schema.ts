import { IStocksDisplaySchema } from "./types";

const StocksDisplaySchema: IStocksDisplaySchema = {
  columns: [
    { title: "Stock", dataIndex: "stock", key: "stock" },
    { title: "Shares", dataIndex: "shares", key: "shares" },
  ],
  data: [],
};

export default StocksDisplaySchema;
