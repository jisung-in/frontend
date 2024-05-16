const changeIsDate = (date: string, searchParam: string) => {
  if (searchParam) {
    if (date === "~한달 전") {
      return `/talkroom/${searchParam}/?order=recommend&search=${searchParam}&sortbydate=1m&page=1`;
    }
    if (date === "7일전") {
      return `/talkroom/${searchParam}/?order=recommend&search=${searchParam}&sortbydate=1w&page=1`;
    }
    if (date === "하루 전") {
      return `/talkroom/${searchParam}/?order=recommend&search=${searchParam}&sortbydate=1d&page=1`;
    }
  } else {
    if (date === "~한달 전") {
      return "/talkroom/?order=recommend&sortbydate=1m&page=1";
    }
    if (date === "7일전") {
      return "/talkroom/?order=recommend&sortbydate=1w&page=1";
    }
    if (date === "하루 전") {
      return "/talkroom/?order=recommend&sortbydate=1d&page=1";
    }
  }
  return "not-found";
};

export default changeIsDate;
