export const updateAmineList = (value) => {
  return {
    type: "UPDATE_LIST",
    payload: value,
  };
};

export const loadingList = (value) => {
  return {
    type: "LOADING",
    payload: value,
  };
};

export const newAmineList = (value) => {
  return {
    type: "NEW_LIST",
    payload: value,
  };
};

export const currentQuery = (value) => {
  return {
    type: "CURR_QUERY",
    payload: value,
  };
};

export const incrementPageNumber = () => {
  return {
    type: "INCREMENT_PAGE",
  };
};

export const resetPageNumber = () => {
  return {
    type: "RESET_PAGES",
  };
};
