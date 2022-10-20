import React from "react";
import { Text, View } from "react-native";

import styles from "../styles/lecture-title-style";

const LectureTitle = ({ lectureTitle }) => {
  return (
    <View style={styles.lectureTitleView}>
      <Text numberOfLines={4} style={styles.lectureTitleText}>
        {lectureTitle}
      </Text>
    </View>
  );
};

export default LectureTitle;
