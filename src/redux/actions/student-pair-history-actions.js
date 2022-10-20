const pairHistoryRequested = () => {
  return {
    type: "FETCH_PAIR_HISTORY_REQUESTED",
  };
};

const pairHistoryOK = (pairList) => {
  return {
    type: "FETCH_PAIR_HISTORY_SUCCESS",
    payload: pairList,
  };
};

const pairHistoryError = (error) => {
  return {
    type: "FETCH_PAIR_HISTORY_FAILURE",
    payload: error,
  };
};

const pairHistoryReset = () => {
  return {
    type: "LOGIN_PAIR_HISTORY_ERROR_RESET",
  };
};

export {
  pairHistoryRequested,
  pairHistoryOK,
  pairHistoryError,
  pairHistoryReset,
};
