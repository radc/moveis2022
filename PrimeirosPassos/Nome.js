import React from "react";
import {Text, View, StyleSheet} from "react-native"


const Nome = (props) => {
    return (
        <View>
            <Text style={styles.fontGreat}>Oi, eu sou o</Text>
            <Text style={styles.fontSmall}>{props.apres}</Text>
        </View>
    )
}

export default Nome;
const styles = StyleSheet.create(
    {
      fontGreat: {
        fontSize : 30
      },
      fontSmall: {
        fontSize : 25
      }
    }
  )