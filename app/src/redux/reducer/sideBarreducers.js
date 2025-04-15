const initialState = {
  hideSideBar: false,
  blockSidebarResize: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDE_SIDEBAR":
      return { ...state, hideSideBar: true };
    case "OPEN_SIDEBAR":
      return { ...state, hideSideBar: false };
    case "BLOCK_SIDEBAR":
      return { ...state, blockSidebarResize: true };
    case "REMOVE_BLOCK_SIDEBAR":
      return { ...state, blockSidebarResize: false };
    default:
      return state;
  }
};

export default reducer;
