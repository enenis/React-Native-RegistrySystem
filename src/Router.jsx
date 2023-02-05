import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "./pages/Welcome"
import Member from "./pages/MemberSign"
import Result from "./pages/MemberResult"

const Stack=createNativeStackNavigator()


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='WelcomeScreen' component={Welcome} />
        <Stack.Screen name='MemberSign' component={Member}
        />
        <Stack.Screen name='MemberResult' component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App