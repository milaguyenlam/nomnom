import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const isOpen = true;

const displayAppropriateText = (isOpen: boolean) => {
    if(isOpen) {
        return <Text style={styles.openStatusText}>open</Text>
    }

    return <Text style={styles.openStatusText}>closed</Text>
}

export default function OpenStatus() {
  return (
    <View style={[styles.openStatusWrapper, isOpen ? { backgroundColor: 'green' } : { backgroundColor: 'red' }]}>
      {displayAppropriateText(isOpen)}
    </View>
  )
}

const styles = StyleSheet.create({
    openStatusWrapper: {
        alignSelf: 'flex-start',
        borderRadius: 1000,
        paddingHorizontal: 22,
        paddingVertical: 10,
        marginBottom: 5,
    },
    openStatusText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 14,
    },
});