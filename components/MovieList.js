import { Pressable, Text, TextInput, View, StyleSheet, FlatList } from "react-native";
import Header from "./Header";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';



const MovieList = ({ movies, navigation }) => {

    const handleNavigation = (movie) => {
        navigation.navigate('SelectedMovie', { movie: movie });
    }

    const renderMovies = ({ item: movie }) => {
        return (
            <View style={styles.movieContainer}>
                <Pressable
                    style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                    onPress={() => handleNavigation(movie)}>
                    <Text style={styles.movieText}> <MaterialIcons style={styles.clicker} name="movie" size={15} color="black" /> {movie.title} </Text>
                </Pressable>
            </View>
        )
    }

    return (
        <FlatList
            style={styles.flatList}
            data={movies}
            renderItem={renderMovies}
            keyExtractor={(item, index) => index}
        />
    )
}

const styles = StyleSheet.create({
    movieContainer: {
        borderWidth: 1.5,
        margin: 10,
        backgroundColor: '#FFF',
        borderRadius: 6,
    },
    movieText: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
    },
})

export default MovieList;
