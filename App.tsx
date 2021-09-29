import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home/index';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
