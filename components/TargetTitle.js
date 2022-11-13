import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function TargetTitle({title,subtitle}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default TargetTitle

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 40,
        width: '100%',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 25,
        color:'white',
        width:'100%',
        backgroundColor: '#535050',
        paddingTop: 15,
        paddingLeft:50,
        paddingRight:50,
        textAlign:'center',
        fontWeight:'bold',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        
    },
    subtitle: {
        fontSize: 13,
        color:'#AFAFAF',
        width:'100%',
        backgroundColor: '#535050',
        padding: 10,
        paddingLeft:50,
        paddingRight:50,
        textAlign:'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }
});