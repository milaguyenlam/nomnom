import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PriceLevel() {
  return (
    <View style={styles.priceLevelWrapper}>
      <Text style={styles.priceLevelSign}>$</Text>
      <Text style={styles.priceLevelSign}>$</Text>
      <Text style={styles.priceLevelSign}>$</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    priceLevelWrapper: {
        flexDirection: 'row',
    },
    priceLevelSign: {
        fontSize: 18,
        color: '#fff',
    },
});