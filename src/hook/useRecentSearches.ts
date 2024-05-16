import { useState, useEffect } from "react";

const useRecentSearches = (
  key: string = "recentSearches",
  maxItems: number = 10,
) => {
  const [searches, setSearches] = useState<string[]>([]);

  useEffect(() => {
    const savedSearches = JSON.parse(localStorage.getItem(key) || "[]");
    setSearches(savedSearches);
  }, [key]);

  const addSearch = (search: string) => {
    const updatedSearches = [
      search,
      ...searches.filter((s) => s !== search),
    ].slice(0, maxItems);
    setSearches(updatedSearches);
    localStorage.setItem(key, JSON.stringify(updatedSearches));
  };

  const removeSearch = (search: string) => {
    const updatedSearches = searches.filter((s) => s !== search);
    setSearches(updatedSearches);
    localStorage.setItem(key, JSON.stringify(updatedSearches));
  };

  const clearSearches = () => {
    setSearches([]);
    localStorage.removeItem(key);
  };

  return { searches, addSearch, removeSearch, clearSearches };
};

export default useRecentSearches;
