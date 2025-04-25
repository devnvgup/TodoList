const initialState = {
  projectList: [],
  isShowProjectList: false,
  isAddAboveOption: false,
  isAddBelowOption: false,
  isAddDuplicateOption: false,
  isEditOption: false,
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
        projectList: state.projectList.filter(
          (item) => item.id != action.payload
        ),
      };
    case "SHOW_PROJECT_LIST":
      return {
        ...state,
        isShowProjectList: true,
      };
    case "HIDE_PROJECT_LIST":
      return {
        ...state,
        isShowProjectList: false,
      };
    case "ADD_PROJECT_ABOVE": {
      const indexCurrent = state.projectList.findIndex(
        (item) => item.id == action.payload.currentId
      );
      let newPR = [];
      if (indexCurrent) {
        state.projectList.map((item, index) => {
          if (index === indexCurrent - 1) {
            newPR.push(item);
            newPR.push(action.payload.data);
          } else {
            newPR.push(item);
          }
        });
      } else {
        newPR = [action.payload.data, ...state.projectList];
      }
      return {
        ...state,
        projectList: newPR,
      };
    }

    case "ADD_PROJECT_BELOW": {
      const indexCurrent = state.projectList.findIndex(
        (item) => item.id == action.payload.currentId
      );
      let newPR = [];
      if (indexCurrent) {
        state.projectList.map((item, index) => {
          if (index === indexCurrent) {
            newPR.push(item);
            newPR.push(action.payload.data);
          } else {
            newPR.push(item);
          }
        });
      } else {
        newPR = [...state.projectList, action.payload.data];
      }
      return {
        ...state,
        projectList: newPR,
      };
    }

    case "EDIT": {
      const newPR = state.projectList.map((item) => {
        if (item.id == action.payload.currentId) {
          item.projectName = action.payload.data.projectName;
        }
        return item;
      });
      return {
        ...state,
        projectList: newPR,
      };
    }

    case "DUPLICATE": {
      debugger;
      const indexCurrent = state.projectList.findIndex(
        (item) => item.id == action.payload.currentId
      );
      let newPR = [];
      if (indexCurrent) {
        state.projectList.map((item, index) => {
          if (index === indexCurrent) {
            newPR.push(item);
            newPR.push(action.payload.data);
          } else {
            newPR.push(item);
          }
        });
      } else {
        newPR = [...state.projectList, action.payload.data];
      }
      return {
        ...state,
        projectList: newPR,
      };
    }

    case "CHANGE_FLAG_TRUE":
      return {
        ...state,
        [action.payload]: true,
      };

    case "CHANGE_FLAG_FALSE":
      return {
        ...state,
        isAddAboveOption: false,
        isAddBelowOption: false,
        isAddDuplicateOption: false,
        isEditOption: false,
      };
    default:
      return state;
  }
};

export default reducer;
