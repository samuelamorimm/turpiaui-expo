import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import styles from "../Home/styles";

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

                <View style={styles.hr}/>

                <View style={styles.viewMap}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: parseFloat(item.latitude),
                        longitude: parseFloat(item.longitude),
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: parseFloat(item.latitude),
                            longitude: parseFloat(item.longitude),
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

