import React from "react";
import { Text, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";

import TeacherLessonListItem from "./teacher-lesson-list-item";
import FlatListEmptyComponent from "./flat-list-empty-component";

import appServiceContext from "./app-service-context";
import { fetchTeacherLessonList, chooseLessonInfoID } from "../redux/actions";
import useFlatListState from "./hooks/useFlatListState";
import useFlatListFetchData from "./hooks/useFlatListFetchData";

import styles from "../styles/main-user-item-list-style";

const TeacherLessonList = ({
    fetchTeacherLessonList,
    email,
    lessonList,
    lessonListIsLoading,
    lessonListLoadingError,
    chooseLessonInfoID,
}) => {
    const [isRefreshing, setIsRefreshing, endReachCounter, setEndReachCounter] =
        useFlatListState();

    useFlatListFetchData(
        appServiceContext,
        fetchTeacherLessonList,
        email,
        isRefreshing
    );

    return (
        <FlatList
            data={lessonList.slice(0, 20 * endReachCounter)}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => {
                            chooseLessonInfoID(item.lessonMainID);
                        }}
                    >
                        <TeacherLessonListItem name={item.name} pressHandler />
                    </TouchableOpacity>
                );
            }}
            contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponentStyle={styles.ListHeaderComponentStyle}
            keyExtractor={(item) => item.lessonMainID}
            ListHeaderComponent={
                <Text style={styles.textHeader}>Ваши предметы:</Text>
            }
            ListEmptyComponent={
                <FlatListEmptyComponent
                    itemListIsLoading={lessonListIsLoading}
                    itemListLoadingError={lessonListLoadingError}
                    itemListLength={lessonList.length}
                />
            }
            progressViewOffset={40}
            onEndReached={() => {
                setEndReachCounter(endReachCounter + 1);
            }}
            onEndReachedThreshold={0.3}
            refreshing={isRefreshing}
            onRefresh={() => {
                setIsRefreshing(true);
            }}
        />
    );
};

const mapStateToProps = ({
    login: {
        user: { email },
    },
    teacher: {
        lesList: { lessonList, lessonListIsLoading, lessonListLoadingError },
    },
}) => {
    return {
        email,
        lessonList,
        lessonListIsLoading,
        lessonListLoadingError,
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        fetchTeacherLessonList: fetchTeacherLessonList(dispatch),
        chooseLessonInfoID: (lessonID) => {
            dispatch(chooseLessonInfoID(lessonID));
        },
    };
};

export default connect(mapStateToProps, mapDispathToProps)(TeacherLessonList);
