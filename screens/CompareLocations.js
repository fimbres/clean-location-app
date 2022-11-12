import React,{useState} from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import TargetTitle from '../components/TargetTitle'
import GradientScroll from '../components/GradientScroll'
import StarCalif from '../components/StarCalif'

const CompareLocationsScreen = ({ navigation, route, valorEstrella}) => {
  valorEstrella = 4;
  const [visible, setVisible ] = useState(false);

  return (
    <View style={{display:'flex',justifyContent:'flex-start', flex: 1, alignItems:'center', backgroundColor:'#3E3939'}}>
      <View style={styles.container}>
        <TargetTitle title={"Washington D.C"} subtitle={"united states"}></TargetTitle>
        <StarCalif valorEstrella={valorEstrella}></StarCalif>
        <TouchableOpacity onPress={() => setVisible(!visible)} style={{width:'100%',marginTop:30}}><Text style={styles.txtDetails}>VIEW DETAILS</Text></TouchableOpacity>
        {visible && <View style={{width:'100%'}}>
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
        </View>}
      </View>
    </View>
  )
}

export default CompareLocationsScreen;

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
  }
});