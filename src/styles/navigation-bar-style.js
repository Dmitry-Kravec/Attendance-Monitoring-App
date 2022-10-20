import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navigationBarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#C8C8C8", //"#F1F1F1",
    paddingBottom: 8,
    // backgroundColor: "blue",
  },
  navigationBarItem: {
    display: "flex",
    alignItems: "center",
    paddingTop: 8,
    // width: screenDimensionsWidth > 330 ? 80 : 70,
  },
  navigationBarItemText: {
    color: "gray",
    maxWidth: 90,
  },
  navigationBarSelectedItemTextAndIcon: {
    color: "#033868",
    textShadowColor: "#033868",
    textShadowRadius: 3,
    // textShadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
  },
});

export default styles;
