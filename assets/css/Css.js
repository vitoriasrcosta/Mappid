import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
    },
    box1:{
        height: 70,
        width: '100%',
        marginTop: 1
    },
    box2:{
        height: 70,
        width: '50%',
        marginTop: 1
    },
    checkBox:{
        height: 3,
        width: '80%',
        marginTop: 50,
        marginLeft: 8
    },
    buttonBox:{
        height: 130,
        width: '50%',
        marginTop: 80
    },
    buttonCancelar:{
        marginRight: 5,
        marginTop: 40,
        padding: 12,
        width: 96,
        backgroundColor: '#DADADA',
        alignSelf: 'flex-end',
        borderRadius: 5
    },
    buttonAvaliar:{
        marginLeft: 5,
        marginTop: 40,
        padding: 12,
        width: 96,
        backgroundColor: '#A6E6E3',
        alignSelf: 'flex-start',
        borderRadius: 5
    },
    buttonText:{
        fontSize: 15,
        color: '#4A4A4A',
        alignSelf: 'center',
    },
    text:{
        fontSize: 16,
        color: '#4A4A4A',
        paddingLeft: 22,
        marginTop: 10
    },
    text1:{
        fontSize: 16,
        color: '#4A4A4A',
        paddingLeft: 22
    },
    text2:{
        fontSize: 16,
        color: '#4A4A4A',
        paddingLeft: 20
    },
    text3:{
        fontSize: 16,
        color: '#4A4A4A',
        paddingLeft: 20,
        marginTop: 18
    },
    checkBoxText:{
        fontSize: 13,
        color: '#4A4A4A',
        marginTop: -10,
        marginLeft: 40,
        marginBottom: -30
    },
    checkBoxText2:{
        fontSize: 13,
        color: '#4A4A4A',
        marginTop: -10,
        marginLeft: 40,
    },
    input:{
        marginTop: 4,
        marginBottom: 8,
        alignSelf: 'center',
        width: '90%',
        height: 32,
        paddingLeft: 12,
        paddingTop: 2,
        paddingBottom: 3,
        backgroundColor: 'white',
        borderColor: '#DADADA',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1
    },
    input2:{
        marginTop: 4,
        marginBottom: 8,
        alignSelf: 'center',
        width: '80%',
        height: 32,
        paddingLeft: 12,
        paddingTop: 2,
        paddingBottom: 3,
        backgroundColor: 'white',
        borderColor: '#DADADA',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1

    },
    input3:{
        marginTop: 4,
        marginBottom: 8,
        alignSelf: 'center',
        width: '90%',
        height: 90,
        paddingLeft: 12,
        paddingTop: 2,
        paddingBottom: 3,
        backgroundColor: 'white',
        borderColor: '#DADADA',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1
    },
    bottomTab:{
        backgroundColor: '#FFF',
        fontSize: 15,
        color: '#5FB0B6'
    },
    areaMenu:{
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: '100%',
        backgroundColor: '#5FB0B6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaTitle:{
        width: '90%',
        fontSize: 17,
        color: 'white',
        textAlign: 'center'
    },
    buttonSair:{
        textAlign: 'left',
    },
    containerTop:{
        justifyContent: 'flex-start'
    }
});

export {css};