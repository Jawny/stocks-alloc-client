import React from "react";
import { Button, Table } from "antd";
import { compact as _compact, get as _get, set as _set } from "lodash";
import produce from "immer";
import { StocksContext } from "@contexts";
import StocksDisplaySchema from "./schema";
import "./StocksDisplay.scss";

interface IDataSourceProps {
  key: number;
  stock: string;
  shares: number;
}

const StocksDisplay = () => {
  const { stocks, setStocks } = React.useContext(StocksContext);
  const { columns, data } = StocksDisplaySchema;

  /**
   * Add Delete button to last column in columns array.
   */
  _set(
    StocksDisplaySchema,
    `columns[${columns.length - 1}].render`,
    (text: any, record: IDataSourceProps) => (
      <Button onClick={() => handleDelete(record)}>Delete</Button>
    )
  );

  /**
   * Delete stock from the stocks state
   * @function
   * @param {Record<string, string | number>} stock
   * @param {number} stock.key - array index the stock is assigned in the stocks state
   * @param {string} stock.stock - stock ticker symbol
   * @param {number} stock.shares - number of shares held for stock
   */
  const handleDelete = (stock: IDataSourceProps) => {
    setStocks(
      _compact(
        produce(stocks, (draft) => {
          delete draft[stock.key];
        })
      )
    );
  };

  /**
   * Update the dataSource in Table
   * @function
   */
  React.useMemo(() => {
    /**
     * Map over stocks state and create an object with a key, stock ticker, and number of shares
     * @function
     * @returns {Record<string, number | string>[]}
     */
    const formattedStocksData = _compact(
      stocks.map((stock, index) => {
        const ticker = _get(stock, "ticker");
        const shares = _get(stock, "shares");

        if (!ticker || !String(shares)) {
          return null;
        }

        return {
          key: index,
          stock: ticker,
          shares,
        };
      })
    );

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
