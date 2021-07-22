import { Doughnut } from "react-chartjs-2";
import { IDoughnutProps } from "./types";

const DoughnutChart = (props: IDoughnutProps) => {
  const { className, data } = props;

  return <Doughnut className={className || ""} data={data} />;
};

export default DoughnutChart;
