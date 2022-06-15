import {StyleSheet, Text} from 'react-native';



const Header = ({title}) => {
    return (
        <Text style={styles.header}> {title}</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        padding: 100,
        marginBottom: 10,
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default Header;
