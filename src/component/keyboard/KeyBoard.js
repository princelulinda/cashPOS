import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';



export default function Keyboard({navigation}) {
  const inputRef = useRef(null);
  const [currentValue, setCurrentValue] = useState('');
  const [device, setDevice] = useState("USD");


  const handleKeyPress = (key) => {
    if (key === '⌫') {
      setCurrentValue(currentValue.slice(0, -1));
    } else {
      setCurrentValue((prevValue) => prevValue + key);
    }
  };


  return (
  <View style={styles.container}>
   <View style={styles.setPricingContainer}>
   <Text style={styles.textInput} >{currentValue?currentValue: 0}</Text>
   </View>
  
    <View style={styles.keyboardContainer}>
      {/* Number keys - First Row */}
      <View style={styles.keyboardRow}>
        <TouchableOpacity style={styles.key}
          key="1"
          onPress={() => handleKeyPress('1')}
        >
          <Text style={styles.keyNumber} >1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key}
          key="2"
          onPress={() => handleKeyPress('2')}
        >
          <Text style={styles.keyNumber} >2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key}
          key="3"
          onPress={() => handleKeyPress('3')}
        >
          <Text style={styles.keyNumber} >3</Text>
        </TouchableOpacity>
      </View>
  
      {/* Number keys - Second Row */}
      <View style={styles.keyboardRow}>
        <TouchableOpacity style={styles.key}
          key="4"
          onPress={() => handleKeyPress('4')}
        >
          <Text style={styles.keyNumber} >4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key}
          key="5"
          onPress={() => handleKeyPress('5')}
        >
          <Text style={styles.keyNumber} >5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.key}
          key="6"
          onPress={() => handleKeyPress('6')}
        >
          <Text style={styles.keyNumber} >6</Text>
        </TouchableOpacity>
      </View>
  
      {/* Number keys and special keys - Third Row */}
      <View style={styles.keyboardRow}>
        <TouchableOpacity style={styles.key}
          key="7"
          onPress={() => handleKeyPress('7')}
        >
          <Text style={styles.keyNumber} >7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key}
          key="8"
          onPress={() => handleKeyPress('8')}
        >
          <Text style={styles.keyNumber} >8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key}
          key="9"
          onPress={() => handleKeyPress('9')}
        >
          <Text style={styles.keyNumber} >9</Text>
        </TouchableOpacity>
   
      </View>
      <View style={{flexDirection:"row",gap:20, marginTop:-20}}>
          <TouchableOpacity style={styles.key}
            key="dot"
            onPress={() => handleKeyPress('.')}
          >
            <Text style={styles.keyNumber} >.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}
            key="0"
            onPress={() => handleKeyPress('0')}
          >
            <Text style={styles.keyNumber} >0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}
            key="backspace"
            onPress={() => handleKeyPress('⌫')}
          >
            <Text style={styles.keyNumber} >⌫</Text>
          </TouchableOpacity>
        </View>
    </View>
    <TouchableOpacity style={styles.payButton} onPress={()=>
        currentValue&&device?navigation.navigate("Payment", options={ "pricing":currentValue, "device":device}):""}>
      <Text style={styles.payText}>pay</Text>
    </TouchableOpacity>
  </View>
  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ddd",

  },
setPricingContainer:{
flexDirection:"row",
 height:"30%", 
 backgroundColor:"#ddd",
 alignItems:"center", 
 justifyContent:"center", 
 width:"100%",
 marginTop:-50
},
  textInput: {
    padding: 10,
    fontSize: 48,
    // outline:"none",
    fontWeight:"bold",
    
  },
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent:"center",
    alignItems:"center",
    gap:20,
    width:"100%",

  },
  key: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#fff',
  },
  keyNumber:{
    fontWeight:"bold",
    fontSize:24
  },
  payButton: {
    padding: 15,
    backgroundColor: '#f06115',
    width:250,
    borderRadius:7,
    justifyContent:"center",
    alignItems:"center",
    marginTop:30
  },
  payText: {
    fontSize: 16,
    color:"white",
    fontWeight: 'bold',

  },
});
