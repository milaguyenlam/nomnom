import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function InformationIcon() {
  return (
    <View style={{ marginLeft: 15 }}>
      <Ionicons name="information-circle" size={32} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({});