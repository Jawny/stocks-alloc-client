import { get as _get, set as _set, forOwn as _forOwn } from "lodash";
import { IStock } from "@contexts/types";

const organizeSectorWeights = (
  stock: IStock,
  organizedSectorWeights: Record<string, Array<number>>
): void => {
  const { topHoldings } = stock;
  const sectorWeightings = _get(topHoldings, "sectorWeightings");

  for (const sector of sectorWeightings) {
    // Sector Object will only ever have 1 key value pair
    const sectorKey = Object.keys(sector);
    const sectorValue = Object.values(sector);
    const currentSectorWeights = _get(organizedSectorWeights, sectorKey) || [];

    _set(organizedSectorWeights, sectorKey, [
      ...currentSectorWeights,
      sectorValue[0],
    ]);
  }
};

const formatSectorWeights = (stocks: Array<IStock>) => {
  const organizedSectorWeights = {};

  stocks.forEach((stock) => {
    const { quoteType, shares } = stock;

    if (quoteType === "EQUITY") {
    } else {
      organizeSectorWeights(stock, organizedSectorWeights);
    }
  });

  _forOwn(organizedSectorWeights, (value: Array<number>, key: string) => {
    for (const weight of value) {
    }
  });
};

export default formatSectorWeights;
