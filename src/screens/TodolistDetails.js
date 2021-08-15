import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderBarWithBack from "../components/HeaderBarWithBack";

export default class TodolistDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { route, navigation } = this.props;

    return (
      <View style={styles.container}>
        <HeaderBarWithBack
          headerText={route.params.itemData.title}
          backButtonHandler={() => navigation.pop()}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollView>
            <Text
              style={{
                fontSize: 15,
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "justify"
              }}
            >
              {route.params.itemData.description}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%",
  },
});
