import axios from "axios";

const API = "http://localhost:8080/api/companies";

export const getAllCompanies = async () => {
  const res = await axios.get(API);
  return res.data;
};
