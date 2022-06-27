import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import Header from '../components/Header';
import MovieInfo from '../components/MovieInfo';

const SelectedMovie = ({ route, navigation }) => {

    const { movie } = route.params



    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={require('../assets/color.jpg')}
                resizeMode='cover'
            >
                <Header
                    title={movie.title}
                />
                <MovieInfo
                    movie={movie}
                    navigation={navigation}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})

export default SelectedMovie;