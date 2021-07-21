import { Doughnut } from "react-chartjs-2";
import { IDoughnutProps } from "./types";

const DoughnutChart = (props: IDoughnutProps) => {
  const { data } = props;

  return <Doughnut data={data} />;
};

export default DoughnutChart;
