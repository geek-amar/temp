const paginateJsonArray = (jsonArray, getPage = 1, perPage = 10) => {
  const pageCount = Math.ceil(jsonArray.length / perPage);
  let page = parseInt(getPage);
  if (!page) {
    page = 1;
  }
  if (page > pageCount) {
    page = pageCount;
  }
  const response = {
    page,
    pageCount,
    data: jsonArray.slice(page * perPage - perPage, page * perPage),
  };

  return response;
};

export default paginateJsonArray;
