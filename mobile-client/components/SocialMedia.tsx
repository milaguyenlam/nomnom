import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function SocialMedia() {
  return (
    <View style={styles.socialMediaWrapper}>
        <View style={styles.socialMediaCircle}>
            <Ionicons name="logo-instagram" size={36} color="white" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    socialMediaWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    socialMediaCircle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
});