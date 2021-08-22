import React from "react";
import { View, TextInput, TouchableOpacity, Appearance } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { lightTheme, darkTheme } from "../themes/Themes";

export default class InputBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorScheme: "light",
    };
  }

  async componentWillMount() {
    //  Set theme color for the application
    this.setState({ colorScheme: Appearance.getColorScheme() });
  }

  render() {
    return (
      <View
        style={
          this.state.colorScheme === "light"
            ? lightTheme.InputBarContainer
            : darkTheme.InputBarContainer
        }
      >
        <TextInput
          style={
            this.state.colorScheme === "light"
              ? lightTheme.InputBarInput
              : darkTheme.InputBarInput
          }
          onChangeText={(todoInput) => this.props.textChange(todoInput)}
          value={this.props.searchInput}
          placeholder="Search Items"
          placeholderTextColor={this.state.colorScheme === "light" ? "#555" : "#999"}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={this.props.addListHandler}>
            <Ionicons
              name="add"
              size={30}
              color={this.state.colorScheme === "light" ? "#555" : "#999"}
              style={{ marginLeft: 10, marginRight: 5 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.settingsHandler}>
            <Ionicons
              name="md-options-outline"
              size={30}
              color={this.state.colorScheme === "light" ? "#555" : "#999"}
              style={{ marginLeft: 5, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   inputContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 3,
//     marginHorizontal: 20,
//     borderRadius: 10,
//     marginVertical: 10,
//     backgroundColor: "#fff",
//   },
//   input: {
//     width: Dimensions.get("window").width,
//     backgroundColor: "#fff",
//     flex: 1,
//     fontSize: 18,
//     fontWeight: "bold",
//     borderRadius: 10,
//     padding: 15,
//     color: "#555",
//   },
//   addButton: {
//     width: 100,
//     backgroundColor: "#FFCE00",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//     borderTopRightRadius: 5,
//     borderBottomRightRadius: 5,
//   },
//   addButtonText: {
//     color: "#171717",
//     fontSize: 18,
//     fontWeight: "700",
//   },
// });

// const InputBar = (props) => {
//   return (
//     <View style={styles.inputContainer}>
//       {/* <TextInput
//         style={styles.input}
//         onChangeText={(todoInput) => props.textChange(todoInput)}
//         value={props.todoInput}
//         placeholder="Search Items"
//         onSubmitEditing={props.addNewTodo}
//       /> */}
//       <TextInput
//         style={styles.input}
//         onChangeText={(todoInput) => props.textChange(todoInput)}
//         value={props.searchInput}
//         placeholder="Search Items"
//       />
//       <View style={{ flexDirection: "row" }}>
//         <TouchableOpacity onPress={props.addListHandler}>
//           <Ionicons
//             name="add"
//             size={30}
//             color="#555"
//             style={{ marginLeft: 10, marginRight: 5 }}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={props.settingsHandler}>
//           <Ionicons
//             name="md-options-outline"
//             size={30}
//             color="#555"
//             style={{ marginLeft: 5, marginRight: 10 }}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   inputContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 3,
//     marginHorizontal: 20,
//     borderRadius: 10,
//     marginVertical: 10,
//     backgroundColor: "#fff",
//   },
//   input: {
//     width: Dimensions.get("window").width,
//     backgroundColor: "#fff",
//     flex: 1,
//     fontSize: 18,
//     fontWeight: "bold",
//     borderRadius: 10,
//     padding: 15,
//     color: "#555",
//   },
//   addButton: {
//     width: 100,
//     backgroundColor: "#FFCE00",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     alignItems: "center",
//     borderTopRightRadius: 5,
//     borderBottomRightRadius: 5,
//   },
//   addButtonText: {
//     color: "#171717",
//     fontSize: 18,
//     fontWeight: "700",
//   },
// });

// export default InputBar;
