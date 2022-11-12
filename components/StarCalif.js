import React from "react";
import { View, Text, StyleSheet, Image,Touchable,TouchableOpacity } from 'react-native';
import StarFull from '../assets/starFilled.png';
import StarHalf from '../assets/starHalf.png';
import StarEmpty from '../assets/starEmpty.png';

function StarCalif({valorEstrella}) {
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
    <View style={styles.estrellasView}>
      {estrella_array.map((estrella) => {
        let src = "../assets/";
        if (estrella === 1) src += "starFilled.png";
        else if (estrella === 0) src += "starEmpty.png";
        else src += "starHalf.png";
        return (
          <Image
            style={styles.estrella}
            source={
              estrella === 1
                ? StarFull
                : estrella === 0.5
                ? StarHalf
                : StarEmpty
            }
          />
        );
      })}
    </View>
  );
}

export default StarCalif;

const styles = StyleSheet.create({
    container: {
      display:'flex',
      alignItems:'flex-start',
      justifyContent: 'center',
      width: "90%",
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
    