export const amineListReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_LIST":
      return [...state, action.payload];
    case "NEW_LIST":
      return [];
    default:
      return state;
  }
};

export const queryReducer = (state = "", action) => {
  switch (action.type) {
    case "CURR_QUERY":
      return action.payload;
    default:
      return state;
  }
};

export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case "ERROR":
      return action.payload;
    default:
      return state;
  }
};

export const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case "LOADING":
      return action.payload;
    default:
      return state;
  }
};

export const pageNumberReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT_PAGE":
      return state + 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
