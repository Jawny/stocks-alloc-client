import axios from "axios";
import { getFormData } from "@utils";
import { getQuoteSummaryProps } from "./types";

export const getQuoteSummary = async (data: getQuoteSummaryProps) => {
  const formData = getFormData(data);
  const response = await axios.get(
    `${process.env.REACT_APP_API_DOMAIN}/api/quote-summary`,
    {
      params: formData,
    }
  );

  return response;
};
