import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InputBar = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(todoInput) => props.textChange(todoInput)}
        value={props.todoInput}
        placeholder="Items to Add"
        onSubmitEditing={props.addNewTodo}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={props.addListHandler}>
          <Ionicons
            name="add"
            size={30}
            color="#555"
            style={{ marginLeft: 10, marginRight: 5 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.settingsHandler}>
          <Ionicons
            name="md-options-outline"
            size={30}
            color="#555"
            style={{ marginLeft: 5, marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
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
  input: {
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,
    padding: 15,
    color: "#555",
  },
  addButton: {
    width: 100,
    backgroundColor: "#FFCE00",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonText: {
    color: "#171717",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default InputBar;
