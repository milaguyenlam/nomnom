import { StyleSheet, View, Text, Dimensions } from 'react-native'
import React, { RefObject } from 'react'
import { useState, useEffect, useRef } from 'react';
import Swiper from 'react-native-deck-swiper';
import { DocumentData } from 'firebase/firestore';

import PictureCard from './PictureCard';

interface Props {
  eatery: DocumentData,
  currentEateryIndex: number,
}

export default function DeckSwiper({ eatery, currentEateryIndex } : Props) {  
  const [postIndex, setPostIndex] = useState<number>(0);

  useEffect(() => {
    setPostIndex(0);
  }, [currentEateryIndex]);

  const onSwiped = (direction: string, numberOfImages: number) => {    
    if(direction === 'right') {
      if((postIndex - 1) < 0) {
        setPostIndex(numberOfImages - 1);
      } else {
        setPostIndex(postIndex - 1);
      }
    } else {
      if((postIndex + 1) >= numberOfImages) {
        setPostIndex(0);
      } else {
        setPostIndex(postIndex + 1);
      }
    }
  }

  const numberOfImages: number = eatery.posts.length;

  return (
        <View style={styles.swiperWrapper}>
          <Swiper
            cards={eatery.posts}
            cardIndex={postIndex}
            renderCard={(post: string) => <PictureCard post={post} index={postIndex} eatery={eatery}/>}
            onSwipedRight={() => onSwiped('right', numberOfImages)}
            goBackToPreviousCardOnSwipeRight={true}
            onSwipedLeft={() => onSwiped('left', numberOfImages)}
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
            infinite={true}
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