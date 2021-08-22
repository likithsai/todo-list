import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Appearance,
} from "react-native";
import BottomSheet from "./BottomSheet";
import { lightTheme, darkTheme } from "../themes/Themes";

export default class AddEditTodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: "",
      colorScheme: "light",
      todoDescription: JSON.stringify(this.props),
    };
  }

  async componentWillMount() {
    //  Set theme color for the application
    this.setState({ colorScheme: Appearance.getColorScheme() });
  }

  render() {
    return (
      <BottomSheet
        visible={this.props.visible}
        backgroundColor={
          this.state.colorScheme === "light" ? "#fff" : "#3E2C41"
        }
      >
        <View
          style={{
            marginTop: 10,
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            numberOfLines={2}
            maxLines={2}
            ellipsizeMode="tail"
            style={{
              fontWeight: "bold",
              color: [this.state.colorScheme === "light" ? "#000" : "#fff"],
            }}
          >
            {this.props.HeaderTitle}
          </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <TextInput
            style={{
              fontSize: 16,
              paddingVertical: 15,
              color: [this.state.colorScheme === "light" ? "#555" : "#fff"],
              fontWeight: "bold",
              width: "100%",
            }}
            onChangeText={(todoInput) => {
              this.setState({ todoTitle: todoInput });
            }}
            value={this.state.todoTitle}
            placeholder={this.props.TODOTitlePlaceholder}
          />
          <TextInput
            style={{
              fontSize: 16,
              paddingVertical: 15,
              color: [this.state.colorScheme === "light" ? "#555" : "#fff"],
              fontWeight: "bold",
              width: "100%",
            }}
            onChangeText={(todoInput) => {
              this.setState({ todoDescription: todoInput });
            }}
            value={this.state.todoDescription}
            multiline={true}
            numberOfLines={3}
            value={this.state.todoDescription}
            placeholder={this.props.TODOContentPlaceholder}
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
            onPress={() =>
              this.props.onAddEditButtonPress(
                this.state.todoTitle,
                this.state.todoDescription
              )
            }
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: [
                  this.state.colorScheme === "light" ? "#4B0082" : "#fff",
                ],
              }}
            >
              {this.props.addEditButton}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.onCancelButtonPress()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: [this.state.colorScheme === "light" ? "#000" : "#fff"],
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    );
  }
}
