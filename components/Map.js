import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = ({ children }) => {

  return (
    <MapView 
        style={styles.container}
        rotateEnabled={false}
        zoomEnabled={false}
        zoomControlEnabled={false}
        zoomTapEnabled={false}
        minZoomLevel={1}
    >
        {children}
    </MapView>
  )
}

export default Map;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width, 
        height: Dimensions.get('screen').height,
    }
});