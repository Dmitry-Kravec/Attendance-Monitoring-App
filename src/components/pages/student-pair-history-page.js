import React from "react";
import { StyleSheet, View, Text } from "react-native";

import StudentPairHistoryList from "../student-pair-history-list";

const StudentPairHistoryPage = () => {
  return (
    <View style={styles.container}>
      <StudentPairHistoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
  },
});

export default StudentPairHistoryPage;
