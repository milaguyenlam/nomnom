import { StyleSheet, View, Dimensions } from 'react-native';

const numberOfLines = 4;

interface Props {
    numberOfImages: number,
    postIndex: number,
}

const displayIndicators = (numberOfImages: number, postIndex: number) => {
    let indicators = [];

    for(let i = 0; i < numberOfImages; i++) {
        if(i === postIndex) {
            if(i === 0) {
                indicators.push(<View key={i} style={[styles.line, styles.furthestLeft, styles.currentLine]}/>)
            } else if(i === (numberOfImages - 1)) {
                indicators.push(<View key={i} style={[styles.line, styles.furthestRight, styles.currentLine]}/>)
            } else {
                indicators.push(<View key={i} style={[styles.line, styles.currentLine]}/>)
            }
        } else {
            if(i === 0) {
                indicators.push(<View key={i} style={[styles.line, styles.furthestLeft]}/>)
            } else if(i === (numberOfImages - 1)) {
                indicators.push(<View key={i} style={[styles.line, styles.furthestRight]}/>)
            } else {
                indicators.push(<View key={i} style={[styles.line]}/>)
            }
        }
    }

    return indicators;
}

export default function PictureIndicator({ numberOfImages, postIndex } : Props) {
    return (
        <View style={styles.pictureIndicator}>
            {displayIndicators(numberOfImages, postIndex)}
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