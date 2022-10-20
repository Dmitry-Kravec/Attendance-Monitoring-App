const teacherLessonInfoRequested = () => {
  return {
    type: "FETCH_TEACHER_LESSON_INFO_REQUESTED",
  };
};

const teacherLessonInfoOK = (lessonList) => {
  return {
    type: "FETCH_TEACHER_LESSON_INFO_SUCCESS",
    payload: lessonList,
  };
};

const teacherLessonInfoError = (error) => {
  return {
    type: "FETCH_TEACHER_LESSON_INFO_FAILURE",
    payload: error,
  };
};

const teacherLessonInfoReset = () => {
  return {
    type: "TEACHER_LESSON_LESSON_INFO_RESET",
  };
};

export {
  teacherLessonInfoRequested,
  teacherLessonInfoOK,
  teacherLessonInfoError,
  teacherLessonInfoReset,
};
