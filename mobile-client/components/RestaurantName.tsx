import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function RestaurantName() {
  return (
    <Text style={styles.restaurantName}>Restaurace U Kohouta</Text>
  )
}

const styles = StyleSheet.create({
    restaurantName: {
        fontSize: 25,
        lineHeight: 25,
        fontWeight: 'bold',
        color: '#fff',
    }
});