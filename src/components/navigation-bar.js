import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

import { connect } from "react-redux";
import { currentNavigationTabChanged } from "../redux/actions";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/navigation-bar-style";

const studentAndTeacherElements = {
    student: [
        {
            tabName: "история",
            icon: Entypo,
            iconName: "documents",
            text: "История",
        },
        {
            tabName: "сканер",
            icon: MaterialCommunityIcons,
            iconName: "qrcode-scan",
            text: "Сканировать",
        },
        {
            tabName: "профиль",
            icon: AntDesign,
            iconName: "user",
            text: "Профиль",
        },
    ],
    teacher: [
        {
            tabName: "предметы",
            icon: AntDesign,
            iconName: "book",
            text: "Предметы",
        },
        {
            tabName: "профиль",
            icon: AntDesign,
            iconName: "user",
            text: "Профиль",
        },
    ],
};

const NavigationBar = ({
    userRole,
    currentNavigationTab,
    currentNavigationTabChanged,
}) => {
    let elements =
        userRole === "студент"
            ? studentAndTeacherElements.student
            : studentAndTeacherElements.teacher;

    const onElementPress = (index) => {
        currentNavigationTabChanged(elements[index].tabName);
    };
    return (
        <View style={styles.navigationBarContainer}>
            {elements.map(({ icon: Icon, iconName, tabName, text }, index) => {
                const selectedStyle =
                    tabName === currentNavigationTab
                        ? styles.navigationBarSelectedItemTextAndIcon
                        : {};
                return (
                    <TouchableWithoutFeedback
                        onPress={() => onElementPress(index)}
                        key={index}
                    >
                        <View style={[styles.navigationBarItem]}>
                            <Icon
                                name={iconName}
                                size={24}
                                color="gray"
                                style={selectedStyle}
                            />
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.navigationBarItemText,
                                    selectedStyle,
                                ]}
                            >
                                {text}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
};

const mapStateToProps = ({
    currentNavigationTab,
    login: {
        user: { userRole },
    },
}) => {
    return {
        currentNavigationTab,
        userRole,
    };
};

const mapDispathToProps = { currentNavigationTabChanged };

export default connect(mapStateToProps, mapDispathToProps)(NavigationBar);
