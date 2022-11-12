import React from 'react';
import { View, Text, StyleSheet, Image,Touchable,TouchableOpacity } from 'react-native';
import TargetTitle from '../components/TargetTitle'
import GradientScroll from '../components/GradientScroll'
import StarCalif from '../components/StarCalif'
import CustomButton from '../components/CustomButton'

const SeeLocationScreen = ({ navigation, route , city,country, valorEstrella}) => {
  const [text,onChangeText] = React.useState("Ensenada");
  valorEstrella = 4;

return (
  <View style={{display:'flex',justifyContent:'flex-start', flex: 1, alignItems:'center', backgroundColor:'#3E3939'}}>
    <View style={styles.container}>
      <TargetTitle title={"Washington D.C"} subtitle={"united states"}></TargetTitle>
      <StarCalif valorEstrella={valorEstrella}></StarCalif>
      <View style={{width:'100%'}}>
        <Text style={styles.txtParams}>CO2</Text>
        <GradientScroll/>
        <Text style={styles.txtParams}>CO2</Text>
        <GradientScroll/>
        <Text style={styles.txtParams}>CO2</Text>
        <GradientScroll/>
        <Text style={styles.txtParams}>CO2</Text>
        <GradientScroll/>
        <Text style={styles.txtParams}>CO2</Text>
        <GradientScroll/>
      </View>
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
},
txtDetails: {
  width:'100%',
  fontSize:15,
  marginTop:30,
  fontWeight:'bold',
  color:'#fff',
  textAlign:'center',
  textDecorationLine:'underline',
},
});
