const updateStudentQrServerResponseData = (state, action) => {
  if (state === undefined || action.type === "USER_EXIT") {
    return {
      qrServerResponseWaiting: false,
      qrServerResponseStatus: null,
      qrServerResponseErrorMessage: "",
      qrServerResponseLessonName: "",
      qrServerResponseError: false,
    };
  }

  switch (action.type) {
    case "FETCH_STUDENT_QR_SEND_BEGINS":
      return {
        ...state.student.qrServerResponse,
        qrServerResponseWaiting: true,
        qrServerResponseError: false,
        qrServerResponseLessonName: "",
        qrServerResponseErrorMessage: "",
        qrServerResponseStatus: null,
      };

    case "FETCH_STUDENT_QR_SEND_SUCCESS":
      return {
        ...state.student.qrServerResponse,
        qrServerResponseWaiting: false,
        qrServerResponseStatus: 200,
        qrServerResponseLessonName: action.payload,
        qrServerResponseError: false,
      };

    case "FETCH_STUDENT_QR_SEND_FAILURE":
      return {
        ...state.student.qrServerResponse,
        qrServerResponseWaiting: false,
        qrServerResponseStatus: action.payload.errorStatusCode,
        qrServerResponseLessonName: "",
        qrServerResponseErrorMessage: action.payload.errorMessage,
        qrServerResponseError: true,
      };

    case "LOGIN_STUDENT_QR_SEND_ERROR_RESET":
      return {
        ...state.student.qrServerResponse,
        qrServerResponseStatus: null,
        qrServerResponseLessonName: "",
        qrServerResponseErrorMessage: "",
        qrServerResponseError: false,
      };
    default:
      return state.student.qrServerResponse;
  }
};

export default updateStudentQrServerResponseData;
