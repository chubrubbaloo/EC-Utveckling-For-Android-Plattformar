import { NativeEventEmitter, Button, Pressable, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import HomeButton from '../components/HomeButton';
import { deleteById } from '../.expo-shared/database/DbUtils';

const MovieInfo = ({movie, navigation}) => {
    
    const emmiter = new NativeEventEmitter();

    const handleDelete = (id) => {
        deleteById(id)
            .then(emmiter.emit('delete', movie))
            .catch(err => console.log(err))

        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <FontAwesome style={styles.clicker} name="star" size={16} color="black" /> Betyg: {movie.rating} / 10
                {'\n'}<MaterialCommunityIcons style={styles.clicker} name="pistol" size={16} color="black" /> Genre: {movie.genre}
                {'\n'}<FontAwesome name="video-camera" size={16} color="black" /> Regissör: {movie.director}</Text>
            <Pressable
                style={({ pressed }) => [styles.pressablebutton, { opacity: pressed ? 0.5 : 1 }]}
                onPress={() => handleDelete(movie.id)}>
                <MaterialIcons style={styles.clicker} name="remove-circle" size={18} color="white" />
                <Text style={styles.buttontext}> Ta Bort</Text>
            </Pressable>
            <HomeButton  navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    pressablebutton: {
        marginTop: 15,
        backgroundColor: 'dodgerblue',
        color: 'white',
        padding: 5,
        borderRadius: 8,
        width: 100,
        borderWidth: 1.5,
        flexDirection: 'row',
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
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white'
    }

})

export default MovieInfo;