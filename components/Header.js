import {StyleSheet, Text, View} from 'react-native';



const Header = ({title}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.header}> {title}</Text>
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
