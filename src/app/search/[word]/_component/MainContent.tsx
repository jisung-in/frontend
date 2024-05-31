"use client";

import { useContext } from "react";
import BookCards from "./BookCards";
import { TabContext } from "./TabProvider";
import RoomCards from "./RoomCards";
import { useSearchParams } from "next/navigation";
import RelativeRoomCards from "./RelativeRoomCards";

const MainContent = () => {
  const { tab } = useContext(TabContext);
  const params = useSearchParams();
  const name = params.get("name");
  const isbn = params.get("isbn");

  if (tab === "book") return <BookCards />;

  return <>{isbn && <RelativeRoomCards isbn={isbn} />}</>;
};

export default MainContent;
