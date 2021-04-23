export interface IAntdTableSchema {
  columns: { title: string; dataIndex: string; key: string | number }[];
}

export interface IStocksDisplaySchema extends IAntdTableSchema {
  data: { key: number; stock: string; shares: number }[];
}
