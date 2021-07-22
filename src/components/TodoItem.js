import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, Dimensions, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class TodoItem extends React.Component {
    constructor (props) {
      super(props);
    }

    render () {
        const todoItem = this.props.todoItem;

        return (
            <TouchableOpacity
              style={styles.todoItem}
              onPress={() => this.props.toggleDone()}>

                <View style={styles.textContainer}>
                    <Icon
                        name={todoItem.done ? "check-circle" : "radio-button-unchecked"}
                        size={20}
                        style={styles.todoCheck}
                        color="#666666" />  
                    <Text style={todoItem.done ? styles.todoTitleSelected : styles.todoTitleUnselected}>{ todoItem.title }</Text>
                </View>

                <Icon
                    name="delete"
                    style={styles.trailing}
                    size={22}
                    color="#666666"
                    onPress={() => this.props.removeTodo()} />

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%'
    },
    todoCheck: {
      marginRight: '2%',
      color: "green"
    },
    todoItem: {
        width: Dimensions.get('window').width,
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
    },
    todoTitleSelected: {
      fontWeight: 'bold',
      color: "#000",
      fontSize: 16
    },
    todoTitleUnselected: {
        color: "#666",
        fontSize: 16
    }
})