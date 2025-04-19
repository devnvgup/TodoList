const initialState = {
  projectList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projectList: [...state.projectList, action.payload],
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projectList: projectList.filter((item) => item != action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
