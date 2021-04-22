import React from "react";
import { StockPickerForm, StocksDisplay } from "@components";
import { StocksProvider } from "@providers";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <StocksProvider>
        <StockPickerForm />
        <StocksDisplay />
      </StocksProvider>
    </div>
  );
};

export default App;
