import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const OptionsLocationScreen = ({ navigation }) => {
    const [text,onChangeText] = React.useState("Ensenada");
  return (
    <View style={styles.container}>
        <Text style={styles.title}>LOGRE LLEGAR</Text>
    </View>
  )
}

export default OptionsLocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3E3939",
        color: "#ffffff"
    },
    title: {
        marginTop: 16,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: "#ffffff"
    },
    input: {
        fontSize: 20,
        alignContent: "center",
        margin: 30,
        padding: 15,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#2C2727",
        borderColor: "#31905D",
        color: "#ffffff"
    }
});