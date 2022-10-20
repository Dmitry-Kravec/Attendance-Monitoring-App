const loginRequested = () => {
  return {
    type: "FETCH_LOGIN_REQUESTED",
  };
};

const loginIsOK = (user) => {
  return {
    type: "FETCH_LOGIN_SUCCESS",
    payload: user,
  };
};

const loginError = (error) => {
  return {
    type: "FETCH_LOGIN_FAILURE",
    payload: error,
  };
};

const loginErrorReset = () => {
  return {
    type: "LOGIN_ERROR_RESET",
  };
};

export { loginRequested, loginError, loginIsOK, loginErrorReset };
