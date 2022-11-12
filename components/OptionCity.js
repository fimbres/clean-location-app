
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const OptionCity = ({id,city,country,navigation}) => {
    
    const selectView = e => {
        navigation.push('LocationDetails')
    }
    return (
        <View style={styles.container} onTouchEnd={selectView} >
            <Text style={styles.city}>{city}</Text>
            <Text style={styles.country}>{country}</Text>
        </View>
    )
}

export default OptionCity;


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        backgroundColor: "#2C2727",
    },
    city: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff"

    },
    country: {
        fontSize: 14,
        color: "#797979"
    }
});