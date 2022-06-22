import { NativeEventEmitter, Button, Pressable, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../components/Header';

const SelectedMovie = ({ route, navigation }) => {

    const { movie } = route.params

    const emmiter = new NativeEventEmitter();

    const handleDelete = () => {
        emmiter.emit('delete', movie)
        navigation.goBack();
    }

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
                <Text style={styles.text}>
                    <FontAwesome style={styles.clicker} name="star" size={16} color="black" /> Betyg: {movie.rating} / 10
                    {'\n'}<MaterialCommunityIcons style={styles.clicker} name="pistol" size={16} color="black" /> Genre: {movie.genre}
                    {'\n'}<FontAwesome name="video-camera" size={16} color="black" /> Regissör: {movie.director}</Text>
                <Pressable
                    style={({ pressed }) => [styles.pressableButton, { opacity: pressed ? 0.5 : 1 }]}
                    onPress={handleDelete}>
                    <MaterialIcons style={styles.clicker} name="remove-circle" size={18} color="white" />
                    <Text style={styles.buttonText}> Ta Bort</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    addMargin: {
        marginBottom: 50
    },
    pressableButton: {
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
        width: Dimensions.get('window').width, // För backgrundbilden...
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
    buttonText: {
        fontWeight: 'bold',
        color: 'white'
    }

})

export default SelectedMovie;