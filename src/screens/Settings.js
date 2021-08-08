import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import HeaderBarWithBack from "../components/HeaderBarWithBack";

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <HeaderBarWithBack headerText="Settings" backButtonHandler={() => navigation.pop()} />
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <TouchableOpacity
            onPress={() => navigation.push("About") }
            style={{
              backgroundColor: "#fff",
              padding: 25,
              margin: 10,
              width: Dimensions.get("window").width,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 3,
            }}
          >
            <Text style={{ color: "#555", fontSize: 16 }}>About</Text>
          </TouchableOpacity>
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
