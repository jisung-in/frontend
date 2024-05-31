"use client";

import { createContext, ReactNode, useState } from "react";

export const TabContext = createContext({
  tab: "recent",
  setTab: (value: string) => {},
});

type Props = { children: ReactNode };
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState("recent");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
