import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTM3NDRkNDllNDg4NGU4MDRlYzkxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjIxNTA1MiwiZXhwIjoxNjQ2ODE5ODUyfQ.Y5EyjBTBy8Uf541aZhzDgPRZhzNdaE5D8_RXJSW7OLc";


export const publicRequest = axios.create({
  baseURL: BASE_URL, 
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
})

export const getProduct = async (id) => {
  try {
    await axios
      .get(BASE_URL+"/products/find" + id)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
}