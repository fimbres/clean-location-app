import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import OptionCity from '../components/OptionCity';
const OptionsLocationScreen = ({ navigation }) => {
    const [text,onChangeText] = React.useState("Ensenada");
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Where do yo want to travel?</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        ></TextInput>
        <OptionCity city="Ensenada" country="Mexico">
        </OptionCity>

    </View>
  )
}

export default OptionsLocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 16,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold"
    },
    input: {
        marginTop: 16,
        fontSize: 16,
        alignContent: "center",
        height: 40,
        margin: 30,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    }
});