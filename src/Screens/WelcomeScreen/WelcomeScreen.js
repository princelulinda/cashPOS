import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{alignItems:"center", }}>Welcome in</Text>
      <Image source={require("../../../assets/logo.png")} style={styles.image}/>
      <TouchableOpacity style={styles.button}>
        <Text>Get start</Text>
      </TouchableOpacity>
    </View>
  )
}
 const styles = StyleSheet.create({
  contener:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width:300,
    height:300,
    resizeMode:"contain",
    marginTop:-100
  },
  button:{
    borderStyle:"solid",
    borderWidth:1,
    width:140,
    height:50,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:-150
  }
 })
export default WelcomeScreen