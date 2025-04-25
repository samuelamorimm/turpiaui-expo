import { StyleSheet, TouchableOpacity, Text, View, ImageBackground} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Nav(){

    const navigation = useNavigation();

    return(
        <ImageBackground
            source={require('../../../assets/fundo-blur.png')}
            resizeMode='cover'
            style={styles.containerImg}
        >
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <Ionicons name="home" color={"#fff"} size={25}/>                
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('favorites')}>
                <Ionicons name="heart" color={"#fff"} size={25}/>                
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('maps')}>
                <Ionicons name="map" color={"#fff"} size={25}/>                
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                <Ionicons name="person" color={"#fff"} size={25}/>                
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 60,
        backgroundColor: '#041721',
        borderRadius: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    containerImg: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        position: 'absolute',
        height: 120,
    }
})