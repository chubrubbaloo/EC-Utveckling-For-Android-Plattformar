import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import Header from "./Header";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const MovieInput = ({setMovies}) => {

    const [textInput, setTextInput] = useState("");


    const handleChangedText = (text) => {
        setTextInput(text);
    }

    const handleAddedMovie = () => {
        setMovies((previous) => previous.concat(textInput));
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.movieInput}
                placeholder='Titel'
                onChangeText={handleChangedText}
                value={textInput}
            />
            <Pressable
                style={({ pressed }) => [styles.pressableButton,{ opacity: pressed ? 0.5 : 1 }]}
                onPress={handleAddedMovie}
            >
                <Ionicons name="add-circle" size={18} color="white" /> 
                <Text style={styles.buttonText}> Lägg Till</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
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
    buttonText : {
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center"
    },
    movieInput: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 1.5,
        width: '50%'

    }
})

export default MovieInput;