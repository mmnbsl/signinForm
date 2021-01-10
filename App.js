import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import SignUp from "./src/pages/SignUp";

export default function App() {
  return (
    <View
      style={style.container}>
      <SignUp/>
    </View>
  );
}
const style = StyleSheet.create({
  container : {
    flex : 1
  }
})
