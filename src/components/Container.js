import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Container(props) {
    return (
        <View style={[props.style, styles.container]}>
            { props.children}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 16,
        paddingLeft: 16
    }
})
