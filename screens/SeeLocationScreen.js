import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientScroll from '../components/GradientScroll'
import TargetTitle from '../components/TargetTitle'
import CustomButton from '../components/CustomButton'

const SeeLocationScreen = ({ navigation, route }) => {
  return (
    <View style={{display:'flex',justifyContent:'flex-start', flex: 1, alignItems:'center', backgroundColor:'#3E3939'}}>
      <View style={styles.container}>
        <TargetTitle title={"Washington D.C"} subtitle={"united states"}></TargetTitle>
        <Text style={styles.txtParams}>CO2</Text>
        <GradientScroll value={0.8}/>
        <Text style={styles.txtParams}>ADFG</Text>
        <GradientScroll value={0.1}/>
        <Text style={styles.txtParams}>CTREQ</Text>
        <GradientScroll value={0.5}/>
        <CustomButton/>
      </View>
    </View>
  )
}

export default SeeLocationScreen;

const styles = StyleSheet.create({
    container: {
        display:'flex',
        alignItems:'flex-start',
        justifyContent: 'center',
        width: "90%",
    },
    txtParams: {
      marginTop:30,
      fontWeight:'bold',
      color:'#fff',
    }
});