import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function CustomButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
          <Text style={styles.customBtn}>Compare With Other Location</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width:'100%',
        display:'flex',
        alignItems:'center',
        marginTop:30,
    },
    customBtn:{
        width:"80%",
        backgroundColor:"#31905D",
        color:'white',
        textAlign:'center',
        paddingVertical:13,
        borderRadius:10,
    },
})