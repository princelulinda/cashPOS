import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email} - Mot de passe: ${password}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor:"#f06115" }}>
     <View style={{ height:"20%", justifyContent:"center", alignItems:"center"}}>
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 30 }}>LOGIN</Text>
     </View>
     <View style={styles.formContenent}>
     <Image source={require("../../../assets/logo.png")} style={{width:250, height:250, alignSelf:"center", marginTop:-100 }} />
     <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        secureTextEntry
        style={[styles.TextInput, { marginTop:"-15%" }]}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.TextInput}
      />
      <TouchableOpacity >
        <Text style={{ color: '#f06115', fontWeight: 'bold', fontSize: 16, marginTop: 10, marginLeft:100 }}>forgot password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Login in</Text>
      </TouchableOpacity>
      <Text>or</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <TouchableOpacity>
        <Image source={require("../../../assets/Images/icons/google-icon.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require("../../../assets/Images/icons/facebook-icon.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require("../../../assets/Images/icons/twitter.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContenent: {
    backgroundColor:"#f5eae4", 
  height:"80%", justifyContent:"center"
  , alignItems:"center", borderTopLeftRadius:40,
   borderTopRightRadius:40
},

  TextInput: {
    backgroundColor:"#fff", 
  padding: 15,
   width: 300,
   marginVertical: 10,
   borderRadius:7 
},
button:{ marginTop: 20,
     backgroundColor: '#f06115',
      padding: 10, 
      borderRadius: 5,
      width:300,
      justifyContent:"center",
      alignItems:"center",
    },
    icon:{width:20,
         height:20, 
         alignSelf:"center"
    , marginTop:10,
    boxShadow: 5,
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 20,
    marginRight: 10,

 }
})

export default LoginPage;
