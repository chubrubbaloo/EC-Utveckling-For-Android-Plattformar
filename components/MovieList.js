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

                <Text style={styles.movieText}> {movie} </Text>
                <Pressable
                   style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                    onPress={() => handleNavigation(movie)}>
                    <MaterialIcons style={styles.clicker} name="arrow-forward" size={30} color="black" />
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
    pressableMovie: {
    },

    flatList: {
        // backgroundColor: 'blue'

    },
    movieContainer: {
        borderWidth: 1.5,
        margin: 10,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    movieText: {
        fontWeight: "bold",
        fontSize: 20,
    },
})

export default MovieList;
