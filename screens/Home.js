import { Dimensions, ImageBackground, NativeEventEmitter, StyleSheet, View} from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MovieInput from '../components/MovieInput';
import MovieList from '../components/MovieList';
import { findAll } from '../.expo-shared/database/DbUtils';

const Home = ({ navigation }) => {


    const [movies, setMovies] = useState([]);



    const emitter = new NativeEventEmitter()

    const deleteEmitter = emitter.addListener('delete', (movieName) => {
        findAll()
        .then(res => setMovies(res))
        .catch(err => console.log(err))
    })

    useEffect(() => {
        findAll()
        .then(res => setMovies(res))
        return () => deleteEmitter.remove()
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/color.jpg')}
                resizeMode='cover'
                style={styles.imagebackground}
            >
                <Header title='FilmAppen' />
                <MovieInput
                    setMovies={setMovies}
                />
                <MovieList
                    movies={movies}
                    navigation={navigation}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
    },
    imagebackground: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})

export default Home;