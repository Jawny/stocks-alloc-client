import React from "react";
import { Input, Form, InputNumber, Button, message } from "antd";
import { get as _get } from "lodash";
import { getQuoteSummary } from "@api";
import { Spinner } from "@components/Spinner";
import { StocksContext, StockWeightsContext } from "@contexts";
import { formatSectorWeights } from "@utils";
import "./StockPickerForm.scss";

const StockPickerForm = () => {
  const { stocks, setStocks } = React.useContext(StocksContext);
  const { setStockWeights } = React.useContext(StockWeightsContext);
  const [loading, setLoading] = React.useState(false);

  const initialValues = { shares: 1 };
  /**
   * Makes api call to get price and topHoldings for a stock.
   * Then add the stock to Stocks state.
   * @function
   * @param {Record<string, string | number>} values
   */
  const handleAddStock = async (values: { shares: number; ticker: string }) => {
    setLoading(true);
    try {
      const { ticker, shares } = values;
      const quoteSummary = await getQuoteSummary({
        ticker,
        modules: ["price", "topHoldings"],
      });

      const newStockEntry = {
        ticker: ticker.toUpperCase(),
        shares,
        quoteType: _get(quoteSummary, "price.quoteType"),
        topHoldings: _get(quoteSummary, "topHoldings"),
        price: _get(quoteSummary, "price.postMarketPrice"),
      };

      setStocks([...stocks, newStockEntry]);
    } catch {
      message.error("Failed to find stock.", 1.5);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    const sectorWeights: Record<string, number> = formatSectorWeights(stocks);
    setStockWeights(sectorWeights);
  };

  return (
    <Form
      className="stock-picker-form-container"
      initialValues={initialValues}
      onFinish={handleAddStock}
    >
      <Form.Item
        className="stock-picker-form-ticker-input"
        label="Stock Ticker Symbol"
        name="ticker"
        rules={[
          {
            required: true,
            pattern: new RegExp(/[a-zA-Z.]+/),
            message: "Please enter a valid ticker.",
          },
        ]}
      >
        <Input placeholder="eg. ARKK" />
      </Form.Item>
      <Form.Item
        className="stock-picker-form-shares-input"
        label="Shares"
        name="shares"
        rules={[
          {
            required: true,
            message: "Please enter a valid number.",
          },
        ]}
      >
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item className="stock-picker-form-submit">
        <Button type="primary" htmlType="submit" disabled={loading}>
          Add
        </Button>
      </Form.Item>
      {loading ? <Spinner /> : null}
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

export default StockPickerForm;
