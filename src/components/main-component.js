import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

import NavigationBar from "./navigation-bar";

import LoginPage from "./pages/login-page";
import StudentScannerPage from "./pages/student-scanner-page";
import UserProfilePage from "./pages/user-profile-page";
import TeacherLessonPage from "./pages/teacher-lesson-page";
import StudentPairHistoryPage from "./pages/student-pair-history-page";

import styles from "../styles/main-component-style";

const MainComponent = ({ isLoggedIn, currentNavigationTab }) => {
    let currentPage;
    switch (currentNavigationTab) {
        case "история":
            currentPage = <StudentPairHistoryPage />;
            break;
        case "сканер":
            currentPage = <StudentScannerPage />;
            break;
        case "профиль":
            currentPage = <UserProfilePage />;
            break;
        case "предметы":
            currentPage = <TeacherLessonPage />;
            break;
        default:
            currentPage = <View></View>;
    }

    return (
        <View style={styles.container}>
            <StatusBar
                style="auto"
                translucent={false}
                backgroundColor="white"
            />

            {!isLoggedIn ? (
                <LoginPage />
            ) : (
                <Fragment>
                    <View style={styles.mainView}>{currentPage}</View>
                    <NavigationBar />
                </Fragment>
            )}
        </View>
    );
};

const mapStateToProps = ({ login: { isLoggedIn }, currentNavigationTab }) => {
    return {
        isLoggedIn,
        currentNavigationTab,
    };
};

export default connect(mapStateToProps, null)(MainComponent);
