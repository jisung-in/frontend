type ChangeUrlParams = {
  status: "recent" | "recommend";
  date?: "~한달 전" | "7일전" | "하루 전";
  searchParam?: string;
};

const changeUrl = ({ status, date, searchParam }: ChangeUrlParams) => {
  const baseUrl = `/talkroom/${searchParam ? `${searchParam}/` : ""}`;
  const search = searchParam ? `&search=${searchParam}` : "";
  const order = status === "recent" ? "recent" : "recommend";
  let sortbydate = "";
  switch (date) {
    case "~한달 전":
      sortbydate = "1m";
      break;
    case "7일전":
      sortbydate = "1w";
      break;
    case "하루 전":
      sortbydate = "1d";
      break;
    default:
      sortbydate = "";
      break;
  }
  const sortbydateParam = sortbydate ? `&sortbydate=${sortbydate}` : "";

  return `${baseUrl}?order=${order}${search}${sortbydateParam}`;
};

export default changeUrl;
