import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import StarFull from '../assets/starFilled.png';
import StarHalf from '../assets/starHalf.png';
import StarEmpty from '../assets/starEmpty.png';

const SeeLocationScreen = ({ navigation, route , city,country, valorEstrella}) => {
  const [text,onChangeText] = React.useState("Ensenada");
  estrella_array = []
  let i
  for(i = 1 ; i <= valorEstrella ; i++){
    estrella_array.push(1)
  }
  if(i != 6 && i != valorEstrella){
    if((i - 0.5) <= valorEstrella){
      estrella_array.push(0.5)
      i++;
    }
  }
  while(i < 6){
    estrella_array.push(0)
    i++
  }
  return (
    <View style={styles.container}>
      <View style={styles.el_title}>
        <Text style={styles.title}>ensenada</Text>
        <Text style={styles.subtitle}>mexico</Text>
      </View>
      <View style={styles.estrellasView}>
        {
          estrella_array.map(estrella => {
            let src = "../assets/"
            if(estrella === 1)
              src += "starFilled.png"
            else if(estrella === 0)
              src += "starEmpty.png"
            else 
              src += "starHalf.png"
            return(
              <Image style={styles.estrella} source={estrella === 1 ? StarFull : (estrella === 0.5 ? StarHalf : StarEmpty)} />
            )
          })
        }
      </View>
    </View>
  )
}

export default SeeLocationScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#3E3939",
      color: "#ffffff",
      alignContent: "center"
  },
  el_title: {
    margin: 15,
    color: "white",
    backgroundColor: "#535050"
  },
  title: {
      marginTop: 5,
      fontSize: 40,
      textAlign: "center",
      fontWeight: "bold",
      color: "#ffffff"
  },
  subtitle: {
      marginBottom: 16,
      fontSize: 14,
      textAlign: "center",
      color: "#AFAFAF"
  },
  estrellasView: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    margin: 15,
    padding: 15,
  },
  estrella: {
    flexDirection: "column",
    margin: 10,
    width: 50,
    height: 50
  }
});