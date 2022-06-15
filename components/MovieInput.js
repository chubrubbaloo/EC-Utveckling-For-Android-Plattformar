import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import Header from "./Header";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const MovieInput = ({setMovies}) => {

    const [textInput, setTextInput] = useState('');


    const handleChangedText = (text) => {
        setTextInput(text);
    }

    const handleAddedMovie = () => {
        setMovies((previous) => previous.concat(textInput));
    }



    return (
        <View>
            <Header title='FilmAppen' />
            <Text style={styles.titleInput}>FilmTitel</Text>
            <TextInput
                style={styles.movieInput}
                placeholder='Top Gun'
                onChangeText={handleChangedText}
                value={textInput}
            />
            <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                onPress={handleAddedMovie}
            >
                <Ionicons name="add-circle" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

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
    }
})

export default MovieInput;