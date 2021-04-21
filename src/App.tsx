import React from "react";
import { StockPickerForm } from "@components";
import { StocksProvider } from "@providers";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <StocksProvider>
        <StockPickerForm />
      </StocksProvider>
    </div>
  );
};

export default App;
