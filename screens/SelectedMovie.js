import { Button, StyleSheet, Text, View } from 'react-native';

const SelectedMovie = ({route}) => {

    const { movie } = route.params

   

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Film: {movie}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
})

export default SelectedMovie;