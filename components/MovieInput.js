import { Pressable, Text, TextInput, View, StyleSheet, Alert } from "react-native";
import Header from "./Header";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const MovieInput = ({ setMovies }) => {

    const [textInput, setTextInput] = useState({ title: '', rating: '', genre: '', director: '' });


    const handleChangedText = (text, key) => {
        setTextInput((prev) => ({ ...prev, [key]: text }));

    }

    const handleAddedMovie = () => {
        if (textInput.title.length < 1) {
            Alert.alert('Hoppsan!', 'Inga fält får vara tomma.')
        } else {
            setMovies((previous) => previous.concat(textInput));
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.movieInput}
                placeholder='Titel'
                onChangeText={(title) => handleChangedText(title, 'title')}
                value={textInput.title}
            />
            <TextInput
                style={styles.movieInput}
                placeholder='Betyg (1-10)'
                onChangeText={(rating) => handleChangedText(rating, 'rating')}
                value={textInput.rating}
                maxLength={2}
            />
            <TextInput
                style={styles.movieInput}
                placeholder='Genre'
                onChangeText={(genre) => handleChangedText(genre, 'genre')}
                value={textInput.genre}
            />
            <TextInput
                style={styles.movieInput}
                placeholder='Regissör'
                onChangeText={(director) => handleChangedText(director, 'director')}
                value={textInput.director}
            />
            <Pressable
                style={({ pressed }) => [styles.pressableButton, { opacity: pressed ? 0.5 : 1 }]}
                onPress={handleAddedMovie}
            >
                <Ionicons name="add-circle" size={18} color="white" />
                <Text style={styles.buttonText}> Lägg Till</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: "center",
        marginVertical: 20
    },
    pressableButton: {
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: 'dodgerblue',
        color: 'white',
        padding: 5,
        borderRadius: 8,
        width: 100,
        borderWidth: 1.5
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center"
    },
    movieInput: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 5,
        borderRadius: 6,
        borderWidth: 1.5,
        width: '50%'

    }
})

export default MovieInput;