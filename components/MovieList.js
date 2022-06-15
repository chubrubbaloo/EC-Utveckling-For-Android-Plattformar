import { Pressable, Text, TextInput, View, StyleSheet, FlatList } from "react-native";
import Header from "./Header";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';



const MovieList = ({ movies }) => {

    const renderMovies = ({ item: movie }) => {
        return (
            <View style={styles.movieContainer}>
                <MaterialIcons name="movie" size={18} color="black" />
                <Text style={styles.movieText}> {movie} </Text>
            </View>
        )
    }

    return (
        <FlatList
            style={styles.flatList}
            data={movies}
            renderItem={renderMovies}
            keyExtractor={(_, index) => index}
        />
    )
}

const styles = StyleSheet.create({
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

export default MovieList;
