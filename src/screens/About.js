import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <View
          style={{
            width: "100%",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ marginVertical: 20, zIndex: 10 }}
          >
            <Ionicons name="arrow-back" size={30} color="#555" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#666",
              fontSize: 20,
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
              position: "absolute",
            }}
          >
            About
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 20, marginVertical: 10 }}>
            Todo List manager
          </Text>
          <Text style={{ fontSize: 15 }}>v 1.0</Text>
        </View>
      </View>
    );
  }
}
