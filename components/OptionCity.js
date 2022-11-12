
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const OptionCity = ({city,country}) => {
    
  return (
    <View style={styles.container}>
        <Text>{city}</Text>
        <Text>{country}</Text>
    </View>
  )
}

export default OptionCity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        padding: 20,
        backgroundColor: "#2C2727",
        color: "#ffffff"
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