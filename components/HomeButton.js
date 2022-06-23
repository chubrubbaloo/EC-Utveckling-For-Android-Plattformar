import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const HomeButton = ({ navigation }) => {

    const handlePress = () => {
        navigation.navigate('Home')
    }

    return (
        <View accessible={true} accessibilityLabel='Home button' style={styles.buttoncontainer}>
            <Pressable
                onPress={handlePress}
                style={({ pressed }) => [styles.homebutton, { opacity: pressed ? 0.5 : 1.0 }]}
            >
                <Text style={styles.buttontext}>
                <Ionicons name="home" size={18} color="black" />
                    {" "} Hem
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttoncontainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    homebutton: {
        backgroundColor: '#FB7A1F',
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 1,
        width: '25%'
    },
    buttontext: {
        flexDirection: 'row',
        color: '#000000',
        fontWeight: 'bold',
    }

})

export default HomeButton;