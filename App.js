import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Mapa, Estabelecimento, Avaliacao, Busca } from './views';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
            name="Estabelecimento" 
            component={Estabelecimento}
            options={{
              headerShown: false,
              title: 'Estabelecimento',
              backgroundColor: '#FFF',
              headerStyle: {backgroundColor: '#5FB0B6'},
              headerTintColor: '#FFF',
              headerTitleStyle: {alignSelf: 'center'}
          }} />
          
          <Stack.Screen
            name="Mapa"
            component={Mapa}
            options={{
              title: "Mapa",
              backgroundColor: '#FFF',
              headerStyle: {backgroundColor: '#5FB0B6'},
              headerTintColor: '#FFF',
              headerTitleStyle: {alignSelf: 'center'}
          }} />

          <Stack.Screen 
            name="Avaliacao" 
            component={Avaliacao}
            options={{
              title: 'Avaliação',
              backgroundColor: '#FFF',
              headerStyle: {backgroundColor: '#5FB0B6'},
              headerTintColor: '#FFF',
              headerTitleStyle: {alignSelf: 'center'}
          }} />

          <Stack.Screen 
            name="Busca" 
            component={Busca}
            options={{
              title: 'Busca',
              backgroundColor: '#FFF',
              headerStyle: {backgroundColor: '#5FB0B6'},
              headerTintColor: '#FFF',
              headerTitleStyle: {alignSelf: 'center'}
          }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
