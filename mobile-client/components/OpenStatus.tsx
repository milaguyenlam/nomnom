import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  isOpen: boolean,
}

const displayAppropriateText = (isOpen: boolean) => {
    if(isOpen) {
        return <Text style={styles.openStatusText}>open</Text>
    }

    return <Text style={styles.openStatusText}>closed</Text>
}

export default function OpenStatus({ isOpen } : Props) {
  if(isOpen === null) {
    return (
      <View style={[styles.openStatusWrapper, { backgroundColor: 'lighthgrey' }]}>
        <Text>Unknown</Text>
      </View>
    )
  }

  return (
    <View style={[styles.openStatusWrapper, isOpen ? { backgroundColor: '#14b077' } : { backgroundColor: 'red' }]}>
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
    },
    openStatusText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 14,
    },
});