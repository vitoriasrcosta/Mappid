import React from 'react';
import {css} from '../css/Css';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Menu(props){

    return(
        <View style={css.areaMenu}>
            <TouchableOpacity style={css.buttonSair} onPress={()=>props.navigation.navigate('Mapa')}>
                <Icon name="angle-left" size={22} color='white' />
            </TouchableOpacity>

            <Text style={css.areaTitle}>{props.title}</Text>
        </View>
    );
}