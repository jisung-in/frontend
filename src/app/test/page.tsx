"use client";

import { useGetOneRoom } from "@/hook/reactQuery/talkRoom/useGetOneRoom";
import { useGetRooms } from "@/hook/reactQuery/talkRoom/useGetRooms";
import axios from "axios";
import { useEffect } from "react";
import axiosInstance from "../api/requestApi";

const TestPage = () => {
  const test = async () => {
    try {
      const response = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/user-libraries`,
        {
          isbn: "9791191859836",
          readingStatus: "want",
        },
      );

      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  useEffect(() => {
    test();
  }, []);

  return <div>asdfasdf</div>;
};

export default TestPage;
