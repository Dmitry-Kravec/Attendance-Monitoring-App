const updateStudentPairHistoryData = (state, action) => {
  if (state === undefined || action.type === "USER_EXIT") {
    return {
      pairHistoryList: [],
      pairHistoryIsLoading: false,
      pairHistoryLoadingError: false,
    };
  }

  switch (action.type) {
    case "FETCH_PAIR_HISTORY_REQUESTED":
      return {
        ...state.student.pairHistory,
        pairHistoryIsLoading: true,
        pairHistoryLoadingError: false,
        pairHistoryList: [],
      };

    case "FETCH_PAIR_HISTORY_SUCCESS":
      return {
        ...state.student.pairHistory,
        pairHistoryList: action.payload,
        pairHistoryIsLoading: false,
      };

    case "FETCH_PAIR_HISTORY_FAILURE":
      return {
        ...state.student.pairHistory,
        pairHistoryIsLoading: false,
        pairHistoryLoadingError: true,
      };

    case "LOGIN_PAIR_HISTORY_ERROR_RESET":
      return {
        ...state.student.pairHistory,
        pairHistoryLoadingError: true,
      };
    default:
      return state.student.pairHistory;
  }
};

export default updateStudentPairHistoryData;
