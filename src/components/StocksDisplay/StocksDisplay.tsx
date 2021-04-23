import React from "react";
import { Table } from "antd";
import { set as _set } from "lodash";
import { StocksContext } from "@contexts";
import StocksDisplaySchema from "./schema";
import "./StocksDisplay.scss";

const StocksDisplay = () => {
  const { stocks } = React.useContext(StocksContext);
  const { columns, data } = StocksDisplaySchema;

  React.useMemo(() => {
    const formattedStocksData = stocks.reverse().map((stock, index) => {
      const { ticker, shares } = stock;

      return { key: index, stock: ticker.toUpperCase(), shares };
    });

    _set(StocksDisplaySchema, "data", formattedStocksData);
  }, [stocks]);

  return (
    <Table
      className="stock-display-table"
      columns={columns}
      dataSource={data}
    />
  );
};

export default StocksDisplay;
