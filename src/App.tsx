import React from "react";
import { ChartsDisplay, StockPickerForm, StocksDisplay } from "@components";
import { StocksProvider, StockWeightsProvider } from "@providers";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <StocksProvider>
        <StockWeightsProvider>
          <StockPickerForm />
          <StocksDisplay />
          <ChartsDisplay />
        </StockWeightsProvider>
      </StocksProvider>
    </div>
  );
};

export default App;
