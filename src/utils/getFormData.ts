// @ts-check
/**
 * @module utils/getFormData
 * @requires form-data
 */
import FormData from "form-data";

/**
 * Function converts data object to FormData
 * @function
 * @name getFormData
 * @param {Record<string, any>} data - data object with params to pass to api.
 * @returns {FormData} - FormData with object params.
 */
const getFormData = (data: Record<string, any>) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  return formData;
};

export default getFormData;
