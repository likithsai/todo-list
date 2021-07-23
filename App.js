import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar, SectionList } from 'react-native';
import InputBar from './src/components/InputBar';
import TodoItem from './src/components/TodoItem';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  constructor () {
      super();

      this.state = {
        todoInput: '',
        todos: [
          // { id: 0, title: 'Take out the trash', done: false, date: '1029384756' },
          // { id: 1, title: 'Cook dinner', done: false, date: '1029384756' }
        ]
      }
  }

  addNewTodo () {
      let todos = this.state.todos;
      var today = new Date();

      todos.unshift({
        id: todos.length + 1,
        title: this.state.todoInput,
        done: false,
        // date: today.toString().split(" ")[0] + " " + today.getDate() + ", " + today.getFullYear()
        date: today.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
      });

      this.setState({
        todos: todos,
        todoInput: ''
      });
  }

  toggleDone (item) {
      let todos = this.state.todos;

      todos = todos.map((todo) => {
        if (todo.id == item.id) {
          todo.done = !todo.done;
        }

        return todo;
      })

      this.setState({todos});
  }

  removeTodo (item) {
      let todos = this.state.todos;
      todos = todos.filter((todo) => todo.id !== item.id);
      this.setState({todos});
  }

  EmptyListMessage = ({item}) => {
    return (
      // Flat List Item
      <View style={styles.emptyListStyle}>
        <Ionicons name="albums-outline" size={60} color="#555" style={{ marginVertical: 5 }} />
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
            textChange={todoInput => this.setState({ todoInput })}
            todoInput={this.state.todoInput} />

          <DraggableFlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={this.state.todos}
            extraData={this.state}
            onMoveEnd={(todos) => this.setState({todos})}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <TodoItem todoItem={item} toggleDone={() => this.toggleDone(item)} removeTodo={() => this.removeTodo(item)} />
              )
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
    backgroundColor: '#f0f0f0',
  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 20
  },
  emptyListStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyMessageStyle: {
    textAlign: 'center',
    color: '#555',
    fontSize: 18
  }
});
