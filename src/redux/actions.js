import {
  loginError,
  loginRequested,
  loginIsOK,
  loginErrorReset,
} from "./actions/login-actions";

import {
  pairHistoryRequested,
  pairHistoryOK,
  pairHistoryError,
  pairHistoryReset,
} from "./actions/student-pair-history-actions";

import {
  sendStudentQRBegins,
  studentQRSendOK,
  studentQRSendError,
  studentQRSendErrorReset,
} from "./actions/student-send-qr-action";

import {
  teacherLessonListRequested,
  teacherLessonListOK,
  teacherLessonListError,
  teacherLessonListReset,
  chooseLessonInfoID,
} from "./actions/teacher-lesson-list-actions";

import {
  teacherLessonInfoRequested,
  teacherLessonInfoOK,
  teacherLessonInfoError,
  teacherLessonInfoReset,
} from "./actions/teacher-lesson-info-actions";

import {
  teacherQrRequested,
  teacherQrOK,
  teacherQrError,
  teacherQrReset,
} from "./actions/teacher-qr-request-actions";

const currentNavigationTabChanged = (newTabName) => {
  return {
    type: "CHANGE_NAVIGATION_TAB",
    payload: newTabName,
  };
};

const userExit = () => {
  return {
    type: "USER_EXIT",
  };
};

const fetchLogin = (dispatch) => (appService) => (userData) => {
  dispatch(loginRequested());

  appService
    .login(userData)
    .then((user) => {
      // console.log("fetchLogin user:", user.data);
      dispatch(loginIsOK(user.data));
    })
    .catch((err) => {
      //console.log("fetchLogin ERror:", err);
      dispatch(loginError(err));
    });
};

const fetchStudentPairHistory = (dispatch) => (appService) => (email) => {
  dispatch(pairHistoryRequested());

  appService
    .getStudentPairsHistory(email)
    .then((pairList) => {
      // console.log("fetchStudentPairHistory pairList:", pairList.data);
      dispatch(pairHistoryOK(pairList.data));
    })
    .catch((err) => {
      //console.log("fetchStudentPairHistory ERror:", err);
      dispatch(pairHistoryError(err));
    });
};

const fetchSendStudentQrCode = (dispatch) => (appService) => (user, qrCode) => {
  dispatch(sendStudentQRBegins());

  console.log(appService);
  appService
    .sendStudentQrCode(user, qrCode)
    .then((respons) => {
      //console.log("fetchSendStudentQrCode:", respons);
      dispatch(studentQRSendOK(respons.data));
    })
    .catch((err) => {
      /*
        err.response
                    .data.message
                    .request.status
      */
      //console.log("fetchSendStudentQrCodeERROR:", err.response.data.message);
      //console.log("fetchSendStudentQrCodeERROR:", err.response.request.status);
      dispatch(
        studentQRSendError(
          err.response.data.message,
          err.response.request.status
        )
      );
    });
};

const fetchTeacherLessonList = (dispatch) => (appService) => (email) => {
  dispatch(teacherLessonListRequested());

  appService
    .getTeacherLessons(email)
    .then((lessonList) => {
      //console.log("fetchTeacherLessonList lessonList:", lessonList.data);
      dispatch(teacherLessonListOK(lessonList.data));
    })
    .catch((err) => {
      //console.log("fetchTeacherLessonList ERror:", err);
      dispatch(teacherLessonListError(err));
    });
};

const fetchTeacherLessonInfo = (dispatch) => (appService) => (lessonID) => {
  dispatch(teacherLessonInfoRequested());

  //console.log("fetchTeacherLessonInfo LESSOnId", lessonID);
  appService
    .getTeacherLessonInfo(lessonID)
    .then((lessonInfo) => {
      //console.log("fetchLessonInfo lessonInfo:", lessonInfo.data);
      dispatch(teacherLessonInfoOK(lessonInfo.data));
    })
    .catch((err) => {
      //console.log("fetchLessonInfo ERror:", err);
      dispatch(teacherLessonInfoError(err));
    });
};

const fetchTeacherQr =
  (dispatch) =>
  (appService) =>
  (ID, isNewPair = false) => {
    dispatch(teacherQrRequested());

    //console.log("fetchTeacherQr Id", ID);
    appService
      .requestTeacherQr(ID, isNewPair)
      .then((lessonInfo) => {
        //console.log("fetchTeacherQr QrInfo:", lessonInfo.data);
        dispatch(teacherQrOK(lessonInfo.data));
      })
      .catch((err) => {
        //console.log("fetchTeacherQr ERror:", err);
        dispatch(teacherQrError(err));
      });
  };

export {
  userExit,
  currentNavigationTabChanged,
  fetchLogin,
  loginErrorReset,
  fetchStudentPairHistory,
  pairHistoryReset,
  fetchSendStudentQrCode,
  studentQRSendErrorReset,
  fetchTeacherLessonList,
  teacherLessonListReset,
  chooseLessonInfoID,
  fetchTeacherLessonInfo,
  teacherLessonInfoReset,
  fetchTeacherQr,
  teacherQrReset,
};
