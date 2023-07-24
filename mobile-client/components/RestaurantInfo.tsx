import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OpenStatus from './OpenStatus'
import RestaurantName from './RestaurantName'
import InformationIcon from './InformationIcon'
import PriceLevel from './PriceLevel'
import RatingText from './RatingText'
import { Octicons } from '@expo/vector-icons';
import { DocumentData } from 'firebase/firestore'

interface Props {
    eatery: DocumentData,
}

export default function RestaurantInfo({ eatery } : Props) {
  return (
    <View style={styles.restaurantInfoWrapper}>
        <OpenStatus isOpen={eatery.contact.opening_hours.open_now}/>

        <View style={styles.restaurantSection}>
            <RestaurantName restaurantName={eatery.name}/>
            <InformationIcon />
        </View>

        <View style={styles.reviewsSection}>
            <PriceLevel priceLevel={eatery.price_level}/>
            <Octicons name="dot-fill" size={8} color="white" style={styles.dot}/>
            <RatingText rating={eatery.rating}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    restaurantInfoWrapper: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
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