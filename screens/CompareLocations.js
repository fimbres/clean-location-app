import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompareLocationsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default CompareLocationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});