const updateLoginData = (state, action) => {
  if (state === undefined || action.type === "USER_EXIT") {
    return {
      isLoggedIn: false,
      loginError: false,
      loginDataSentToServer: false,

      user: {
        userRole: "",
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }

  switch (action.type) {
    case "FETCH_LOGIN_REQUESTED":
      return {
        ...state.login,
        isLoggedIn: false,
        loginDataSentToServer: true,
        loginError: false,
      };

    case "FETCH_LOGIN_SUCCESS":
      return {
        ...state.login,
        isLoggedIn: true,
        loginDataSentToServer: false,

        user: action.payload,
      };

    case "FETCH_LOGIN_FAILURE":
      return {
        ...state.login,
        loginDataSentToServer: false,
        loginError: true,
      };

    case "LOGIN_ERROR_RESET":
      return {
        ...state.login,
        loginError: false,
      };

    default:
      return state.login;
  }
};

export default updateLoginData;
