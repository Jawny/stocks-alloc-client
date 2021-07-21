import { get as _get, set as _set, forOwn as _forOwn } from "lodash";
import { IStock } from "@contexts/types";

/**
 * Break down each ETF's top holdings and calculate the % capital invested in
 * each sector based on the sector weight * current ETF price * number of shares
 * @function
 * @name organizeSectorWeights
 * @param {IStock} stock - stock
 * @param {Record<string, Array<number>>} organizedSectorWeights - Empty Object to populate
 * @returns {void} - Will populate organizedSectorWeights with Arrays of sector weights
 */
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

/**
 * Format sector weights from array of stocks. Take each stock and break down the
 * price to sector weight ratio to get the % weight of capital invested in each sector.
 * @function
 * @name formatSectorWeights
 * @param {Array<IStock>} stocks - request parameters
 * @returns {Record<string, number>} - Object with sector weight ratios based on current stock prices
 */
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
