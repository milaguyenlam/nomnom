import { StyleSheet, Text } from 'react-native'
import React from 'react'

interface Props {
  restaurantName: string,
}

export default function RestaurantName({ restaurantName } : Props) {
  return (
    <Text style={styles.restaurantName}>{restaurantName}</Text>
  )
}

const styles = StyleSheet.create({
    restaurantName: {
        flex: 1,
        fontSize: 23,
        lineHeight: 23,
        fontWeight: 'bold',
        color: '#fff',
    }
});