import { Text, View } from 'react-native';
import React from 'react';
import {css} from '../assets/css/Css';
import Menu from '../assets/components/Menu';


export default function Busca({navigation}) {

    return (
        <View style={css.containerAvaliacao}>
            <Menu title="Busca" navigation={navigation}/>
        </View>
    );
}