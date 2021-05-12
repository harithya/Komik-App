import React from 'react'
import { View, Text } from 'react-native'

const Wrapper = (props) => {
    return (
        <View style={styles.wrapper}>
            {props.children}
        </View>
    )
}

const styles = {
    wrapper: {
        backgroundColor: 'white',
        height: '100%',
    }
}

export default Wrapper
