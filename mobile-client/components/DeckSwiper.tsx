import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Swiper from 'react-native-deck-swiper';

import PictureCard from './PictureCard';

const restaurants = [0, 1, 2, 3];

export default function DeckSwiper() {
  const [index, setIndex] = useState<number>(0);

  return (
        <View style={styles.swiperWrapper}>
          <Swiper
            cards={restaurants}
            cardIndex={index}
            renderCard={card => <PictureCard />}
            backgroundColor={'transparent'}
            containerStyle={{
              height: Dimensions.get('window').height * 0.6
            }}
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
            cardStyle={{
              width: '100%',
              height: '100%',
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
    },
});