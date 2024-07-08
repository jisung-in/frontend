const changeIsStatus = (
  status: string,
  currentUrl: string,
  searchParam: string,
) => {
  if (searchParam) {
    if (status === "recent") {
      return `${currentUrl}/${searchParam}/?order=recent&search=${searchParam}`;
    }
    if (status === "recommend") {
      return `${currentUrl}/${searchParam}/?order=recommend&search=${searchParam}`;
    }
  } else {
    if (status === "recent") {
      return `${currentUrl}/?order=recent`;
    }
    if (status === "recommend") {
      return `${currentUrl}/?order=recommend`;
    }
  }
  return "not-found";
};

export default changeIsStatus;
