import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeeLocationScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>SeeLocationScreen</Text>
    </View>
  )
}

export default SeeLocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});