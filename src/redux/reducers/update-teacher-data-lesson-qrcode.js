const updateTeacherLessonQrCodeData = (state, action) => {
  if (state === undefined || action.type === "USER_EXIT") {
    return {
      lessonQrCodePageShow: false,
      lessonQrCode: null,
      lessonQrCodeLoading: false,
      lessonQrCodeLoadingError: false,
    };
  }

  switch (action.type) {
    case "FETCH_TEACHER_QR_REQUESTED":
      return {
        ...state.teacher.lesQrCode,
        lessonQrCode: null,
        lessonQrCodeLoading: true,
        lessonQrCodePageShow: true,
        lessonQrCodeLoadingError: false,
      };

    case "FETCH_TEACHER_QR_SUCCESS":
      return {
        ...state.teacher.lesQrCode,
        lessonQrCode: action.payload.qrCode,
        lessonQrCodeLoading: false,
      };

    case "FETCH_TEACHER_QR_FAILURE":
      return {
        ...state.teacher.lesQrCode,
        lessonQrCode: null,
        lessonQrCodeLoading: false,
        lessonQrCodeLoadingError: true,
      };

    case "TEACHER_LESSON_QR_RESET":
      return {
        ...state.teacher.lesQrCode,
        lessonQrCodePageShow: false,
        lessonQrCode: null,
        lessonQrCodeLoading: false,
        lessonQrCodeLoadingError: false,
      };
    default:
      return state.teacher.lesQrCode;
  }
};

export default updateTeacherLessonQrCodeData;
