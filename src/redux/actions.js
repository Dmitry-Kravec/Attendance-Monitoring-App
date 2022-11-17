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
            dispatch(loginIsOK(user.data));
        })
        .catch((err) => {
            dispatch(loginError(err));
        });
};

const fetchStudentPairHistory = (dispatch) => (appService) => (email) => {
    dispatch(pairHistoryRequested());

    appService
        .getStudentPairsHistory(email)
        .then((pairList) => {
            dispatch(pairHistoryOK(pairList.data));
        })
        .catch((err) => {
            dispatch(pairHistoryError(err));
        });
};

const fetchSendStudentQrCode = (dispatch) => (appService) => (user, qrCode) => {
    dispatch(sendStudentQRBegins());

    console.log(appService);
    appService
        .sendStudentQrCode(user, qrCode)
        .then((respons) => {
            dispatch(studentQRSendOK(respons.data));
        })
        .catch((err) => {
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
            dispatch(teacherLessonListOK(lessonList.data));
        })
        .catch((err) => {
            dispatch(teacherLessonListError(err));
        });
};

const fetchTeacherLessonInfo = (dispatch) => (appService) => (lessonID) => {
    dispatch(teacherLessonInfoRequested());

    appService
        .getTeacherLessonInfo(lessonID)
        .then((lessonInfo) => {
            dispatch(teacherLessonInfoOK(lessonInfo.data));
        })
        .catch((err) => {
            dispatch(teacherLessonInfoError(err));
        });
};

const fetchTeacherQr =
    (dispatch) =>
    (appService) =>
    (ID, isNewPair = false) => {
        dispatch(teacherQrRequested());

        let appServiceMethod;

        if (isNewPair) {
            appServiceMethod = appService.requestNewPairQr;
        } else {
            appServiceMethod = appService.refreshPairQr;
        }

        appServiceMethod(ID)
            .then((lessonInfo) => {
                dispatch(teacherQrOK(lessonInfo.data));
            })
            .catch((err) => {
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
