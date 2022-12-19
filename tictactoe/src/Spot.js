import React from "react"
import {View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"

export default (props) => {

    const botaoPressionado = () => {
        Alert.alert("Botão","Pressionado")
    }
    const stylesVec = [styles.spot]

    if(props.coluna == 0){
        stylesVec.push({borderLeftWidth: 0})
    }
    if(props.linha == 0){
        stylesVec.push({borderTopWidth: 0})
    }
    if(props.coluna == 2){
        stylesVec.push({borderRightWidth: 0})
    }
    if(props.linha == 2){
        stylesVec.push({borderBottomWidth: 0})
    }

    return(
        <TouchableOpacity style={stylesVec} onPress={botaoPressionado}>
            <Text style={styles.icone}>
                {
                    props.player==1?
                        'X':
                        props.player==2?
                            'O':''
                }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    spot : {
        width: 120, height: 120, backgroundColor: 'cyan',
        justifyContent: 'center',alignItems: 'center',
        margin: -1, borderColor: 'black',
        borderWidth: 5,
        
        
    },
    icone : {
        fontSize: 50, color: 'black'
    }
})
