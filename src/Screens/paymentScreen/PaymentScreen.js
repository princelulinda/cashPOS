import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const PaymentScreen = () => {
  const paymentMethods = [
    require('../../../assets/Images/icons/mastercard.png'),
    require('../../../assets/Images/icons/ecocash.png'),
    require('../../../assets/Images/icons/lumicash.png'),
    require('../../../assets/Images/icons/cashtel.jpg'),
    require('../../../assets/Images/icons/visa.png'),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardStatus}>Tap the card on</Text>
        <Text style={styles.amount}>$18.00</Text>
      </View>
      <Image source={require('../../../assets/Images/icons/contactless-icon.png')} style={styles.phoneImage} />
      <View style={{justifyContent:"center", alignItems:"center"}}>
      <Text style={styles.cardStatus}>Reading Card</Text>
        <FlatList
          data={paymentMethods}
          renderItem={({ item }) => (
            <Image source={item} style={styles.paymentIcon} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  cardContainer: {
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    fontSize: 40,
    color: '#f06115',
    fontWeight: 'bold',
  },
  cardStatus: {
    fontSize: 25,
    color: '#ccc',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardType: {
    fontSize: 18,
  },
  cancelButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f06115',
    borderRadius: 5,
    width:300,
    justifyContent:"center",
    alignItems:"center",
  },
  cancelText: {
    fontSize: 16,
    color:"white",
    fontWeight: 'bold',
  },
  paymentIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft:20
  },
});

export default PaymentScreen;
