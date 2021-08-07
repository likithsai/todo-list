import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStacks from "./src/routes/MyStacks";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <MyStacks />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
