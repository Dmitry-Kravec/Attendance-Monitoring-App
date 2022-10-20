const updateTeacherLessonInfoData = (state, action) => {
  if (state === undefined || action.type === "USER_EXIT") {
    return {
      lessonInfo: null,
      lessonInfoID: null,
      lessonInfoIsLoading: false,
      lessonInfoLoadingError: false,
    };
  }

  switch (action.type) {
    case "TEACHER_LESSON_INFO_CHOOSED":
      return {
        ...state.teacher.lesInfo,
        lessonInfoID: action.payload,
        lessonInfo: null,
      };

    case "FETCH_TEACHER_LESSON_INFO_REQUESTED":
      return {
        ...state.teacher.lesInfo,
        lessonInfo: null,
        lessonInfoIsLoading: true,
        lessonInfoLoadingError: false,
      };

    case "FETCH_TEACHER_LESSON_INFO_SUCCESS":
      return {
        ...state.teacher.lesInfo,
        lessonInfoIsLoading: false,
        lessonInfo: action.payload,
      };

    case "FETCH_TEACHER_LESSON_INFO_FAILURE":
      return {
        ...state.teacher.lesInfo,
        lessonInfoIsLoading: false,
        lessonInfoLoadingError: action.payload,
      };

    case "TEACHER_LESSON_LESSON_INFO_RESET":
      return {
        ...state.teacher.lesInfo,
        lessonInfo: null,
        lessonInfoID: null,
        lessonInfoIsLoading: false,
        lessonInfoLoadingError: false,
      };
    default:
      return state.teacher.lesInfo;
  }
};

export default updateTeacherLessonInfoData;
