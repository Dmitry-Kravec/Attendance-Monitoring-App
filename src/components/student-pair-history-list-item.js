import React from "react";
import { View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { parseServerDate } from "../utils";

import styles from "../styles/student-pair-history-list-item-style";

const ItemStatusStyle = {
  mark: {
    status: styles.lectureAttendedStatus,
    body: styles.lectureAttendedBody,
    text: "Посещено",
  },
  missing: {
    status: styles.lectureIsSkippedStatus,
    body: styles.lectureIsSkippedBody,
    text: "Пропущено",
  },
};

const StudentPairHistoryListItem = ({
  pair: { startTime, status, lessonName, teacherFirstName, teacherLastName },
}) => {
  const { timeString, dateString } = parseServerDate(startTime);

  return (
    <View style={[styles.scheduleItemContainer, ItemStatusStyle[status].body]}>
      <View style={styles.scheduleItemTimeContainer}>
        <Ionicons name="time-outline" size={16} color="black" />
        <Text style={styles.scheduleItemTime}>{timeString}</Text>
        <Text style={[styles.scheduleItemTime, styles.scheduleItemDate]}>
          {dateString}
        </Text>
      </View>

      <View style={styles.scheduleItemNameContainer}>
        <Text style={styles.scheduleItemName} numberOfLines={4}>
          {lessonName}
        </Text>
      </View>

      <View style={styles.scheduleItemStatusContainer}>
        <View
          style={[
            styles.scheduleItemStatusTextView,
            ItemStatusStyle[status].status,
          ]}
        >
          <Text style={styles.scheduleItemStatusText}>
            {ItemStatusStyle[status].text}
          </Text>
        </View>
        <Text style={styles.scheduleItemlectureType}>
          {teacherLastName} {teacherFirstName[0]}.
        </Text>
      </View>
    </View>
  );
};

export default StudentPairHistoryListItem;
