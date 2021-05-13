import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Color } from '../utils'

export default function Comic(props) {
    return (
        <View style={[styles.card, props.style]}>
            <Image
                source={{
                    uri: props.item.thumb
                }}
                style={styles.image} />
            <View style={styles.body}>
                <Text style={styles.type}>{props.item.type}</Text>
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{props.item.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 130,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Color.border,
        borderRadius: 6,
        marginRight: 16
    },
    body: {
        padding: 5,
    },
    image: {
        width: '100%',
        height: 67,
        resizeMode: 'contain',
        marginBottom: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    title: {
        fontSize: 11,
        fontFamily: 'Nunito-Regular',
        color: Color.font,
        paddingBottom: 5
    },
    type: {
        fontSize: 9,
        fontFamily: 'Nunito-Regular',
        color: Color.muted
    }
})