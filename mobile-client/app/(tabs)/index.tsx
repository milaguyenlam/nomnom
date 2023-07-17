import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import ActionButtons from '../../components/ActionButtons';
import DeckSwiper from '../../components/DeckSwiper';

import Header from '../../components/Header';

export default function TabOneScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homePage}>
        <Header />
        <DeckSwiper />
        <ActionButtons />
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