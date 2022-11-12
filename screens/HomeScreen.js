import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

import Map from '../components/Map';
import DangerDot from '../assets/danger-dot.png';
import SecureDot from '../assets/secure-dot.png';
import WarningDot from '../assets/warning-dot.png';

const HomeScreen = ({ navigation }) => {
    const sampleSiteMarkers = [
        {
            coordinate: {
                longitude: -106.391015,
                latitude: 39.085855
            }
        },
        {
            coordinate: {
                longitude: -106.368051,
                latitude: 39.351661
            }
        },
        {
            coordinate: {
                longitude: -106.389204,
                latitude: 39.372171
            }
        }
    ];

  return (
    <View style={styles.container}>
      <Map>
        {sampleSiteMarkers.map((marker, index) => {
            return (
                <Marker 
                    key={index}
                    coordinate={marker.coordinate}
                    image={DangerDot}
                />
            );
        })}
      </Map>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent:'center'
    }
});