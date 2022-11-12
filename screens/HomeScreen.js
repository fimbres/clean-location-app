import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

import Map from '../components/Map';
import Countries from '../data/country_pullution.json';
import DangerDot from '../assets/danger-dot.png';
import SecureDot from '../assets/secure-dot.png';
import WarningDot from '../assets/warning-dot.png';

const HomeScreen = ({ navigation }) => {
    const renderMarkers = () => 
        Countries.map(country => {
            const pollutionIndex = Number(country["Pollution"]);
            const coordinate = {
                longitude: Number(country["Longitude"]),
                latitude: Number(country["Latitude"]),
            };
            
            return (
                <Marker 
                    key={country["ID"]}
                    coordinate={coordinate}
                    image={pollutionIndex < 1 ? SecureDot : pollutionIndex > 1 && pollutionIndex < 4 ? WarningDot : DangerDot}
                />
            );
        }
    );

    return (
        <View style={styles.container}>
            <Map>
                {renderMarkers()}
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
