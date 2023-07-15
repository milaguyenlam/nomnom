import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RatingText() {
  return (
    <Text style={styles.ratingText}>4.2</Text>
  )
}

const styles = StyleSheet.create({
    ratingText: {
        fontSize: 18,
        color: '#fff',
    },
});