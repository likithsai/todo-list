import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import HeaderBarWithBack from "../components/HeaderBarWithBack";

export default class TodolistDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { route, navigation } = this.props;

    return (
      <View style={styles.container}>
        <HeaderBarWithBack headerText = "" backButtonHandler={() => navigation.pop()} />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 15, marginVertical: 10, flexDirection: 'row', alignItems: 'center', height: '100%' }}>
            {JSON.stringify(route.params)}
          </Text>
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

