//MeuComponente.js
import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default MeuComponente = () => (
    <View>
        <Text style={estilo.titulo}>Olá Mundo</Text>
        <Text style={estilo.subtitulo}>Meu nome é Ruhan</Text>
        <Text style={estilo.texto}>Bem vindos ao React Native</Text>
    </View>   
)

const estilo = StyleSheet.create(

    {
        titulo : {
            fontSize : 32,
            fontWeight : "bold",
            textAlign: 'center',
            color: '#044'
        },
        subtitulo : {
            fontSize: 28,
            textAlign: 'center' 
        },
        texto : {
            fontSize: 22,
            textAlign : 'center'
        }
    }    
);