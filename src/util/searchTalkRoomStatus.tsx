const changeIsStatus = (status: string, searchParam: string) => {
  if (searchParam) {
    if (status === "recent") {
      return `/talkroom/${searchParam}/?order=recent&search=${searchParam}&page=1`;
    }
    if (status === "recommend") {
      return `/talkroom/${searchParam}/?order=recommend&search=${searchParam}&sortbydate=&page=1`;
    }
  } else {
    if (status === "recent") {
      return "/talkroom/?order=recent&page=1";
    }
    if (status === "recommend") {
      return "/talkroom/?order=recommend&sortbydate=&page=1";
    }
  }
  return "not-found";
};

export default changeIsStatus;
