import React from "react";
import { Table } from "antd";
import produce from "immer";
import StocksDisplaySchema from "./schema";
import "./StocksDisplay.scss";

const StocksDisplay = () => {
  const getData = () => {
    return produce(fields);
  };

  const getFields = () => {
    return produce(fields, (draft) => {
      const firstField = draft[0];
      _set(firstField, "label", title);
      draft.shift();
      draft.unshift(firstField);
    });
  };
  return (
    <Table
      className="stock-display-table"
      columns={StocksDisplaySchema.columns}
      dataSource={}
    />
  );
};

export default StocksDisplay;
