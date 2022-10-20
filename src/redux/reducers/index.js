import updateCurrentNavTab from "./update-current-nav-tab";
import updateLoginData from "./update-login-data";
import updateStudentData from "./update-student-data";
import updateTeacherData from "./update-teacher-data";

const initialState = {
  login: {
    isLoggedIn: false,
    loginError: false,
    loginDataSentToServer: false,

    user: {
      userRole: "",
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  },

  student: {
    pairHistoryList: [],
    pairHistoryIsLoading: false,
    pairHistoryLoadingError: false,

    qrServerResponseWaiting: false,
    qrServerResponseStatus: null,
    qrServerResponseErrorMessage: "",
    qrServerResponseLessonName: "",
    qrServerResponseError: false,
  },
  teacher: {
    lessonList: [],
    lessonListIsLoading: false,
    lessonListLoadingError: false,

    lessonInfo: null,
    lessonInfoID: null,
    lessonInfoIsLoading: false,
    lessonInfoLoadingError: false,

    lessonQrCodePageShow: false,
    lessonQrCode: null,
    lessonQrCodeLoading: false,
    lessonQrCodeLoadingError: false,
  },
  currentNavigationTab: "",
};

const reducer = (state, action) => {
  return {
    login: updateLoginData(state, action),
    student: updateStudentData(state, action),
    teacher: updateTeacherData(state, action),
    currentNavigationTab: updateCurrentNavTab(state, action),
  };
};

export default reducer;
