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
  let valorEstrella = 4;
return (
  <View style={{display:'flex',justifyContent:'flex-start', flex: 1, alignItems:'center', backgroundColor:'#3E3939'}}>
    <View style={styles.container}>
      <TargetTitle title={cityName} subtitle={countryName}></TargetTitle>
      <StarCalif valorEstrella={valorEstrella}></StarCalif>
      <View style={{width:'100%', paddingVertical: 30, marginTop: 10}}>
        <ScrollView contentContainerStyle={{paddingBottom: 20}}>
          <Text style={styles.txtParams}>NO2</Text>
          <GradientScroll/>
          <Text style={styles.txtParams}>O3</Text>
          <GradientScroll/>
          <Text style={styles.txtParams}>CO</Text>
          <GradientScroll/>
          <Text style={styles.txtParams}>PM2.5</Text>
          <GradientScroll/>
          <Text style={styles.txtParams}>PM5</Text>
          <GradientScroll/>
        <CustomButton/>
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
