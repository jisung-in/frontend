import axios, { AxiosInstance } from "axios";

class Service {
  protected http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: process.env.NEXT_PUBLIC_SERVER,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default Service;
