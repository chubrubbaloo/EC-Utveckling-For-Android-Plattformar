import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Home = ({navigation}) => {

    const handlePress = () => {
        navigation.navigate('SelectedMovie')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Detta är hemskärmen</Text>
            <Button title='Navigera till sida #2' onPress={handlePress}></Button>
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

export default Home;