// redux/actions.js
export const handleHideSideBar = (): { type: string } => ({
  type: "HIDE_SIDEBAR",
});

export const handleOpenSideBar = () => ({
  type: "OPEN_SIDEBAR",
});

export const handleBlockSideBar = () => ({
  type: "BLOCK_SIDEBAR",
});

export const handleRemoveBlockSideBar = () => ({
  type: "REMOVE_BLOCK_SIDEBAR",
});

export const handleOpenPrPopup = () => ({
  type: "OPEN_DETAIL_POPUP",
});

export const handleClosePrPopup = () => ({
  type: "CLOSE_DETAIL_POPUP",
});

export const handleAddProject = (payload) => ({
  type: "ADD_PROJECT",
  payload,
});

export const handleDeleteProject = (payload) => ({
  type: "DELETE_PROJECT",
  payload,
});

export const handleShowProjectList = () => ({
  type: "SHOW_PROJECT_LIST",
});

export const handleHideProjectList = () => ({
  type: "HIDE_PROJECT_LIST",
});

export const handleAddPrAbove = (payload) => ({
  type: "ADD_PROJECT_ABOVE",
  payload,
});

export const handleAddPrBelow = (payload) => ({
  type: "ADD_PROJECT_BELOW",
  payload,
});

export const handleChangeOneFlagTrue = (payload) => ({
  type: "CHANGE_FLAG_TRUE",
  payload,
});

export const handleChangeAllFlagFalse = () => ({
  type: "CHANGE_FLAG_FALSE",
});

export const handleEditPR = (payload) => ({
  type: "EDIT",
  payload,
});

export const handleDuplicatePR = (payload) => ({
  type: "DUPLICATE",
  payload,
});
