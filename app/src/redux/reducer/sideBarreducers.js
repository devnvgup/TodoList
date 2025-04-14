const initialState = {
  hideSideBar: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDE_SIDEBAR":
      return { ...state, hideSideBar: true };
    case "OPEN_SIDEBAR":
      return { ...state, hideSideBar: false };
    default:
      return state;
  }
};

export default reducer;
