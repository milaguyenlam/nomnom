import { StyleSheet, View, Text } from 'react-native';

export default function DistanceText() {
    return (
        <View style={styles.distanceTextWrapper}>
            <Text style={styles.distanceText}>400 m</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    distanceTextWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    distanceText: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingTop: 7,
        paddingRight: 14,
        paddingLeft: 14,
        paddingBottom: 7,
        borderRadius: 8,
        color: '#fff',
    },
});