import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function MiDatos() {
    return (
        <View >
            <Text style = {styles.Letra}>ADRIAN DALI </Text>
            <Text> 20 ANIOS </Text>
            <Text> REACT NATIVE </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    Letra: {
        fontSize: 50
    },
  });
  