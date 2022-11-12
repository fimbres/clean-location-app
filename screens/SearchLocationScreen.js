import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchLocationScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>SearchLocation</Text>
    </View>
  )
}

export default SearchLocationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});