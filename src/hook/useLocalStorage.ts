import { useEffect, useState } from "react";

export const useLocalStorage = (value: string | string[]) => {
  const [list, setList] = useState();

  useEffect(() => {
    const savedSearches = JSON.parse(
      localStorage.getItem("recentSearches") || "[]",
    );
    setList(savedSearches);
  }, []);

  const storeItem = (word: string) => {
    
  }

  return { list };
};
