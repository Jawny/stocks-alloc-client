// @ts-check
/**
 * @module api
 * @requires axios
 */
import axios from "axios";
import { IGetQuoteSummaryProps } from "./types";

/**
 * Api call to server to retrieve stock data
 * @function
 * @name getQuoteSummary
 * @param {Record<string, string | Array<string>} data - request parameters
 * @param {string} data.ticker - Stock ticker symbol
 * @param {Array<string>} data.modules - Modules that determine what data to query for
 * @see {@link https://github.com/gadicc/node-yahoo-finance2/blob/devel/docs/modules/quoteSummary.md#module-options List of option strings for modules param.}
 * @returns {Record<string, any>}
 */
export const getQuoteSummary = async (data: IGetQuoteSummaryProps) => {
  const { ticker, modules } = data;

  const response = await axios.get(
    `${process.env.REACT_APP_API_DOMAIN}/api/quote-summary`,
    {
      params: { ticker, modules },
    }
  );

  return response.data;
};
