import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  BackHandler,
  TextInput,
} from "react-native";
import InputBar from "../components/InputBar";
import TodoItem from "../components/TodoItem";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomSheet from "../components/BottomSheet";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      optionMenuVisible: false,
      addTODOList: false,
      selectedOptionMenu: "",
      searchInput: '',
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

    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  backAction = () => {
    if (this.state.optionMenuVisible) {
      this.setState({ optionMenuVisible: !this.state.optionMenuVisible });
    }
  };

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
          // addNewTodo={() => this.addNewTodo()}
          addListHandler={() => this.setState({ addTODOList: true })}
          textChange={(todoInput) => this.setState({ searchInput: todoInput })}
          // todoInput={this.state.todoInput}
          searchInput={this.state.searchInput}
          settingsHandler={() => navigation.push("Settings")}
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
                onItemClick={() => {
                  this.setState({ selectedOptionMenu: item });
                  this.setState({
                    optionMenuVisible: !this.state.optionMenuVisible,
                  });
                }}
                toggleDone={() => this.toggleDone(item)}
              />
            );
          }}
          ListEmptyComponent={this.EmptyListMessage}
          ListHeaderComponent={this.ListHeader}
          stickyHeaderIndices={[0]}
        />

        {/* Add todo list */}
        <BottomSheet visible={this.state.addTODOList}>
          <View style={{ marginVertical: 10 }}>
            <Text
              numberOfLines={2}
              maxLines={2}
              ellipsizeMode="tail"
              style={{ fontWeight: "bold" }}
            >
              Add TODO List
            </Text>
          </View>
          <View>
            <TextInput
              style={{
                fontSize: 16,
                paddingVertical: 15,
                color: "#555",
              }}
              onChangeText={(todoInput) => this.setState({ todoInput })}
              value={this.state.todoInput}
              placeholder="Items to Add"
              onSubmitEditing={() => this.addNewTodo()}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.setState({ addTODOList: !this.state.addTODOList });
                this.addNewTodo();
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({
                  addTODOList: !this.state.addTODOList,
                });
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        {/* Bottomsheet */}
        <BottomSheet visible={this.state.optionMenuVisible}>
          <View style={{ marginVertical: 10 }}>
            <Text
              numberOfLines={2}
              maxLines={2}
              ellipsizeMode="tail"
              style={{ fontWeight: "bold" }}
            >
              {this.state.selectedOptionMenu.title}
            </Text>
            <Text style={{ marginTop: 5 }}>
              {this.state.selectedOptionMenu.date}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Ionicons
                name="brush-outline"
                size={25}
                color="#555"
                style={{ marginLeft: 10, marginRight: 20 }}
              />
              <Text>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({
                  optionMenuVisible: !this.state.optionMenuVisible,
                });
                this.removeTodo(this.state.selectedOptionMenu);
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Ionicons
                name="trash-bin-outline"
                size={25}
                color="#555"
                style={{ marginLeft: 10, marginRight: 20 }}
              />
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
  footerTextStyle: {
    color: "#666",
  },
});
