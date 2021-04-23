import axios from "axios";
import { IGetQuoteSummaryProps } from "./types";

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
