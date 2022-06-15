import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, FlatList, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MovieInput from '../components/MovieInput';
import MovieList from '../components/MovieList';

const Home = ({ navigation }) => {

    const handlePress = () => {
        navigation.navigate('SelectedMovie')
    }

    const [movies, setMovies] = useState([]);

  

  

    useEffect(() => {
        console.log(movies)
    }, [movies]);


  

    return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../assets/color.jpg')}
            resizeMode='cover'
            style={styles.imageBackground}
            >

           <MovieInput 
           setMovies={setMovies}
           />
           <MovieList
           movies={movies}
           />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleInput: {
        fontWeight: 'bold'
    },
    movieInput: {
        margin: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        width: 125
    },
    flatList: {
        margin: 10
    },
    movieContainer: {
        margin: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderStyle: 'dotted',
        padding: 10,
        flexDirection: 'row',
    },
    movieText: {
        fontWeight: 'bold'
    },
})

export default Home;