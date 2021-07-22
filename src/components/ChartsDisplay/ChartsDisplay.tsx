import React from "react";
import { isEmpty as _isEmpty } from "lodash";
import { StockWeightsContext } from "@contexts";
import { DoughnutChart } from "@components/Charts";
import "./ChartsDisplay.scss";

const ChartsDisplay = () => {
  const { stockWeights } = React.useContext(StockWeightsContext);
  const [chartData, setChartData] = React.useState({});

  React.useEffect(() => {
    if (!_isEmpty(stockWeights)) {
      const labels = Object.keys(stockWeights);
      const data = Object.keys(stockWeights).map(
        (sector) => stockWeights[sector]
      );
      const title = "Portfolio Sector Distribution";
      const backgroundColor = [
        "rgba(226, 176, 255, 1)",
        "rgba(255, 242, 167, 1)",
        "rgba(255, 169, 208, 1)",
        "rgba(148, 183, 231, 1)",
        "rgba(255, 133, 133, 1)",
        "rgba(128, 231, 229, 1)",
        "rgba(255, 211, 128, 1)",
        "rgba(244, 224, 213, 1)",
        "rgba(204, 184, 193, 1)",
        "rgba(166, 184, 124, 1)",
        "rgba(198, 166, 131, 1)",
        "rgba(117, 99, 115, 1)",
        "rgba(34, 139, 34, 1)",
      ];
      const newChartData = {
        labels,
        datasets: [{ label: title, data, backgroundColor }],
      };

      setChartData(newChartData);
    }
  }, [stockWeights]);

  return (
    <DoughnutChart className="stocks-weight-doughnut-chart" data={chartData} />
  );
};

export default ChartsDisplay;
