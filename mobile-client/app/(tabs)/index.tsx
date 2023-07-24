import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import { RefObject, useRef, useState } from 'react';
import ActionButtons from '../../components/ActionButtons';
import DeckSwiper from '../../components/DeckSwiper';

import Header from '../../components/Header';
import NextEaterySwiper from '../../components/NextEaterySwiper';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homePage}>
        <Header />
        <NextEaterySwiper />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homePage: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
});