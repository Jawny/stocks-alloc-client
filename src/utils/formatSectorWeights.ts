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
  const organizedSectorWeights: Record<string, number[]> = {};
  const investmentSumOfSectorWeights: Record<string, number> = {};
  const sectorWeightsCalculated: Record<string, number> = {};
  let totalInvestmentValue: number = 0;

  stocks.forEach((stock) => {
    const { quoteType, price, shares } = stock;
    totalInvestmentValue += price * shares;

    if (quoteType === "EQUITY") {
    } else {
      organizeSectorWeights(stock, organizedSectorWeights);
    }
  });

  /* Iterate through each array in organizedSectorWeights and get the total sum 
     invested in each sector. */
  _forOwn(organizedSectorWeights, (value: Array<number>, key: string) => {
    for (const weight of value) {
      investmentSumOfSectorWeights[key]
        ? (investmentSumOfSectorWeights[key] += weight)
        : (investmentSumOfSectorWeights[key] = weight);
    }
  });

  /* Calculate % weight in each sector based on amount of money invested */
  Object.keys(investmentSumOfSectorWeights).forEach((sector: string) => {
    const investmentInSector: number = _get(
      investmentSumOfSectorWeights,
      sector
    );

    _set(
      sectorWeightsCalculated,
      sector,
      (investmentInSector / totalInvestmentValue) * 100
    );
  });
};

export default formatSectorWeights;
