import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity,LogBox } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";

function BottomTab({ currentRouteName, navigationRef }) {
  const [isInHome, setIsInHome] = useState(true)

  LogBox.ignoreAllLogs(true)

  console.log(currentRouteName);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            try {
              navigationRef.navigate("Home");
              setIsInHome(true);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Entypo
            style={styles.icon}
            name="home"
            size={40}
            color={isInHome ? "#31905D" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigationRef.navigate("SearchLocation");
            setIsInHome(false);
          }}
        >
          <FontAwesome
            style={styles.icon}
            name="search"
            size={40}
            color={!isInHome ? "#31905D" : "white"}
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
