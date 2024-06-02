"use client";

import { createContext, ReactNode, useState } from "react";

export const TabContext = createContext({
  tab: "mine",
  setTab: (value: string) => {},
});

type Props = { children: ReactNode };
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState("mine");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
