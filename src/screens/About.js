import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import HeaderBarWithBack from "../components/HeaderBarWithBack";

export default class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <HeaderBarWithBack headerText = "About" backButtonHandler={() => navigation.pop()} />
        <View
          style={{
            flex: 1,
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

