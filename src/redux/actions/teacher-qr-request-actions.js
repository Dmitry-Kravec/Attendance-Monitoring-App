const teacherQrRequested = () => {
  return {
    type: "FETCH_TEACHER_QR_REQUESTED",
  };
};

const teacherQrOK = (qrObject) => {
  console.log("qrObject: ", qrObject);
  return {
    type: "FETCH_TEACHER_QR_SUCCESS",
    payload: qrObject,
  };
};

const teacherQrError = (error) => {
  return {
    type: "FETCH_TEACHER_QR_FAILURE",
    payload: error,
  };
};

const teacherQrReset = () => {
  return {
    type: "TEACHER_LESSON_QR_RESET",
  };
};

export { teacherQrRequested, teacherQrOK, teacherQrError, teacherQrReset };
