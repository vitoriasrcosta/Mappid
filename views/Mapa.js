import { Text, View } from 'react-native';
import React from 'react';
import {css} from '../assets/css/Css';

export default function Mapa() {

    return (
        <View style={css.containerAvalicao}> 
            <View style={css.areaMenu}>
                <Text style={css.areaTitle}>Mapa</Text>
            </View>
        </View>
    );
}