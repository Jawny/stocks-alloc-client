import { get as _get } from "lodash";
import { IStock } from "@contexts/types";

const formatSectorWeights = (stocks: Array<IStock>) => {
  const res = stocks.map((stock) => {
    const { quoteType, shares } = stocks;

    if (quoteType === "EQUITY") {
    } else {
    }
  });
};

export default formatSectorWeights;
