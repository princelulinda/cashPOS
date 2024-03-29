import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { data } from '../profileScreen/ProfilScreen';
const PaymentStatisticScreen = () =>{
  const [solde, setSolde] = useState(5200);
  const [gainHier, setGainHier] = useState(2515.20);
  const [totalActifs, setTotalActifs] = useState(64234);
  const [revenuCumule, setRevenuCumule] = useState(0);
  const [tauxInteret, setTauxInteret] = useState(6.60);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.solde}>${solde}</Text>
      <Text style={{color:"white"}}>solde Total depuis frevrier</Text>
      </View>
      <View style={styles.infosContainer}>
      <View style={styles.info}>
          <Text style={styles.label}>Total assets</Text>
          <Text style={styles.value}>${totalActifs}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Accumulated</Text>
          <Text style={styles.value}>${revenuCumule}</Text>
        </View>
      </View>
      <View  style={styles.graphique}>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: 200,
    backgroundColor: '#f06115',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

 
  solde: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  info: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height:80,
    width:"70%",
    paddingVertical:10,
     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection:"column-reverse",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding:20,
    borderRadius: 7,
  

  },
  infosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap:10,
    alignItems: 'center',
    marginTop:-30
    },
  graphique: {
    width: '90%',
    height:300,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ddd',
  }
});

export default PaymentStatisticScreen;
