import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Color } from '../utils'

export default function Comic() {
    return (
        <View style={styles.card}>
            <Image
                source={{
                    uri: 'https://cover.komiku.id/wp-content/uploads/2018/08/Komik-Martial-Peak.jpeg?resize=450,235&quality=60'
                }}
                style={styles.image} />
            <View style={styles.body}>
                <Text style={styles.type}>Manga</Text>
                <Text style={styles.title}>God of Cooking</Text>
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
        marginRight: 0,
        marginLeft: 16,
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
        fontSize: 12,
        fontFamily: 'Nunito-Regular',
        color: Color.font,
        paddingBottom: 5
    },
    type: {
        fontSize: 10,
        fontFamily: 'Nunito-Regular',
        color: Color.muted
    }
})