import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

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
        onPress={() => this.props.onItemClick() }
        onLongPress={() => this.props.toggleDone()}
      >
        <View style={styles.textContainer}>
          <View style={{ width: "100%" }}>
            <Text
              numberOfLines={2} 
              maxLines={2}
              ellipsizeMode='tail'
              style={
                todoItem.done
                  ? styles.todoTitleSelected
                  : styles.todoTitleUnselected
              }
            >
              {todoItem.title}
            </Text>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.dateText}>{todoItem.date}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
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
    fontSize: 18
  },
  todoTitleUnselected: {
    fontWeight: "bold",
    color: "#666",
    fontSize: 18
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
    fontSize: 15,
    color: "#aaa",
    marginVertical: 10
  },
  categoryText: {
    fontSize: 15,
    color: "#aaa"
  },
  categoryText: {
    marginVertical: 10,
    color: "#666",
    flexDirection: "row",
    alignItems: "center",
  },
});
