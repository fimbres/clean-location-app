import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

function CustomButton() {
  return (
    <View style={styles.container}>
        <Text style={styles.customBtn}>Compare With Other Location</Text>
    </View>
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