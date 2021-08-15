import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class HeaderBarWithBack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={this.props.backButtonHandler}
          style={{ marginVertical: 20, zIndex: 10 }}
        >
          <Ionicons name="arrow-back-outline" size={30} color="#555" />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          maxLines={1}
          ellipsizeMode="tail"
          style={{
            color: "#666",
            fontSize: 20,
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            position: "absolute",
          }}
        >
          {this.props.headerText}
        </Text>
      </View>
    );
  }
}
