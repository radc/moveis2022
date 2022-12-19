import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import Board from "./src/Board"
import Spot from "./src/Spot"
export default () => {
  return(
    <SafeAreaView style={styles.container}>
      <Board/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
})