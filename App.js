import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import HomeScreen from './screens/HomeScreen';
import CompareLocationsScreen from './screens/CompareLocations';
import SearchLocationScreen from './screens/SearchLocationScreen';
import SeeLocationScreen from './screens/SeeLocationScreen';
import OptionsLocationScreen from './screens/OptionsLocationScreen';
import LocationDetails from './screens/LocationDetails';

const Stack = createNativeStackNavigator();
import BottomTab from './components/BottomTab'
import {useState} from 'react'

export default function App() {
  const [fontsLoaded] = useFonts({
    "VarelaRound-Regular": require("./assets/fonts/VarelaRound-Regular.ttf"),
  });

  const navigationRef = useNavigationContainerRef();
  let routeNameRef;
  const [routeName, setRouteName] = useState('');
  const options = { headerTintColor: 'white', headerStyle: { backgroundColor: '#2C2727' } };

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef = navigationRef.getCurrentRoute().name;
          console.log(routeNameRef);
          setRouteName(routeNameRef);
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.getCurrentRoute().name;
          const trackScreenView = () => {
            // Your implementation of analytics goes here!
          };

          if (previousRouteName !== currentRouteName) {
            // Save the current route name for later comparison
            routeNameRef = currentRouteName;

            // Replace the line below to add the tracker from a mobile analytics SDK
            await trackScreenView(currentRouteName);
          }
        }}
      >
        
        <Stack.Navigator initialRouteName="SeeLocation" >
          <Stack.Screen name="Home" component={HomeScreen} options={options}/>
          <Stack.Screen
            name="CompareLocations"
            component={CompareLocationsScreen}
            options={options}
          />
          <Stack.Screen
            name="SearchLocation"
            component={SearchLocationScreen}
            options={options}
          />
          <Stack.Screen name="SeeLocation" component={SeeLocationScreen} options={options} valorEstrella={4}/>
        </Stack.Navigator>
        <BottomTab  currentRouteName={routeName} navigationRef={navigationRef}/>
      </NavigationContainer>

    </>
  );
}
