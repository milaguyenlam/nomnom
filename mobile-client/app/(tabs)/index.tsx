import { StyleSheet, View, SafeAreaView } from 'react-native';
import ActionButtons from '../../components/ActionButtons';

import Header from '../../components/Header';
import PictureCard from '../../components/PictureCard';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homePage}>
        <Header />
        <PictureCard />
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