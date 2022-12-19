import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import MeuComponente from './components/MeuComponente';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//components

//const vec = [1,2,3,4,5,6,7,8,9];


/*
const App = () => {
  return(
    <SafeAreaView style={estilo.App}>      
      <Text style={{fontSize: 80}}>
        Teste
      </Text>      
        {vec.map(() => (MeuComponente()))}
      <MeuComponente/>
    </SafeAreaView>
  );
}
*/

const estilo = StyleSheet.create({
  App : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
