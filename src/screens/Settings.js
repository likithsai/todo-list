import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
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
            Settings
          </Text>
        </View>
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
