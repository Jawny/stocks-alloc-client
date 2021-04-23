import React from "react";
export interface IAntdTableSchema {
  columns: {
    title: string;
    dataIndex: string;
    key: string | number;
    render?: () => React.ReactNode;
  }[];
}

export interface IStocksDisplaySchema extends IAntdTableSchema {
  data: { key: number; stock: string; shares: number }[];
}
