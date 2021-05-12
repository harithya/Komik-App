import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

const Wrapper = (props) => {
    return (
        <View style={styles.wrapper}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        height: '100%',
    }
})
export default Wrapper
