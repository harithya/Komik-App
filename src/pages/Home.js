import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Wrapper, Carousel, Container, Comic } from '../components';
import { Color, Http } from '../utils';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            popular: [],
            images: [
                require('../assets/img/1.jpg'),
                require('../assets/img/2.jpg'),
                require('../assets/img/3.jpg'),
                require('../assets/img/4.jpg'),
                require('../assets/img/5.jpg'),
            ]
        }
    }

    componentDidMount = async () => {
        await Http.get('manga/popular/1')
            .then(res => {
                this.setState({ 'popular': res.data.manga_list })
            })
<<<<<<< Updated upstream
        console.log(this.state.popular);
=======
        console.log("hello");
>>>>>>> Stashed changes
    }

    render() {
        return (
            <Wrapper>
                <Carousel images={this.state.images} />
                <View style={styles.section}>
                    <Container>
                        <Text style={styles.title}>Populer</Text>
                    </Container>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scroll}
                        horizontal={true}>
                        {this.state.popular.map((val, key) => {
                            return (<Comic key={key} item={val} />)
                        })}
                    </ScrollView>
                </View>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    section: {
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Nunito-SemiBold',
        color: Color.font,
        marginBottom: 15
    },
    scroll: {
        paddingRight: 16,
        paddingLeft: 16,
    }
})

export default Home
