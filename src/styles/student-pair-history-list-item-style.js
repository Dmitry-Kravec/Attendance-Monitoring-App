import { StyleSheet } from "react-native";
import { screenDimensionsWidth } from "../constants";

const styles = StyleSheet.create({
    scheduleItemContainer: {
        height: 74,
        // minHeight: 74,
        width: screenDimensionsWidth * 0.9,
        minWidth: 300,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 13,
        borderWidth: 1,
        marginTop: 8,
    },
    scheduleItemTimeContainer: {
        // width: "15%",
        minWidth: 45,
        display: "flex",
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
        padding: 4,
        borderRightWidth: 1,
    },
    scheduleItemTime: {
        fontSize: 12,
    },
    scheduleItemDate: {
        marginTop: 6,
    },
    scheduleItemNameContainer: {
        maxWidth: 150,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#a723f3",
        // paddingTop: 4,
        // paddingBottom: 4,
        padding: 4,
        // borderRightWidth: 1,
    },
    scheduleItemName: {
        textAlign: "center",
        fontSize: 12,
        height: "100%",
        // maxHeight: 66,
        // backgroundColor: "#a22f15",
    },
    scheduleItemlectureType: {
        height: 16,
        textAlign: "center",
        fontSize: 12,
        // backgroundColor: "blue",
    },
    scheduleItemStatusContainer: {
        minWidth: 95,
        // width: "35%",
        // backgroundColor: "#f1a234",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 6,
        paddingBottom: 4,
        borderLeftWidth: 1,
    },
    scheduleItemStatusTextView: {
        width: screenDimensionsWidth > 330 ? 102 : 90,
        height: screenDimensionsWidth > 330 ? 36 : 30,
        borderRadius: 19,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    scheduleItemStatusText: {
        textAlign: "center",
        color: "white",
        fontSize: screenDimensionsWidth > 330 ? 14 : 12,
        // lineHeight: screenDimensionsWidth > 330 ? 30 : 28,
        // backgroundColor: "#1f23f5",
        // width: screenDimensionsWidth > 330 ? 112 : 90,
        // height: screenDimensionsWidth > 330 ? 36 : 30,
        // borderRadius: 19,
        // borderWidth: 1,
    },
    lectureIsSkippedStatus: {
        backgroundColor: "#632121",
    },
    lectureIsSkippedBody: {
        backgroundColor: "#FF5858",
    },
    lectureAttendedStatus: {
        backgroundColor: "#2E6321",
    },
    lectureAttendedBody: {
        backgroundColor: "#A5FF86",
    },
});

export default styles;
