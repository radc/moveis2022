import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Alert
} from "react-native"

export default App = () => {
  return (
    <SafeAreaView style={styles.principal}>
      <View style={styles.v1}>
        <Text style={{fontSize:100}}>T1</Text>
      </View>
      <View style={styles.v2}>
        <Button
          title="MENSAGEM"
          color="#A0F"    
          onPress={funcBotao}      
        />
      </View>
      <View style={styles.v3}>
        <Text style={{fontSize:100}}>T3</Text>
      </View>
    </SafeAreaView>
  );
}

const funcBotao = () => {
  console.log("Botão pressionado");
  Alert.alert('Botão pressionado!')
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#AAA',
    flex:1
  },
  v1 : {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  v2 : {
    flex: 1,
    backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "center"
  },
  v3 : {
    flex: 1,
    backgroundColor: "#0F0",
    justifyContent: "center",
    alignItems: "center"
  }
})