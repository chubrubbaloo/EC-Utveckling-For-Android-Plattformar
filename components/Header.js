import {StyleSheet, Text, View} from 'react-native';



const Header = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.header}> FilmAppen</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 40,
        alignItems: 'center',
        color: '#FFF'
    }
})

export default Header;
