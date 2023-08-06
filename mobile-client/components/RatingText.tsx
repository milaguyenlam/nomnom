import { StyleSheet, Text } from 'react-native'
import React from 'react'

interface Props {
  rating: number,
}

export default function RatingText({ rating } : Props) {
  return (
    <Text style={styles.ratingText}>{rating}</Text>
  )
}

const styles = StyleSheet.create({
    ratingText: {
        fontSize: 18,
        color: '#fff',
    },
});