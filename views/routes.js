import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {css} from '../assets/css/Css';
import Avaliacao from './Avaliacao';
import Busca from './Busca';
import Mapa from './Mapa'

const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
    return(
        <Tab.Navigator
            barStyle={css.bottomTab}
            activeColor='#5FB0B6'
            inactiveColor='#5FB0B6'>

            <Tab.Screen 
                name="Mapa" 
                component={Mapa}
                options={{
                    tabBarIcon:()=>(
                        <Icon name="compass" size={22} color="#5FB0B6" />
                    )
                }} />

            <Tab.Screen 
                name="Avaliar" 
                component={Avaliacao}
                options={{
                    tabBarIcon:()=>(
                        <Icon name="inbox" size={22} color="#5FB0B6" />
                    )
                }} />
            
            <Tab.Screen 
                name="Busca" 
                component={Busca}
                options={{
                    tabBarIcon:()=>(
                        <Icon name="search" size={22} color="#5FB0B6" />
                    )
                }} />
        </Tab.Navigator>
    );

}

export default Routes;