const updateTeacherLessonListData = (state, action) => {
  if (state === undefined || action.type === "USER_EXIT") {
    return {
      lessonList: [],
      lessonListIsLoading: false,
      lessonListLoadingError: false,
    };
  }

  switch (action.type) {
    case "FETCH_TEACHER_LESSON_LIST_REQUESTED":
      return {
        ...state.teacher.lesList,
        lessonList: [],
        lessonListIsLoading: true,
        lessonListLoadingError: false,
      };

    case "FETCH_TEACHER_LESSON_LIST_SUCCESS":
      return {
        ...state.teacher.lesList,
        lessonList: action.payload,
        lessonListIsLoading: false,
      };

    case "FETCH_TEACHER_LESSON_LIST_FAILURE":
      return {
        ...state.teacher.lesList,
        lessonListIsLoading: false,
        lessonListLoadingError: action.payload,
      };

    case "TEACHER_LESSON_LIST_ERROR_RESET":
      return {
        ...state.teacher.lesList,
        lessonList: [],
        lessonListIsLoading: false,
        lessonListLoadingError: false,
      };

    default:
      return state.teacher.lesList;
  }
};

export default updateTeacherLessonListData;
