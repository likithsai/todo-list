import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import InputBar from "../components/InputBar";
import TodoItem from "../components/TodoItem";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      todoInput: "",
      todos: [
        // { id: 0, title: 'Take out the trash', done: false, date: '1029384756' },
        // { id: 1, title: 'Cook dinner', done: false, date: '1029384756' }
      ],
    };
  }

  async componentWillMount() {
    await AsyncStorage.getItem("todoItem")
      .then((value) => {
        if (value !== null) {
          const todoList = JSON.parse(value);
          this.setState({ todos: todoList });
        }
      })
      .catch((err) => console.log("catch", err));
  }

  async addNewTodo() {
    let todos = this.state.todos;
    var today = new Date();

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false,
      selected: false,
      date: today.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      category: "all",
    });

    this.setState({
      todos: todos,
      todoInput: "",
    });

    try {
      await AsyncStorage.setItem("todoItem", JSON.stringify(todos));
    } catch (e) {
      console.log(e);
    }
  }

  async toggleDone(item) {
    let todos = this.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({ todos });
    try {
      await AsyncStorage.setItem("todoItem", JSON.stringify(todos));
    } catch (e) {
      console.log(e);
    }
  }

  async removeTodo(item) {
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== item.id);
    this.setState({ todos });
    try {
      await AsyncStorage.setItem("todoItem", JSON.stringify(todos));
    } catch (e) {
      console.log(e);
    }
  }

  EmptyListMessage = ({ item }) => {
    return (
      <View style={styles.emptyListStyle}>
        <Ionicons
          name="albums-outline"
          size={60}
          color="#555"
          style={{ marginVertical: 5 }}
        />
        <Text style={styles.emptyMessageStyle}>The list is empty</Text>
      </View>
    );
  };

  ListHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingVertical: 8,
          }}
        >
          <Ionicons
            name="duplicate"
            size={15}
            color="#666666"
            style={{ marginRight: 10 }}
          />
          <Text style={[styles.categoryText, { marginVertical: 0 }]}>All</Text>
        </TouchableOpacity>
        <Text style={styles.footerTextStyle}>
          {this.state.todos.length} items
        </Text>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <InputBar
          addNewTodo={() => this.addNewTodo()}
          addListHandler={() =>
            Alert.alert("Alert Title", "My Alert Msg", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ])
          }
          textChange={(todoInput) => this.setState({ todoInput })}
          todoInput={this.state.todoInput}
          settingsHandler={() => navigation.push("Settings") }
        />

        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={this.state.todos}
          extraData={this.state}
          onMoveEnd={(todos) => this.setState({ todos })}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
                removeTodo={() => this.removeTodo(item)}
              />
            );
          }}
          ListEmptyComponent={this.EmptyListMessage}
          ListHeaderComponent={this.ListHeader}
          stickyHeaderIndices={[0]}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  statusbar: {
    backgroundColor: "#FFCE00",
    height: 20,
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
    marginHorizontal: 25,
    marginBottom: 10,
    alignItems: "center",
  },
  footerTextStyle: {
    color: "#666",
  },
});
