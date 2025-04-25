import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

export default function DetailsPage() {
    const route = useRoute();
    const navigation = useNavigation();
    const { item } = route.params;

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.containerImg}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.detailImg}
                    />
                    <TouchableOpacity
                        style={styles.btnsImg}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={25} color={'#0F5F87'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnsImg, styles.btnFav]}>
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
                    <Text style={styles.desc}>
                        {item.description}
                    </Text>
                </View>

                <View style={styles.viewMap}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: item.latitude,
                        longitude: item.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                        title={item.name}
                        description={item.city_name}
                    />
                </MapView>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e1e1',
        width: '100%',
        paddingBottom: 50,
    },
    scrollContent: {
        alignItems: 'center',
        minHeight: '100%',
        marginTop: 30,
    },
    containerImg: {
        width: '100%',
        height: 300,
        position: 'relative',
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
        zIndex: 3,
        marginTop: -30,
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
        fontWeight: '600',
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
        fontWeight: '400',
    },
    map: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        
    },
    viewMap: {
        borderWidth: 4,
        borderColor: '#0F5F87',
        borderRadius: 8,
        alignSelf: 'center',
        width: '90%',
    }
});
