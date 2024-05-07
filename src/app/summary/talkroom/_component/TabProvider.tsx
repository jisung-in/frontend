"use client";

import { createContext, ReactNode, useState } from "react";

export const TabContext = createContext({
  tab: "created",
  setTab: (value: "created" | "replied" | "liked") => {},
});

type Props = { children: ReactNode };
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState("created");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
