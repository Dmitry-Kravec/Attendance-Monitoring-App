const updateCurrentNavTab = (state, action) => {
  if (state === undefined) {
    return "профиль";
  }

  switch (action.type) {
    case "CHANGE_NAVIGATION_TAB":
      return action.payload;

    default:
      return state.currentNavigationTab;
  }
};

export default updateCurrentNavTab;
