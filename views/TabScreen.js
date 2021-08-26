import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default function TabScreen() {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <NavigationContainer independent={true}>
            <Routes/>
        </NavigationContainer>
    );
}