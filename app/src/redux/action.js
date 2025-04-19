// redux/actions.js
export const handleHideSideBar = () => ({
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
