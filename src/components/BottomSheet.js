import React from "react";
import { Dimensions, View, TouchableOpacity } from "react-native";

export default class BottomSheet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible) {
      return (
        <View
          style={{
            width: Dimensions.get("window").width,
            paddingHorizontal: 30,
            paddingVertical: 15,
            backgroundColor: "#fff",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
            position: "absolute",
            bottom: 0,
          }}
        >
          {this.props.children}
        </View>
      );
    } else {
      return null;
    }
  }
}
