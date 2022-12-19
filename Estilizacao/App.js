/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default App = () => {
  return (
    <View style={saude.app}>
      <View style={saude.quadrado}>
        <View style={saude.circle}></View>
        <View style={saude.circle}></View>
        <View style={saude.circle}></View>
        <View style={saude.circle}></View>
 
      </View>
      <View style={saude.quadrado2}>
        
      </View>
      <View style={saude.quadrado3}>
        
      </View>
    </View> 
  ); 
}

const saude = StyleSheet.create(
  {
    quadrado : {
      flex: 10,
      width: 400,      
      backgroundColor: '#F66',
      borderRadius: 50,

      fleDirection: 'row',
      justifyContent: 'space-around',      
      alignItems: 'center'

    },
    quadrado2 : {
      flex: 10,
      width: 400,      
      backgroundColor: '#F70',
      borderRadius: 50
    },
    quadrado3 : {
      flex: 1,
      width: 400,      
      backgroundColor: '#37E',
      borderRadius: 50
    },
    app : {
      backgroundColor: '#777',
      justifyContent: 'space-evenly', //mainAxis
      alignItems: 'center',//crossAxis
      flex: 1
      
    },
    circle : {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: '#000'
    }
  }
);
