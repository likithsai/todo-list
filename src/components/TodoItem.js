import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Appearance
} from "react-native";
import { lightTheme, darkTheme } from "../themes/Themes";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorScheme: "light",
    };
  }

  getSelectedItem(status) {
    if(status) {
      if(this.state.colorScheme === "light") {
        return lightTheme.TODOListTodoTitleSelected
      } else {
        return darkTheme.TODOListTodoTitleSelected
      }
    } else {
      if(this.state.colorScheme === "light") {
        return lightTheme.TODOListTodoTitleUnselected
      } else {
        return darkTheme.TODOListTodoTitleUnselected
      }
    }
  }

  async componentWillMount() {
    //  Set theme color for the application
    this.setState({ colorScheme: Appearance.getColorScheme() });
  }
  
  render() {
    const todoItem = this.props.todoItem;

    return (
      <TouchableOpacity
        style={[
          this.state.colorScheme === "light" ? lightTheme.TODOListTodoItem : darkTheme.TODOListTodoItem,
          todoItem.done ? (this.state.colorScheme === "light" ? lightTheme.TODOListBoxShadowWithSelected : darkTheme.TODOListBoxShadowWithSelected) : "",
        ]}
        onPress={() => this.props.onItemClick()}
        onLongPress={() => this.props.onItemLongClick()}
      >
        <View style={this.state.colorScheme === "light" ? lightTheme.TODOListTextContainer : darkTheme.TODOListTextContainer }>
          <View style={{ width: "100%" }}>
            <Text
              numberOfLines={2}
              maxLines={2}
              ellipsizeMode="tail"
              style={
                // todoItem.done 
                //   : this.state.colorScheme === "light" ? lightTheme.TODOListTodoTitleSelected : darkTheme.TODOListTodoTitleSelected
                //   : this.state.colorScheme === "light" ? lightTheme.TODOListTodoTitleUnselected : darkTheme.TODOListTodoTitleUnselected
                this.getSelectedItem(todoItem.done)
              }
            >
              {todoItem.title}
            </Text>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <Text numberOfLines={3} maxLines={3} ellipsizeMode="tail" style={ this.state.colorScheme === "light" ? lightTheme.TODOListDateText : darkTheme.TODOListDateText }>
                  {todoItem.description}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={this.state.colorScheme === "light" ? lightTheme.TODOListDateText : darkTheme.TODOListDateText }>{todoItem.date}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

// const styles = StyleSheet.create({
//   textContainer: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     width: "100%",
//   },
//   todoItem: {
//     width: Dimensions.get("window").width,
//     borderBottomColor: "#DDD",
//     borderBottomWidth: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 30,
//     paddingVertical: 20,
//   },
//   todoTitleSelected: {
//     fontWeight: "bold",
//     color: "#4B0082",
//     fontSize: 18,
//   },
//   todoTitleUnselected: {
//     fontWeight: "bold",
//     color: "rgba(75, 0, 130, 0.6)",
//     fontSize: 18,
//   },
//   boxShadowWithSelected: {
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 3,
//     borderRadius: 0,
//     backgroundColor: "#fff",
//   },
//   dateText: {
//     fontSize: 15,
//     color: "#aaa",
//     marginVertical: 10,
//   },
//   categoryText: {
//     fontSize: 15,
//     color: "#aaa",
//   },
//   categoryText: {
//     marginVertical: 10,
//     color: "#666",
//     flexDirection: "row",
//     alignItems: "center",
//   },
// });
