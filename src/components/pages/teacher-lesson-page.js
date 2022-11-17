import React from "react";
import { connect } from "react-redux";

import TeacherLessonList from "../teacher-lesson-list";
import TeacherLessonInfo from "../teacher-lesson-info";
import TeacherQrCodeScreen from "../teacher-qr-code-screen";

const TeacherLessonPage = ({ lessonInfoID, lessonQrCodePageShow }) => {
    if (lessonQrCodePageShow) {
        return <TeacherQrCodeScreen />;
    }

    if (lessonInfoID) {
        return <TeacherLessonInfo />;
    }

    return <TeacherLessonList />;
};

const mapStateToProps = ({
    teacher: {
        lesInfo: { lessonInfoID },
        lesQrCode: { lessonQrCodePageShow },
    },
}) => {
    return {
        lessonInfoID,
        lessonQrCodePageShow,
    };
};

export default connect(mapStateToProps, null)(TeacherLessonPage);
