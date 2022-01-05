import axios from 'axios';

export const getCars = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
