import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React, { RefObject } from 'react'
import { useState, useEffect, useRef } from 'react';
import Swiper from 'react-native-deck-swiper';
import { DocumentData } from 'firebase/firestore';

import PictureCard from './PictureCard';

interface Props {
  eateries: DocumentData[],
  currentEateryIndex: number,
  setCurrentEateryIndex: React.Dispatch<React.SetStateAction<number>>,
}

export default function DeckSwiper({ eateries, currentEateryIndex, setCurrentEateryIndex } : Props) {  
  const onSwiped = (direction: string, numberOfEateries: number) => {    
    if(direction === 'right') {
      // Next/favourite eatery
      setCurrentEateryIndex(currentEateryIndex + 1);
      console.log("Next/favourite eatery.");

      // Add to favourite...
    } else {
      // Never go back
      setCurrentEateryIndex(currentEateryIndex + 1);
      console.log("Discard eatery.");
    }
  }

  const numberOfEateries: number = 5;

  if(currentEateryIndex >= numberOfEateries) {
    return <Text>No more eateries...</Text>
  }

  return (
        <View style={styles.swiperWrapper}>
          <Swiper
            cards={eateries}
            cardIndex={currentEateryIndex}
            renderCard={(eatery: DocumentData) => <PictureCard eatery={eatery}/>}
            onSwipedRight={() => onSwiped('right', numberOfEateries)}
            onSwipedLeft={() => onSwiped('left', numberOfEateries)}
            backgroundColor={'transparent'}
            containerStyle={{
              height: Dimensions.get('window').height * 0.6,
              zIndex: 10,
            }}
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
            cardStyle={{
              width: '100%',
              height: '100%',
              zIndex: 10,
            }}
            verticalSwipe={false}
          />
        </View>   
  )
}

const styles = StyleSheet.create({
    swiperWrapper: {
      height: Dimensions.get('window').height * 0.6,
      zIndex: 10,
    },
});