import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import OptionCity from '../components/OptionCity';
import Travel from '../assets/travelers.png';

const OptionsLocationScreen = ({ navigation }) => {
    const [focus, setFocus] = useState(false)
    const [text,onChangeText] = useState("");
    const [options, setOptions] = useState(false);
    const styles_inpt = StyleSheet.create({
        input: {
            fontSize: 16,
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
    const changeInput = (e) => {
        onChangeText(e.valueOf());
        fetch('https://api.geoapify.com/v1/geocode/search?city='+e.valueOf() +'&type=city&format=json&apiKey=32bd4e25f7ee4f78804fcb071ef00171&limit=5')
        .then((res) => res.json())
        .then( (res) => {
            if(res.results){
                setOptions(res.results)
            }
            else 
                setOptions([])
        })
        .catch(err => {
            console.error('HUBO UN ERROR');
        })
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Where do yo want to travel?</Text>
        <TextInput
            style={styles_inpt.input}
            onChangeText={changeInput}
            selectionColor="#31905D"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={text}
            placeholder='Example: Washington D. C.'
            placeholderTextColor='#999999'
        />
        {
            text === "" || !options ?
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Image style={styles.image} source={Travel} />
                </View>
            :
            options.map((opcion) => {
                return (
                    <OptionCity id={opcion.lon + " " + opcion.lat} city={opcion.city} country={opcion.country} navigation={navigation} />
                )
            })
        }
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
        marginTop: 40,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: "#ffffff"
    },
    image: {
        width: 330,
        height: 330,
    }
});