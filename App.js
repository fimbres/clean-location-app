import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CompareLocationsScreen from './screens/CompareLocations';
import SearchLocationScreen from './screens/SearchLocationScreen';
import SeeLocationScreen from './screens/SeeLocationScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'VarelaRound-Regular': require('./assets/fonts/VarelaRound-Regular.ttf'),
  });

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CompareLocations" component={CompareLocationsScreen} />
          <Stack.Screen name="SearchLocation" component={SearchLocationScreen} />
          <Stack.Screen name="SeeLocation" component={SeeLocationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
