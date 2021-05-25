import { get as _get, set as _set, forOwn as _forOwn } from "lodash";
import { IStock } from "@contexts/types";

const organizeSectorWeights = (
  stock: IStock,
  organizedSectorWeights: Record<string, Array<number>>
): void => {
  const { topHoldings, price, shares } = stock;
  const sectorWeightings = _get(topHoldings, "sectorWeightings");

  for (const sector of sectorWeightings) {
    // Sector Object will only ever have 1 key value pair
    const sectorKey: string[] = Object.keys(sector);
    const sectorValue: number[] = Object.values(sector);
    const currentSectorWeights: number[] =
      _get(organizedSectorWeights, sectorKey) || [];

    _set(organizedSectorWeights, sectorKey, [
      ...currentSectorWeights,
      sectorValue[0] * price * shares,
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
  debugger;
  _forOwn(organizedSectorWeights, (value: Array<number>, key: string) => {
    for (const weight of value) {
    }
  });
};

export default formatSectorWeights;
