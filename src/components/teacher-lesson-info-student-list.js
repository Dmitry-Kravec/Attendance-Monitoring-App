import React from "react";
import { View, Text, FlatList } from "react-native";

import TeacherLessonInfoStudentListItem from "./teacher-lesson-info-student-list-item";

import useFlatListState from "./hooks/useFlatListState";

import styles from "../styles/teacher-lesson-info-student-list-style";

const TeacherLessonInfoStudentList = ({ studentList }) => {
    const [, , endReachCounter, setEndReachCounter] = useFlatListState();
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={studentList.slice(0, endReachCounter * 10)}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <TeacherLessonInfoStudentListItem student={item} />
                        </View>
                    );
                }}
                keyExtractor={(item) => item.ID}
                ListHeaderComponent={
                    <View style={styles.listHeader}>
                        <Text>Список студентов</Text>
                    </View>
                }
                ListEmptyComponent={
                    <View style={styles.emptyList}>
                        <Text>Список пуст</Text>
                    </View>
                }
                onEndReached={() => {
                    setEndReachCounter(endReachCounter + 1);
                }}
                onEndReachedThreshold={0.3}
            />
        </View>
    );
};

export default TeacherLessonInfoStudentList;
