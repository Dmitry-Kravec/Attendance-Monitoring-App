import React, { useMemo } from "react";
import { View, Text, FlatList } from "react-native";

import TeacherLessonInfoPairListItem from "./teacher-lesson-info-pair-list-item";

import useFlatListState from "./hooks/useFlatListState";

import styles from "../styles/teacher-lesson-info-pair-list-style";

const TeacherLessonInfoPairList = ({ pairsList }) => {
    const [, , endReachCounter, setEndReachCounter] = useFlatListState();

    const sortPairList = useMemo(() => {
        return [...pairsList].sort((a, b) => {
            const aTime = new Date(a.dateTime).getTime();
            const bTime = new Date(b.dateTime).getTime();
            return aTime - bTime < 0 ? 1 : -1;
        });
    }, [pairsList]);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={sortPairList.slice(0, endReachCounter * 10)}
                renderItem={({ item }) => {
                    return <TeacherLessonInfoPairListItem pair={item} />;
                }}
                keyExtractor={(item) => item.pairID}
                ListHeaderComponent={
                    <View style={styles.listHeader}>
                        <Text>Журнал занятий</Text>
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

export default TeacherLessonInfoPairList;
