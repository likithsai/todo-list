import React from "react";
import { Dimensions, View, TouchableOpacity } from "react-native";

export default class BottomSheet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.setState({ optionMenuVisible: false });
          }}
          style={{
            backgroundColor: "rgba(0,0,0,0.1)",
            position: "absolute",
            top: 0,
            left: 0,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        >
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
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }
}
