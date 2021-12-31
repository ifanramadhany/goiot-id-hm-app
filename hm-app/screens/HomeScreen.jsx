import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', color: 'red'}}>Ini adalah Home Screen</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});