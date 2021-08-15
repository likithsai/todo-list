import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import BottomSheet from "./BottomSheet";

export default class AddEditTodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: "",
      todoDescription: "",
    };
  }

  render() {
    return (
      <BottomSheet visible={this.props.visible}>
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
            style={{ fontWeight: "bold", color: "#4B0082" }}
          >
            {this.props.HeaderTitle}
          </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <TextInput
            style={{
              fontSize: 16,
              paddingVertical: 15,
              color: "#555",
              fontWeight: "bold",
              width: "100%",
            }}
            onChangeText={(todoInput) => {
              this.setState({ todoTitle: todoInput });
            }}
            value={this.state.todoInput}
            placeholder={this.props.TODOTitlePlaceholder}
          />
          <TextInput
            style={{
              fontSize: 16,
              paddingVertical: 15,
              color: "#555",
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
            <Text style={{ fontWeight: "bold", color: "#4B0082" }}>
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
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    );
  }
}
