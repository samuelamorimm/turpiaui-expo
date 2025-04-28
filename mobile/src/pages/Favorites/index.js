
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import API from '../../services/api';
import { favoritePoint } from '../../services/favorite';
import { getFavorites } from '../../services/favorite';

import Nav from '../../components/Nav';
import styles from './styles';


export default function Favorites() {
    const [dataFavorites, setDataFavorites] = useState(null)
    const [desfavorited, setDesfavorited] = useState(false)
    const navigation = useNavigation();

    useEffect(() => {
        getFavorites(setDataFavorites);
    }, [])

    useEffect(() => {
        getFavorites(setDataFavorites);
    }, [desfavorited])

    async function desfavorite(item) {
        try {
            await API.delete(`/favorites/${item.id}/`)
            await API.patch(`/tourist-points/${item.point}/`, { is_favorite: false })
            console.log('Sucesso ao deletar favorito')
            setDesfavorited(!desfavorited)
        } catch {
            console.log('erro ao deletar')
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtHeader}>Meus Favoritos</Text>
            </View>

            <View style={styles.areaFavorites}>
                <FlatList
                    data={dataFavorites}
                    style={styles.flatFavorite}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.areaPontoTur} onPress={() => navigation.navigate('details', { item })}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.imgPontoTur}
                            />
                            <View style={{ padding: 10, gap: 5, }}>
                                <Text style={styles.tituloPontoTur}>{item.name}</Text>
                                <Text style={styles.subtituloPontoTur}>{item.city_name}</Text>
                            </View>

                            <TouchableOpacity
                                style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: '#fff', position: 'absolute', top: 10, right: 10, }}
                                onPress={() => desfavorite(item)}
                            >
                                <Ionicons name='heart' size={20} color={'#0F5F87'} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    }
                />
            </View>




            <Nav />
        </SafeAreaView>
    );
}

