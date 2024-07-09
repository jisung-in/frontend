const changeIsStatus = (
  status: string,
  currentUrl: string,
  searchParam: string,
) => {
  const order = status === "recent" ? "recent" : "recommend";
  const search = searchParam ? `&search=${searchParam}` : "";
  return `${currentUrl}/?order=${order}${search}`;
};

export default changeIsStatus;
