import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "blue",
  },
  barCodeBox: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    // // borderRadius: 30,
    // backgroundColor: "tomato",
  },
  buttonView: {
    marginTop: 40,
  },
  buttonViewText: {
    marginBottom: 30,
  },
  buttonViewInside: {
    display: "flex",
    height: 90,
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
