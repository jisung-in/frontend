import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  isAxiosError,
} from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_SERVER}`;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

const onRequestRejected = (error: AxiosError) => {
  const response = error.response as AxiosResponse;

  if (response?.data) {
    console.log(response.data);
  }

  return Promise.reject(error);
};

const onRequestFulfilled = (config: InternalAxiosRequestConfig) => {
  // 쿠키 방식
  // const accessToken = localStorage.getItem("token");

  // if (accessToken) {
  //   config.headers.Authorization = `Bearer ${accessToken}`;
  // }

  return config;
};

const onResponseFulfilled = (response: AxiosResponse) => {
  return response.data;
};

const onResponseRejected = (error: AxiosError) => {
  if (!isAxiosError(error) || !error.response) return Promise.reject(error);
  const { status: errorStatus } = error.response;
  if (errorStatus === 401) {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return Promise.reject(error.response);
};

axiosInstance.interceptors.request.use(onRequestFulfilled, onRequestRejected);
axiosInstance.interceptors.response.use(
  onResponseFulfilled,
  onResponseRejected,
);

export default axiosInstance;
