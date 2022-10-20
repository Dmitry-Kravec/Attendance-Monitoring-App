import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import TeacherLessonList from "../teacher-lesson-list";
import TeacherLessonInfo from "../teacher-lesson-info";
import TeacherQrCodeScreen from "../teacher-qr-code-screen";

const TeacherLessonPage = ({ lessonInfoID, lessonQrCodePageShow }) => {
  if (lessonQrCodePageShow) {
    return (
      <View style={styles.container}>
        <TeacherQrCodeScreen />
      </View>
    );
  }

  if (lessonInfoID) {
    return (
      <View style={styles.container}>
        <TeacherLessonInfo />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TeacherLessonList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
  },
});

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
