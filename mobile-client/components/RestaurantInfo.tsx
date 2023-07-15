import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OpenStatus from './OpenStatus'
import RestaurantName from './RestaurantName'

export default function RestaurantInfo() {
  return (
    <View style={{backgroundColor: 'red'}}>
      <OpenStatus />
      <RestaurantName />
    </View>
  )
}

const styles = StyleSheet.create({})