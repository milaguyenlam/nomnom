import { StyleSheet, View, SafeAreaView } from 'react-native';

import Header from '../../components/Header';
import NextEaterySwiper from '../../components/NextEaterySwiper';

export default function HomeScreen() {
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