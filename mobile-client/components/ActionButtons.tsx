import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RefObject } from 'react';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';
import { DocumentData } from 'firebase/firestore';

interface Props {
    numberOfEateriesValidation: (nextEateryIndex: number) => void,
    currentEateryIndex: number,
}

export default function ActionButtons({ currentEateryIndex, numberOfEateriesValidation } : Props) {
  return (
    <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.skipButton} onPress={() => numberOfEateriesValidation(currentEateryIndex + 1)}>
            <Entypo name="cross" size={35} color="white" />
        </TouchableOpacity>
        <View style={styles.sendButton}>
            <Feather name="send" size={30} color="black" />
        </View>
        <View style={styles.favoriteButton}>
            <AntDesign name="hearto" size={24} color="white" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    actionButtons: {
        flexDirection: 'row',
        marginVertical: 25,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    skipButton: {
        width: 55,
        height: 55,
        borderRadius: 1000,
        backgroundColor: '#303030',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButton: {
        width: 55,
        height: 55,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    favoriteButton: {
        width: 55,
        height: 55,
        borderRadius: 1000,
        backgroundColor: '#ff6b00',
        justifyContent: 'center',
        alignItems: 'center',
    },
});