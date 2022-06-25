import { NativeEventEmitter, Button, Pressable, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import HomeButton from '../components/HomeButton';
import { deleteById } from '../.expo-shared/database/DbUtils';
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
    addMargin: {
        marginBottom: 50
    },
    pressablebutton: {
        marginTop: 15,
        backgroundColor: 'dodgerblue',
        color: 'white',
        padding: 5,
        borderRadius: 8,
        width: 100,
        borderWidth: 1.5,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    text: {
        marginTop: 100,
        borderWidth: 1.5,
        backgroundColor: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
        borderRadius: 8
    },
    buttontext: {
        fontWeight: 'bold',
        color: 'white'
    }

})

export default SelectedMovie;