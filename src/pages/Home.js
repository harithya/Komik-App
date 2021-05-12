import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Wrapper, Carousel } from '../components';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                require('../assets/img/1.jpg'),
                require('../assets/img/2.jpg'),
                require('../assets/img/3.jpg'),
                require('../assets/img/4.jpg'),
                require('../assets/img/5.jpg'),
            ]
        }
    }

    render() {
        return (
            <Wrapper>
                <Carousel images={this.state.images} />
            </Wrapper>
        )
    }
}

export default Home
