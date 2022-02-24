import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTM3NDRkNDllNDg4NGU4MDRlYzkxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTY5MDc0OSwiZXhwIjoxNjQ2Mjk1NTQ5fQ.KMEvq8gv7BFugnrY_dmEy_y6-UAlX2g8ncIJL-LlCGs";


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