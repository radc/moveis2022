import React from "react";
import { View, StyleSheet } from "react-native";
import Spot from "./Spot";

export default () => {

    return(
        <View style={styles.boardView}>
            <View style={styles.rowView}>
                <Spot linha={0} coluna={0}/>
                <Spot linha={0} coluna={1}/>
                <Spot linha={0} coluna={2}/>                
            </View>
            <View style={styles.rowView}>
                <Spot linha={1} coluna={0}/>
                <Spot linha={1} coluna={1}/>
                <Spot linha={1} coluna={2}/>
            </View>
            <View style={styles.rowView}>
                <Spot linha={2} coluna={0}/>
                <Spot linha={2} coluna={1}/>
                <Spot linha={2} coluna={2}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boardView: {
        flexDirection: 'column'
    },
    rowView : {
        flexDirection: 'row'
    }
})