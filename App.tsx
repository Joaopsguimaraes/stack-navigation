import React from 'react';
import Surf from './src/screens/Surf';
import Home from './src/screens/Home';
import Chat from './src/screens/Chat';
import Ideas from './src/screens/Ideas';
import Notes from './src/screens/Notes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HOME: undefined;
  IDEAS: undefined;
  NOTES: undefined;
  CHAT: undefined;
  SURF: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="IDEAS" component={Ideas} />
        <Stack.Screen name="NOTES" component={Notes} />
        <Stack.Screen name="CHAT" component={Chat} />
        <Stack.Screen name="SURF" component={Surf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
