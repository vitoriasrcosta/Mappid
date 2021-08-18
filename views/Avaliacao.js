import { Text, TextInput, View, KeyboardAvoidingView, CheckBox, TouchableOpacity, ScrollView } from 'react-native';
import {css} from '../assets/css/Css';
import React, {useState} from 'react';
import Menu from '../assets/components/Menu';


export default function Avaliacao({navigation}) {
    const [isSelectedJustificativa, setSelectedJustificativa] = useState(false);
    const [isSelectedTermos, setSelectedTermos] = useState(false);


    return (
        <ScrollView>
            <KeyboardAvoidingView> 
                <View style={css.container}>
                    <Menu title="Avaliação" navigation={navigation}/>
                </View>

                <View style={css.container}>
                    <View style={css.box1}>
                        <Text style={css.text}>Nome do Estabelecimento</Text>
                        <TextInput style={css.input}/>
                    </View>

                    <View style={css.box2}>
                        <Text style={css.text2}>País</Text>
                        <TextInput style={css.input2}/>
                    </View>

                    <View style={css.box2}>
                        <Text style={css.text2}>Estado</Text>
                        <TextInput style={css.input2}/>
                    </View>

                    <View style={css.box2}>
                        <Text style={css.text2}>Cidade</Text>
                        <TextInput style={css.input2}/>
                    </View>

                    <View style={css.box2}>
                        <Text style={css.text2}>Número</Text>
                        <TextInput style={css.input2}/>
                    </View>

                    <View style={css.box1}>
                        <Text style={css.text1}>Rua</Text>
                        <TextInput style={css.input}/>
                    </View>

                    <View style={css.box1}>
                        <Text style={css.text1}>Quão segurx você se sentiu neste lugar?</Text>
                        <TextInput style={css.input}/>
                    </View>

                    <View style={css.box1}>
                        <Text style={css.text1}>Selecione as palavras-chaves que melhor 
                                            descrevem o que você sofreu (opcional)</Text>
                        <TextInput style={css.input}/>
                    </View>

                    <View style={css.box1}>
                        <Text style={css.text3}>Justificativa</Text>
                        <TextInput style={css.input3}/>
                    </View>

                    <View style={css.checkBox}>
                        <CheckBox
                            value={isSelectedJustificativa}
                            onValueChange={() => setSelectedJustificativa(!isSelectedJustificativa)}
                            style={css.checkBox}
                        />
                        <Text style={css.checkBoxText}>Quero postar esta justificativa</Text>

                        <CheckBox
                            value={isSelectedTermos}
                            onValueChange={() => setSelectedTermos(!isSelectedTermos)}
                            style={css.checkBox}
                        />
                        <Text style={css.checkBoxText2}>Confirmo que tudo que disse é verdade</Text>
                    </View>
                

                    <View style={css.buttonBox}>
                        <TouchableOpacity style={css.buttonCancelar}>
                            <Text style={css.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={css.buttonBox}>
                        <TouchableOpacity style={css.buttonAvaliar}>
                            <Text style={css.buttonText}>Avaliar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}