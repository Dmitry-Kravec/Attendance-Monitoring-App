import React from "react";
import { View, Text } from "react-native";
import { parseServerDate } from "../utils";

import styles from "../styles/teacher-lesson-info-pair-list-item-style";

const TeacherLessonInfoPairListItem = ({ pair: { dateTime } }) => {
  const { timeString, dateString } = parseServerDate(dateTime);

  return (
    <View style={styles.container}>
      <Text>Дата: {dateString}</Text>
      <Text>Время: {timeString}</Text>
    </View>
  );
};

export default TeacherLessonInfoPairListItem;
