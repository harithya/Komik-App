import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

export default function IconSearch() {
    return (
        <Icon name="search" size={25} color="white"
            style={{
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: -1, height: 1 },
            }} />
    )
}
