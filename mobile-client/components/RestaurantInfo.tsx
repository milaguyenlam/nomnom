import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OpenStatus from './OpenStatus'
import RestaurantName from './RestaurantName'
import InformationIcon from './InformationIcon'
import PriceLevel from './PriceLevel'
import RatingText from './RatingText'
import { Octicons } from '@expo/vector-icons';

export default function RestaurantInfo() {
  return (
    <View style={styles.restaurantInfoWrapper}>
        <OpenStatus />

        <View style={styles.restaurantSection}>
            <RestaurantName />
            <InformationIcon />
        </View>

        <View style={styles.reviewsSection}>
            <PriceLevel />
            <Octicons name="dot-fill" size={8} color="white" style={styles.dot}/>
            <RatingText />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    restaurantInfoWrapper: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    restaurantSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewsSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        marginHorizontal: 12.5,
    },
});