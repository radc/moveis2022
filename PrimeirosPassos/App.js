import React from "react";
import {Text, View, StyleSheet} from "react-native"
import Nome from "./Nome"

const names = ["Goku", "Ruhan", "Otávio", "Marina", "Aline"]

export default App = () => (
  names.map(
    n => <Nome apres={n}/>
  )  
)
