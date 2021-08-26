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
                <View style={css.containerAvalicao}>
                    <Menu title="Avaliação" navigation={navigation}/>
                </View>

                <View style={css.containerAvalicao}>
                    <View style={css.boxFormAvaliacao}>
                        <Text style={css.textFormAvaliacao}>Nome do Estabelecimento</Text>
                        <TextInput style={css.inputFormAvaliacao}/>
                    </View>

                    <View style={css.boxFormAvaliacaoSmall}>
                        <Text style={css.textFormAvaliacaoSmall}>País</Text>
                        <TextInput style={css.inputSmallFormAvaliacao}/>
                    </View>

                    <View style={css.boxFormAvaliacaoSmall}>
                        <Text style={css.textFormAvaliacaoSmall}>Estado</Text>
                        <TextInput style={css.inputSmallFormAvaliacao}/>
                    </View>

                    <View style={css.boxFormAvaliacaoSmall}>
                        <Text style={css.textFormAvaliacaoSmall}>Cidade</Text>
                        <TextInput style={css.inputSmallFormAvaliacao}/>
                    </View>

                    <View style={css.boxFormAvaliacaoSmall}>
                        <Text style={css.textFormAvaliacaoSmall}>Número</Text>
                        <TextInput style={css.inputSmallFormAvaliacao}/>
                    </View>

                    <View style={css.boxFormAvaliacao}>
                        <Text style={css.textFormAvaliacao}>Rua</Text>
                        <TextInput style={css.inputFormAvaliacao}/>
                    </View>

                    <View style={css.boxFormAvaliacao}>
                        <Text style={css.textFormAvaliacao}>Quão segurx você se sentiu neste lugar?</Text>
                        <TextInput style={css.inputFormAvaliacao}/>
                    </View>

                    <View style={css.boxFormAvaliacao}>
                        <Text style={css.textFormAvaliacao}>Selecione as palavras-chaves que melhor 
                                            descrevem o que você sofreu (opcional)</Text>
                        <TextInput style={css.inputFormAvaliacao}/>
                    </View>

                    <View style={css.boxFormAvaliacao}>
                        <Text style={css.textJustificativa}>Justificativa</Text>
                        <TextInput style={css.inputJustificativa}/>
                    </View>

                    <View style={css.checkBox}>
                        <CheckBox
                            value={isSelectedJustificativa}
                            onValueChange={() => setSelectedJustificativa(!isSelectedJustificativa)}
                            style={css.checkBox}
                        />
                        <Text style={css.textCheckBox}>Quero postar esta justificativa</Text>

                        <CheckBox
                            value={isSelectedTermos}
                            onValueChange={() => setSelectedTermos(!isSelectedTermos)}
                            style={css.checkBox}
                        />
                        <Text style={css.textCheckBoxConfirmacao}>Confirmo que tudo que disse é verdade</Text>
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