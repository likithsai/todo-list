import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoItem = this.props.todoItem;

    return (
      <TouchableOpacity
        style={[
          styles.todoItem,
          todoItem.done ? styles.boxShadowWithSelected : "",
        ]}
        onPress={() => this.props.toggleDone()}
      >
        <View style={styles.textContainer}>
          <View style={{ width: "90%" }}>
            <Text
              style={
                todoItem.done
                  ? styles.todoTitleSelected
                  : styles.todoTitleUnselected
              }
            >
              {todoItem.title}
            </Text>
            <Text style={styles.dateText}>{todoItem.date}</Text>
          </View>
        </View>

        <Ionicons
          name="md-trash-bin-outline"
          size={30}
          color="#666666"
          onPress={() => this.props.removeTodo()}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "90%",
  },
  // todoCheck: {
  //   marginRight: '2%',
  //   color: "green"
  // },
  todoItem: {
    width: Dimensions.get("window").width,
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  todoTitleSelected: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 18,
    width: "90%",
  },
  todoTitleUnselected: {
    fontWeight: "bold",
    color: "#666",
    fontSize: 18,
    width: "90%",
  },
  boxShadowWithSelected: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 0,
    backgroundColor: "#fff",
  },
  dateText: {
    width: "90%",
    fontSize: 12,
    color: "#aaa",
    marginTop: 10,
  },
});
