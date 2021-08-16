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
  headerStyleIcon: {
    marginRight: 10,
    color: "#666",
  },
  headerStyleCategoryText: {
    color: "#000",
  },
  footerTextStyle: {
    color: "#666",
  },

  // InputBar Component
  InputBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  InputBarInput: {
    width: "100%",
    backgroundColor: "#fff",
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,
    padding: 15,
    color: "#555",
  },

  //  TODOItems
  TODOItemsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  TODOItems: {
    width: '100%',
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  TODOItemsTitleSelected: {
    fontWeight: "bold",
    color: "#4B0082",
    fontSize: 18,
  },
  TODOItemsTitleUnselected: {
    fontWeight: "bold",
    color: "rgba(75, 0, 130, 0.6)",
    fontSize: 18,
  },
  TODOItemsBoxShadowWithSelected: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 0,
    backgroundColor: "#fff",
  },
  TODOItemsDateText: {
    fontSize: 15,
    color: "#aaa",
    marginVertical: 10,
  },
  TODOItemsCategoryText: {
    fontSize: 15,
    color: "#aaa",
  },
  TODOItemsCategoryText: {
    marginVertical: 10,
    color: "#666",
    flexDirection: "row",
    alignItems: "center",
  },
});

//  Dark Theme
const darkTheme = StyleSheet.create({
  //  Styles for Home
  container: {
    flex: 1,
    backgroundColor: "#261C2C",
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
    backgroundColor: "#261C2C",
  },
  headerStyleIcon: {
    marginRight: 10,
    color: "#999",
  },
  headerStyleCategoryText: {
    color: "#999",
  },
  footerTextStyle: {
    color: "#999",
  },

  // InputBar Component
  InputBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#3E2C41",
  },
  InputBarInput: {
    width: "100%",
    backgroundColor: "#3E2C41",
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,
    padding: 15,
    color: "#ccc",
  },
});

export { lightTheme, darkTheme };
