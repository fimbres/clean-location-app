import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../constants/colors';

const GradientScroll = ({ value }) => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={[colors.GreenGradient, colors.YellowGradient, colors.RedGradient]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} locations={[0.2, 0.6, 1]} style={{width:'100%', height:10, position: 'absolute', borderRadius: 5}} />
        <Slider
            style={{width: '100%', height: 10, position: 'absolute'}}
            value={value}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            thumbTintColor={colors.grayThumb}
            disabled
        />
    </View>
  )
}

export default GradientScroll;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
