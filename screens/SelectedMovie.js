import { Button, StyleSheet, Text, View } from 'react-native';

const SelectedMovie = ({navigation}) => {

    const handlePress = () => {
        navigation.navigate('Home')
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Detta är sida 2!</Text>
            <Button title='Navigera tillbaka' onPress={handlePress}/>
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