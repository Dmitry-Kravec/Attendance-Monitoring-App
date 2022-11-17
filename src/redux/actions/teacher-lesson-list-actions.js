const teacherLessonListRequested = () => {
    return {
        type: "FETCH_TEACHER_LESSON_LIST_REQUESTED",
    };
};

const teacherLessonListOK = (lessonList) => {
    return {
        type: "FETCH_TEACHER_LESSON_LIST_SUCCESS",
        payload: lessonList,
    };
};

const teacherLessonListError = (error) => {
    return {
        type: "FETCH_TEACHER_LESSON_LIST_FAILURE",
        payload: error,
    };
};

const teacherLessonListReset = () => {
    return {
        type: "TEACHER_LESSON_LIST_ERROR_RESET",
    };
};

const chooseLessonInfoID = (ID) => {
    console.log("chooseLessonInfoID: ", ID);
    return {
        type: "TEACHER_LESSON_INFO_CHOOSED",
        payload: ID,
    };
};

export {
    teacherLessonListRequested,
    teacherLessonListOK,
    teacherLessonListError,
    teacherLessonListReset,
    chooseLessonInfoID,
};
