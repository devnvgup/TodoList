const initialState = {
  openDetailPrPopup: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DETAIL_POPUP":
      return { ...state, openDetailPrPopup: true };
    case "CLOSE_DETAIL_POPUP":
      return { ...state, openDetailPrPopup: false };
    default:
      return state;
  }
};

export default reducer;
