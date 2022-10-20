import React from "react";
import { StyleSheet, View, Text } from "react-native";

import styles from "../styles/teacher-lesson-list-item-style";

const TeacherLessonListItem = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default TeacherLessonListItem;
