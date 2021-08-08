import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import HeaderBarWithBack from "../components/HeaderBarWithBack";

export default class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <HeaderBarWithBack headerText = "About" backButtonHandler={() => navigation.pop()} />
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
