import { Alert, Button, Dimensions, FlatList, ImageBackground, NativeEventEmitter, Pressable, StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MovieInput from '../components/MovieInput';
import MovieList from '../components/MovieList';

const Home = ({ navigation }) => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log(movies)
    }, [movies]);

    const emitter = new NativeEventEmitter()

    emitter.addListener('delete', (movieName) => {
        setMovies(prev => prev.filter(movie => movie != movieName))
    })


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
                <StatusBar
                    // backgroundColor="#FFF"
                    barStyle="light-content"
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