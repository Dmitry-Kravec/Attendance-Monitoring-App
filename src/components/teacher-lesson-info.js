import React, { useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import {
    fetchTeacherLessonInfo,
    teacherLessonInfoReset,
    fetchTeacherQr,
} from "../redux/actions";
import appServiceContext from "./app-service-context";

import LectureTitle from "./lecture-title";
import TeacherLessonInfoPairList from "./teacher-lesson-info-pair-list";
import TeacherLessonInfoStudentList from "./teacher-lesson-info-student-list";
import BackButton from "./back-button";
import CustomButton from "./custom-button";

import styles from "../styles/teacher-lesson-info-style";

const TeacherLessonInfo = ({
    fetchTeacherLessonInfo,
    lessonInfoID,
    teacherLessonInfoReset,
    lessonInfo,
    lessonInfoIsLoading,
    fetchTeacherQr,
}) => {
    const apiService = useContext(appServiceContext);
    useEffect(() => {
        fetchTeacherLessonInfo(apiService)(lessonInfoID);
    }, []);

    if (lessonInfoIsLoading || !lessonInfo) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <BackButton handler={teacherLessonInfoReset} />
            <View style={styles.titleAndButtonContainer}>
                <LectureTitle lectureTitle={lessonInfo.name} />
                <View style={styles.createButtonView}>
                    <CustomButton
                        onPress={() => {
                            fetchTeacherQr(apiService)(lessonInfoID, true);
                        }}
                        title="Создать занятие"
                    />
                </View>
            </View>

            <View style={styles.listsContainer}>
                <TeacherLessonInfoPairList pairsList={lessonInfo.pairsList} />
                <TeacherLessonInfoStudentList
                    studentList={lessonInfo.studentList}
                />
            </View>
        </View>
    );
};

const mapStateToProps = ({
    teacher: {
        lesInfo: { lessonInfoID, lessonInfo, lessonInfoIsLoading },
    },
}) => {
    return {
        lessonInfoID,
        lessonInfo,
        lessonInfoIsLoading,
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        fetchTeacherLessonInfo: fetchTeacherLessonInfo(dispatch),
        teacherLessonInfoReset: () => {
            dispatch(teacherLessonInfoReset());
        },
        fetchTeacherQr: fetchTeacherQr(dispatch),
    };
};

export default connect(mapStateToProps, mapDispathToProps)(TeacherLessonInfo);
