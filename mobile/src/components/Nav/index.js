import { StyleSheet, TouchableOpacity, Text, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Nav(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <Ionicons name="home" color={"#fff"} size={25}/>                
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="heart" color={"#fff"} size={25}/>                
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="map" color={"#fff"} size={25}/>                
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="person" color={"#fff"} size={25}/>                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 60,
        backgroundColor: '#041721',
        borderRadius: 10,
        position: 'absolute',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 20,
    }
})