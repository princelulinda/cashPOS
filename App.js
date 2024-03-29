import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Keyboard from './src/component/keyboard/KeyBoard';
import PaymentScreen from './src/Screens/paymentScreen/PaymentScreen';
import LoginPage from './src/Screens/loginScreeen/LoginScreen';
import {Wallet} from './src/Screens/WalletScreen/Wallet';
import PaymentStatisticScreen from './src/Screens/paymentStatisticScreen/PaymentStatisticScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Payment statistics' component={PaymentStatisticScreen} options={{
          headerShown:false
        }}
        />
      <Stack.Screen name='Profile' component={Wallet} options={{
        headerShown:false
      }}
      />
      <Stack.Screen name='New payment' component={Keyboard}/>
        <Stack.Screen name='Login' component={LoginPage} options={{
          headerShown:false
        }}
        />
        <Stack.Screen name= 'Payment' component={PaymentScreen} options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
