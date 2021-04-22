import axios from "axios";
import { getQuoteSummaryProps } from "./types";

export const getQuoteSummary = async (data: getQuoteSummaryProps) => {
  const { ticker, modules } = data;

  const response = await axios.get(
    `${process.env.REACT_APP_API_DOMAIN_DEV}/api/quote-summary`,
    {
      params: { ticker, modules },
    }
  );

  return response.data;
};
