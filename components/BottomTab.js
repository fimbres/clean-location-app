import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";

function BottomTab({ currentRouteName, navigationRef }) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigationRef.navigate("Home");
          }}
        >
          <Entypo style={styles.icon} name="home" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigationRef.navigate("SearchLocation");
          }}
        >
          <FontAwesome
            style={styles.icon}
            name="search"
            size={40}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#2C2727",
  },
  icon: {
    backgroundColor: "#2C2727",
    width: 42,
  },
});
