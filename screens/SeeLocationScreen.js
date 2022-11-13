import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TargetTitle from '../components/TargetTitle'
import GradientScroll from '../components/GradientScroll'
import StarCalif from '../components/StarCalif'
import CustomButton from '../components/CustomButton'

const SeeLocationScreen = (props) => {
  // const [text,onChangeText] = React.useState("Ensenada");
  
  let cityName = props.route.params.city
  let countryName = props.route.params.country
  
  const valueCO2 = Math.random();
  const valueO3 = Math.random();
  const valueCO = Math.random();
  const valuePM2 = Math.random();
  const valuePM5 = Math.random();

  const valorEstrella = Math.round(valueCO2 + valueO3 + valueCO + valuePM2 + valuePM5);

return (
  <View style={{display:'flex',justifyContent:'flex-start', flex: 1, alignItems:'center', backgroundColor:'#3E3939'}}>
    <View style={styles.container}>
      <TargetTitle title={cityName} subtitle={countryName}></TargetTitle>
      <StarCalif valorEstrella={valorEstrella}></StarCalif>
      <View style={{width:'100%', paddingVertical: 30, marginTop: 10}}>
        <ScrollView contentContainerStyle={{paddingBottom: 20}}>
          <Text style={styles.txtParams}>CO2</Text>
          <GradientScroll value={valueCO2}/>
          <Text style={styles.txtParams}>O3</Text>
          <GradientScroll value={valueO3}/>
          <Text style={styles.txtParams}>CO</Text>
          <GradientScroll value={valueCO}/>
          <Text style={styles.txtParams}>PM2.5</Text>
          <GradientScroll value={valuePM2}/>
          <Text style={styles.txtParams}>PM5</Text>
          <GradientScroll value={valuePM5}/>
        {/* <CustomButton onPress={() => props.navigation.push("SearchLocation", { cityName, countryName, valorEstrella })}/> */}
      </ScrollView>
    </View>
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
