import { Text, View } from 'react-native';
import React from 'react';
import {css} from '../assets/css/Css';

export default function Estabelecimento() {

    return (
        <View style={css.containerAvaliacao}> 
            <View style={css.areaMenu}>
                <Text style={css.areaTitle}>Estabelecimento</Text>
            </View>
        </View>
    );
}