import  NumericPad  from  'react-native-numeric-pad'

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Test() {
  return (
    <NumericPad
  numLength={8}
  onValueChange={(v) => { setState(v)} }
  allowDecimal={true}
/>
  )
}

const styles = StyleSheet.create({})