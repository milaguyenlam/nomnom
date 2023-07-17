import { StyleSheet, View, Dimensions } from 'react-native';

const numberOfLines = 4;

export default function PictureIndicator() {
    return (
        <View style={styles.pictureIndicator}>
            <View style={[styles.line, styles.furthestLeft, styles.currentLine]}></View>
            <View style={[styles.line]}></View>
            <View style={[styles.line]}></View>
            <View style={[styles.line, styles.furthestRight]}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    pictureIndicator: {
        marginTop: 15,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    line: {
        flex: 1/numberOfLines,
        marginLeft: 5,
        marginRight: 5,
        height: 5,
        borderRadius: 1000,
        backgroundColor: 'rgba(0,0,0,0.30)',
    },
    furthestLeft: {
        marginLeft: 0,
        marginRight: 5,
    },
    furthestRight: {
        marginLeft: 5,
        marginRight: 0,
    },
    currentLine: {
        backgroundColor: '#fff',
    },
});