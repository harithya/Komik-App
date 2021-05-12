import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Wrapper, Carousel, Container, Comic } from '../components';
import { Color } from '../utils';

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
<<<<<<< HEAD
            popular: [],
            isLoading: true,
=======
>>>>>>> parent of c7db567 (Calling api komik popular)
            images: [
                require('../assets/img/1.jpg'),
                require('../assets/img/2.jpg'),
                require('../assets/img/3.jpg'),
                require('../assets/img/4.jpg'),
                require('../assets/img/5.jpg'),
            ]
        }
    }

<<<<<<< HEAD
    componentDidMount = async () => {
        await Http.get('manga/popular/1')
            .then(res => {
                this.setState({
                    'popular': res.data.manga_list
                })
            })

    }

=======
>>>>>>> parent of c7db567 (Calling api komik popular)
    render() {
        return (
            <Wrapper>
                <Carousel images={this.state.images} />
                <View style={styles.section}>
                    <Container>
                        <Text style={styles.title}>Rekomendasi</Text>
                    </Container>
                    <ScrollView style={{ marginLeft: 16, marginRight: 16 }} horizontal={true}>
                        <Comic />
                        <Comic />
                        <Comic />
                        <Comic />
                        <Comic />
                        <Comic />
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
    }
})

export default Home
