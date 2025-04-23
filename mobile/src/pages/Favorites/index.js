
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import API from '../../services/api';

import Nav from '../../components/Nav';
import styles from './styles';


export default function Favorites() {
    const [dataFavorites, setDataFavorites] = useState(null)

    useEffect(() => {
        async function getFavorites() {

            try {
                const response = await API.get('/favorites/')
                console.log('Busca de Favoritos efetuada:', response.data)
                setDataFavorites(response.data)
            } catch (e) {
                console.log('Erro ao realizar busca de dados.')
            }
        }

        getFavorites();
    }, [])


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
                        <TouchableOpacity style={styles.areaPontoTur}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.imgPontoTur}
                            /> 

                            <View style={{ padding: 10, gap: 5, }}>
                                <Text style={styles.tituloPontoTur}>{item.name}</Text>
                                <Text style={styles.subtituloPontoTur}>{item.city}</Text>
                            </View>

                            <TouchableOpacity style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: '#fff', position: 'absolute', top: 10, right: 10, }}>
                                <Ionicons name='heart' size={15} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    }
                />
            </View>




            <Nav />
        </SafeAreaView>
    );
}

