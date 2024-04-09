import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_SERVER}`;

export const axiosInstance = axios.create({ baseURL });
