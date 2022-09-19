import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import MeuComponente from './components/MeuComponente';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//components
const App = () => {
  return(
    <SafeAreaView style={estilo.App}>
      <MeuComponente/>           
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  App : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
