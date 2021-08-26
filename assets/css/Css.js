import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    // Container da página de avaliação, utilizado provisoriamente na criação de outras páginas
    containerAvalicao:{
        backgroundColor: 'white',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
    },
    // Box de separação do espaço utiliado pelos campos de input grandes do formulário
    boxFormAvaliacao:{
        height: 70,
        width: '100%',
        marginTop: '0.3%'
    },
    // Box de separação do espaço utiliado pelos campos de input pequenos do formulário (quando tem dois alinhados)
    boxFormAvaliacaoSmall:{
        height: 70,
        width: '50%',
        marginTop: '1%'
    },
    // Campos de validação para envio do formulário
    checkBox:{
        height: 3,
        width: '80%',
        marginTop: '17%',
        marginLeft: '2.25%'
    },
    // Container dos botões do formulário de avaliação
    buttonBox:{
        height: 130,
        width: '50%',
        marginTop: '22%'
    },
    // Estilização do botão "CANCELAR"
    buttonCancelar:{
        marginRight: '2.75%',
        marginTop: '22%',
        padding: '7%',
        width: '50%',
        backgroundColor: '#DADADA',
        alignSelf: 'flex-end',
        borderRadius: 5
    },
    // Estilização do botão "AVALIAR"
    buttonAvaliar:{
        marginLeft: '2.75%',
        marginTop: '22%',
        padding: '7%',
        width: '50%',
        backgroundColor: '#A6E6E3',
        alignSelf: 'flex-start',
        borderRadius: 5
    },
    // Estilização do texto dentro dos botões
    buttonText:{
        fontSize: 15,
        color: '#4A4A4A',
        alignSelf: 'center',
    },
    // Texto "Nome do estabelecimento"
    textFormAvaliacao:{
        fontSize: 16,
        color: '#4A4A4A',
        paddingLeft: '5.5%',
        marginTop: '2.5%'
    },
    // Texto do formulário de avaliação 
    textFormAvaliacaoSmall:{
        fontSize: 16,
        color: '#4A4A4A',
        paddingLeft: '11%',
        paddingTop: '4%'
    },
    // Texto da parte de "JUSTIFICATIVA" do formulário 
    textJustificativa:{
        fontSize: 16,
        color: '#4A4A4A',
        paddingLeft: '5.5%',
        marginTop: '8%'
    },
    // Texto das CheckBox
    textCheckBox:{
        fontSize: 13,
        color: '#4A4A4A',
        marginTop: '-3.5%',
        marginLeft: '14%',
        marginBottom: '-10%'
    },
    textCheckBoxConfirmacao:{
        fontSize: 13,
        color: '#4A4A4A',
        marginTop: '-3.5%',
        marginLeft: '14%',
    },
    // Input dos campos maiores
    inputFormAvaliacao:{
        marginTop: '1.5%',
        marginBottom: '2%',
        alignSelf: 'center',
        width: '90%',
        height: 32,
        paddingLeft: '3%',
        paddingTop: '0.5%',
        paddingBottom: '1%',
        backgroundColor: 'white',
        borderColor: '#DADADA',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1
    },
    // Input dos campos menores
    inputSmallFormAvaliacao:{
        marginTop: '1.5%',
        marginBottom: '2%',
        alignSelf: 'center',
        width: '80%',
        height: 32,
        paddingLeft: '3%',
        paddingTop: '0.5%',
        paddingBottom: '1%',
        backgroundColor: 'white',
        borderColor: '#DADADA',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1
    },
    // Input da "JUSTIFICATIVA" - maior de todos
    inputJustificativa:{
        marginTop: '1.5%',
        marginBottom: '2%',
        alignSelf: 'center',
        width: '90%',
        height: 90,
        paddingLeft: '3%',
        paddingTop: '0.5%',
        paddingBottom: '1%',
        backgroundColor: 'white',
        borderColor: '#DADADA',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1
    },
    bottomTab:{
        backgroundColor: '#FFF',
        fontSize: 15,
        color: '#5FB0B6',
    },
    areaMenu:{
        flexDirection: 'row',
        paddingTop: '11%',
        paddingBottom: '3%',
        width: '100%',
        backgroundColor: '#5FB0B6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaTitle:{
        width: '90%',
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
    },
    buttonSair:{
        textAlign: 'left',
    },
    containerTop:{
        justifyContent: 'flex-start'
    }
});

export {css};