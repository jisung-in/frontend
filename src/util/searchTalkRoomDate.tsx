const dateMap: { [key in "~한달 전" | "7일전" | "하루 전"]: string } = {
  "~한달 전": "1m",
  "7일전": "1w",
  "하루 전": "1d",
};

const changeIsDate = (date: string, searchParam: string) => {
  const sortbydate = dateMap[date as "~한달 전" | "7일전" | "하루 전"] || date;
  const baseUrl = `/talkroom/${searchParam ? `${searchParam}/` : ""}`;
  const isSearch = searchParam ? `&search=${searchParam}` : "";

  return `${baseUrl}?order=recommend${isSearch}&sortbydate=${sortbydate}`;
};

export default changeIsDate;
