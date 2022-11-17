import React, { useMemo } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import appServiceContext from "./app-service-context";

import { fetchStudentPairHistory } from "../redux/actions";
import useFlatListState from "./hooks/useFlatListState";
import useFlatListFetchData from "./hooks/useFlatListFetchData";

import StudentPairHistoryListItem from "./student-pair-history-list-item";
import FlatListEmptyComponent from "./flat-list-empty-component";

import styles from "../styles/main-user-item-list-style";

const StudentPairHistoryList = ({
    email,
    pairHistoryList,
    pairHistoryIsLoading,
    pairHistoryLoadingError,
    fetchStudentPairHistory,
}) => {
    const [isRefreshing, setIsRefreshing, endReachCounter, setEndReachCounter] =
        useFlatListState();

    useFlatListFetchData(
        appServiceContext,
        fetchStudentPairHistory,
        email,
        isRefreshing
    );

    const sortPairHistoryList = useMemo(() => {
        return [...pairHistoryList].sort((a, b) => {
            const aTime = new Date(a.startTime).getTime();
            const bTime = new Date(b.startTime).getTime();
            return aTime - bTime < 0 ? 1 : -1;
        });
    }, [pairHistoryList]);

    return (
        <FlatList
            data={sortPairHistoryList.slice(0, 20 * endReachCounter)}
            renderItem={({ item }) => {
                return <StudentPairHistoryListItem pair={item} />;
            }}
            keyExtractor={(item) => item.pairPairID}
            ListHeaderComponent={
                <Text style={styles.textHeader}>История посещений:</Text>
            }
            ListEmptyComponent={
                <FlatListEmptyComponent
                    itemListIsLoading={pairHistoryIsLoading}
                    itemListLoadingError={pairHistoryLoadingError}
                    itemListLength={sortPairHistoryList.length}
                />
            }
            contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponentStyle={styles.ListHeaderComponentStyle}
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
    student: {
        pairHistory: {
            pairHistoryList,
            pairHistoryIsLoading,
            pairHistoryLoadingError,
        },
    },
    login: {
        user: { email },
    },
}) => {
    return {
        pairHistoryList,
        pairHistoryIsLoading,
        pairHistoryLoadingError,
        email,
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        fetchStudentPairHistory: fetchStudentPairHistory(dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(StudentPairHistoryList);
