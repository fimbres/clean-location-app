import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import OptionCity from '../components/OptionCity';
const OptionsLocationScreen = ({ navigation }) => {
    const [focus, setFocus] = useState(false)
    const [text,onChangeText] = useState("");
    // const [options, setOptions] = useState(false);
    const styles_inpt = StyleSheet.create({
        input: {
            fontSize: 20,
            alignContent: "center",
            margin: 30,
            padding: 15,
            borderWidth: 1,
            borderRadius: 8,
            backgroundColor: "#2C2727",
            borderColor: (focus ? "#31905D" :"#2C2727"),
            color: "#ffffff",
            
        }
    })
    // const changeInpt = (e) => {
    //     onChangeText(e.valueOf());

    // }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Where do yo want to travel?</Text>
        <TextInput
        style={styles_inpt.input}
        // onChangeText={changeInpt}
        selectionColor="#31905D"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={text}
        ></TextInput>
        {/* {
            text == "" ?
            <Image styles={styles.image} source={{uri: '../assets/icon.png',}}>
            </Image>
            :

            
        } */}
        <OptionCity city="Ensenada" country="Mexico" navigation={navigation}>
        </OptionCity>
        <OptionCity city="Tijuana" country="Mexico" navigation={navigation}>
        </OptionCity>
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
});