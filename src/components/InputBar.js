import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

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
      {/* <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
          <Icon name={"storage"} size={20} color="#666666" style={{ marginRight: '10%' }} /> 
          <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,  
    elevation: 3,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10
  },
  input: {
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 18,
    borderRadius: 5,
    padding: 15
  },
  addButton: {
    width: 100,
    backgroundColor: '#FFCE00',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonText: {
    color: '#171717',
    fontSize: 18,
    fontWeight: '700'
  }
})

export default InputBar;