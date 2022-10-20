import React from "react";
import { StyleSheet, View, Text } from "react-native";

import styles from "../styles/teacher-lesson-info-student-list-item-style";

const TeacherLessonInfoStudentListItem = ({
  student: { firstName, lastName, sfeduemail },
}) => {
  return (
    <View style={styles.container}>
      <Text>{`${firstName} ${lastName}`}</Text>
      <Text>{sfeduemail}</Text>
    </View>
  );
};

export default TeacherLessonInfoStudentListItem;
