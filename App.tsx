import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailsScreen from './src/screens/DurbarScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import AnandhasScreen from './src/screens/AnandhasScreen';
import CakeBeeScreen from './src/screens/CakeBeeScreen';
import MultiScreen from './src/screens/MultiScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>

        <Stack.Screen
          name="Durbar"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>

        <Stack.Screen
          name="Anandhas"
          component={AnandhasScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>

        <Stack.Screen
          name="CakeBee"
          component={CakeBeeScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>

        <Stack.Screen
          name="MultiScreen"
          component={MultiScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>

        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
