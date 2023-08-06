import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import colorConstants from '../constants/Colors';

export default function Header() {
    return (
      <View style={styles.header}>
        <View style={styles.headerTitleWrapper}>
         <MaterialCommunityIcons name="bowl-mix" size={45} color="black" style={styles.headerTitleIcon}/>
         <Text style={styles.headerTitle}>nomnom</Text>
        </View>
        <AntDesign name="ellipsis1" size={30} color="black" style={styles.headerAdjustmentIcon}/>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitleWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitleIcon: {
        color: colorConstants.headerOrange,
        paddingRight: 7.5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colorConstants.headerOrange,
    },
    headerAdjustmentIcon: {
        padding: 10,
        color: 'grey',
    }
});