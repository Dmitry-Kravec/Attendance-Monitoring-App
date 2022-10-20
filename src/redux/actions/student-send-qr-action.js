const sendStudentQRBegins = () => {
  return {
    type: "FETCH_STUDENT_QR_SEND_BEGINS",
  };
};

const studentQRSendOK = ({ lessonName }) => {
  return {
    type: "FETCH_STUDENT_QR_SEND_SUCCESS",
    payload: lessonName,
  };
};

const studentQRSendError = (errorMessage, errorStatusCode) => {
  return {
    type: "FETCH_STUDENT_QR_SEND_FAILURE",
    payload: {
      errorMessage,
      errorStatusCode,
    },
  };
};

const studentQRSendErrorReset = () => {
  return {
    type: "LOGIN_STUDENT_QR_SEND_ERROR_RESET",
  };
};

export {
  sendStudentQRBegins,
  studentQRSendOK,
  studentQRSendError,
  studentQRSendErrorReset,
};
