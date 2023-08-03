import { StyleSheet, TouchableOpacity, View, Linking } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';
import { DocumentData } from 'firebase/firestore';

//https://stackoverflow.com/questions/43214062/open-maps-google-maps-in-react-native

interface Props {
  swiperRef: React.RefObject<Swiper<DocumentData>>,
  eateryName: string,
}

const openGoogleMaps = (eateryName: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eateryName)}`;
  
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Google Maps is not installed.");
      }
    }).catch((error) => {
      console.error("Error opening Google Maps:", error);
    });
  };

export default function ActionButtons({ swiperRef, eateryName } : Props) {
  return (
    <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.skipButton} onPress={() => swiperRef.current?.swipeLeft()}>
            <Entypo name="cross" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={() => openGoogleMaps(eateryName)}>
            <Feather name="send" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton} onPress={() => swiperRef.current?.swipeRight()}>
            <AntDesign name="hearto" size={24} color="white" />
        </TouchableOpacity>
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