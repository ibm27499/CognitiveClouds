import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App1 from './Components/App1/App1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountryDetailsPage from './Components/App1/CountryDetailsPage';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      {/* linking={
        {
          configure links
        }
      } */}
       <Stack.Navigator initialRouteName="App1">
        <Stack.Screen name="App1" component={App1} />
        <Stack.Screen name="CountryDetailsPage" component={CountryDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


