// Action for adding new amine list in previous list
export const updateAmineList = (value) => {
  return {
    type: "UPDATE_LIST",
    payload: value,
  };
};

// Loading action , during the time of fetching data from API
export const loadingList = (value) => {
  return {
    type: "LOADING",
    payload: value,
  };
};

// Error action , if any error occured after fetching data
export const error = (value) => {
  return {
    type: "ERROR",
    payload: value,
  };
};

// Clear Previous list , and update with new amine list , after search
export const newAmineList = (value) => {
  return {
    type: "NEW_LIST",
    payload: value,
  };
};

// Current search query
export const currentQuery = (value) => {
  return {
    type: "CURR_QUERY",
    payload: value,
  };
};
// Increment page number / load more function
export const incrementPageNumber = () => {
  return {
    type: "INCREMENT_PAGE",
  };
};

// Reset previous pages after searching new amine
export const resetPageNumber = () => {
  return {
    type: "RESET_PAGES",
  };
};
