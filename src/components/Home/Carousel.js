import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box';
import IconSearch from '../Header/IconSearch';

export default function Carousel(props) {
    return (
        <View>
            <View style={styles.search}>
                <IconSearch />
            </View>
            <SliderBox
                images={props.images}
                sliderBoxHeight={250}
                resizeMode='cover'
                circleLoop={true}
                autoplay={true}
                autoplayInterval={20000}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        position: 'absolute',
        zIndex: 99999,
        right: 16,
        top: 16

    }
})