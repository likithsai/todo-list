import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import InputBar from "./src/components/InputBar";
import TodoItem from "./src/components/TodoItem";
import { Ionicons } from "@expo/vector-icons";
// import * as SQLite from "expo-sqlite";

// const db = SQLite.openDatabase("todoList.db");

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoInput: "",
      todos: [
        // { id: 0, title: 'Take out the trash', done: false, date: '1029384756' },
        // { id: 1, title: 'Cook dinner', done: false, date: '1029384756' }
      ],
    };

    // this.createTODODatabase();
    // this.getTODODataFromDatabase();
  }

  // componentDidMount() {
  //   this.createTODODatabase();
  //   this.getTODODataFromDatabase();
  // }

  // //  Create TODO Database
  // createTODODatabase() {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXIST todo_list(todo_id INTEGER PRIMARY KEY NOT NULL, todo_data VARCHAR(200));"
  //     );
  //   });
  // }

  // //  get data from database
  // getTODODataFromDatabase() {
  //   db.transaction((tx) => {
  //     tx.executeSql("SELECT todo_data FROM todo_list", [], (_, { rows }) => {
  //       this.setState({ todos: JSON.stringify(rows) });
  //     });
  //   });
  // }

  // //  Insert item to databse
  // addTODODataToDatabase(values) {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "INSERT INTO todo_list(todo_data) VALUES(?)",
  //       values.toString()
  //     );
  //   });
  // }

  // //  update TODO Data
  // updateTODODataToDatabase(items) {
  //   db.transaction((tx) => {
  //     tx.executeSql("UPDATE todo_list SET todo_data=? WHERE todo_id=1", [
  //       items.toString(),
  //     ]);
  //   });
  // }

  // //  delete all items from database
  // deleteTODOItemsFromDatabase() {
  //   db.transaction((tx) => {
  //     tx.executeSql("DELETE FROM todo_list");
  //   });
  // }

  // deleteAndAddItemsToDatabase() {
  //   this.deleteTODOItemsFromDatabase();
  //   this.addTODODataToDatabase(this.state.todos);
  // }

  addNewTodo() {
    let todos = this.state.todos;
    var today = new Date();

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false,
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
    // this.deleteAndAddItemsToDatabase();
  }

  toggleDone(item) {
    let todos = this.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({ todos });
    // this.deleteAndAddItemsToDatabase();
  }

  removeTodo(item) {
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== item.id);
    this.setState({ todos });
    // this.deleteAndAddItemsToDatabase();
  }

  EmptyListMessage = ({ item }) => {
    return (
      // Flat List Item
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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#f0f0f0" />
        <InputBar
          addNewTodo={() => this.addNewTodo()}
          textChange={(todoInput) => this.setState({ todoInput })}
          todoInput={this.state.todoInput}
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
});
