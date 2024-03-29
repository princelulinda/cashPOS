import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const data = [{
    type: 'received',
    amount: 0.305,
    currency: 'BTC',
    date: '26/07/2019',
  },
  {
    type: 'sent',
    amount: 0.45,
    currency: 'BTC',
    date: '26/07/2019',
  },
  {
    type: 'received',
    amount: 0.425,
    currency: 'BTC',
    date: '26/07/2019',
  },
  {
    type: 'sent',
    amount: 0.25,
    currency: 'BTC',
    date: '26/07/2019',
  },
  {
    type: 'received',
    amount: 0.105,
    currency: 'BTC',
    date: '26/07/2019',
  },]

const Wallet = ({navigation}) => {
    const [transactions, setTransactions] = useState(data);
  
    return (
      <View style={styles.container}>
        <View style={{justifyContent:"center", padding:10}}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>MON PORTEFEUILLE</Text>
                <MaterialIcons name="more-vert" size={24} color="#fff" />
            </View>
            <View style={styles.balanceContainer}>
               <View>
               <Text style={styles.balanceText}>Solde disponible</Text>
                <Text style={styles.balanceText}>26 421.03 USD</Text>
               </View>
               <TouchableOpacity style={{backgroundColor:"#eaf1ff", padding:10, borderRadius:10}} onPress={
                ()=>navigation.navigate('Payment statistics')}>
                  <AntDesign name="right" size={24} color="#55cfaa" /> 
               </TouchableOpacity>
            </View>
        </View>
        <View style={styles.activityContainer}>
          <ScrollView>
            {transactions.map((transaction) => (
              <View key={transaction.date} style={styles.activityItem}>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", gap:10}}>
                <MaterialIcons
                  name={transaction.type === 'received' ? 'arrow-downward' : 'arrow-upward'}
                  size={20}
                  color={transaction.type === 'received' ? '#55cfaa' : '#efa2a1'}
                  style={[styles.activityIcon,transaction.type ==="received"? {    backgroundColor:"#edf7f8"}: {    backgroundColor:"#ffedf1",}]}
                />
                  <View>
                    <Text style={{fontWeight:"bold", fontSize:17}}>
                  {transaction.type === 'received' ? 'Reçu' : 'Envoyé'}
                  </Text>
                  <Text>
                  {transaction.date}
                  </Text>
                    </View> 
                </View>
                
                <View style={styles.activityText}>
                </View>
                <Text style={styles.activityDate}> {transaction.amount} {transaction.currency}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f06115', 
    },
    header: {
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    headerTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    balanceContainer: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: '#fff',
      borderRadius:15,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    balanceText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    activityContainer: {
      flex: 1,
      padding: 20,
      backgroundColor:"#eaf1ff",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    },
    activityItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor:"white",
      marginBottom:10,
      borderRadius:10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

    },
    activityIcon: {
      fontSize: 20,
  
       padding:10, 
       borderRadius:15
    },
    activityText: {
      fontSize: 16,
    },
    activityDate: {
      fontSize: 14,
      color: '#ccc',
    },
  });

  export  {Wallet,data};
  