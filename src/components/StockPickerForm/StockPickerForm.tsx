import React from "react";
import { Input, Form, InputNumber, Button } from "antd";
import { Spinner } from "@components/Spinner";
import { StocksContext } from "@contexts";
import "./StockPickerForm.scss";

const StockPickerForm = () => {
  const { stocks, setStocks } = React.useContext(StocksContext);
  const [loading, setLoading] = React.useState(false);

  const initialValues = { shares: 0 };

  const handleSubmit = (values: { shares: number; ticker: string }) => {
    setLoading(true);
    // try catch api call
    // return data to parent component to store
    // setLoading false
  };

  return (
    <Form
      className="stock-picker-form-container"
      initialValues={initialValues}
      onFinish={handleSubmit}
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
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item className="stock-picker-form-submit">
        <Button type="primary" htmlType="submit" disabled={loading}>
          Add
        </Button>
      </Form.Item>
      {loading ? <Spinner /> : null}
    </Form>
  );
};

export default StockPickerForm;
