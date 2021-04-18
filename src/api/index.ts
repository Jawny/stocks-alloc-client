import axios from "axios";
import { getFormData } from "@utils";

export const getQuoteSummary = async (data: Record<string, any>) => {
  const formData = getFormData(data);
  const response = await axios.get(`${process.env.DOMAIN}/api/quote-summary`, {
    params: formData,
  });

  return response;
};
