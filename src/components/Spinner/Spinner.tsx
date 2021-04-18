import { Spin } from "antd";
import "./Spinner.scss";

const Spinner = () => (
  <div className="spinner-container">
    <Spin className="spinner" size="large" />
  </div>
);

export default Spinner;
