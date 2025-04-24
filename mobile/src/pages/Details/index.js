import { SafeAreaView, View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export default function DetailsPage() {
    const route = useRoute();
    const navigation = useNavigation();
    const {item} = route.params

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    source={{
                        uri: item.image
                    }}
                    style={styles.detailImg}
                />
                <TouchableOpacity
                    style={styles.btnsImg}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={25} color={'#0F5F87'} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnsImg, styles.btnFav]}
                >
                    <Ionicons name={item.is_favorite ? 'heart' : 'heart-outline'} size={25} color={'#0F5F87'} />
                </TouchableOpacity>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={styles.txtLocationArea}>
                        <Ionicons name="location" size={25} color={'#0F5F87'} />
                        <Text style={styles.txtLocation}>{item.city_name}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.areaDesc}>
                <Text style={[styles.title, styles.titleDesc]}>Descrição</Text>
                <Text style={styles.desc}>{item.description}</Text>
            </View>

            <Image
                style={styles.map}
                source={require('../../../assets/mapa.png')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e1e1e1',
        marginTop: 25,
    },
    containerImg: {
        width: '100%',
        height: '40%'
    },
    detailImg: {
        height: '100%',
        width: '100%',
    },
    btnsImg: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 40,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    btnFav: {
        right: 0,
    },
    titleArea: {
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 15,
        bottom: '-10%',
        zIndex: 3,
        position: 'absolute',
        gap: 10,
        elevation: 2,
    },
    title: {
        fontSize: 30,
        color: '#3b3b3b',
        fontWeight: 'bold',
    },
    txtLocationArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    txtLocation: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#0F5F87',
    },
    areaDesc: {
        width: '100%',
        paddingTop: 50,
        paddingBottom: 15,
    },
    titleDesc: {
        marginLeft: 20,
        marginBottom: 10,
    },
    desc: {
        fontSize: 15,
        marginHorizontal: 35,
        textAlign: 'left',
        fontWeight: 'regular',
    },
    map: {
        width: '80%',
    }
    
})