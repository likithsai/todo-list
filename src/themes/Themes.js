import { StyleSheet } from "react-native";

//  Light Theme
const lightTheme = StyleSheet.create({

  //  Styles for Home
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  emptyListStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyMessageStyle: {
    textAlign: "center",
    color: "#555",
    fontSize: 18,
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  headerStyleIcon : {
    marginRight: 10, 
    color: "#666"
  },
  headerStyleCategoryText : {
    color: "#000"
  },
  footerTextStyle: {
    color: "#666",
  }

});

//  Dark Theme
const darkTheme = StyleSheet.create({

  //  Styles for Home
  container: {
    flex: 1,
    backgroundColor: "#232323",
  },
  emptyListStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyMessageStyle: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 18,
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#232323",
  },
  headerStyleIcon : {
    marginRight: 10, 
    color: "#999"
  },
  headerStyleCategoryText : {
    color: "#999"
  },
  footerTextStyle: {
    color: "#999",
  }
  
});

export { lightTheme, darkTheme };
