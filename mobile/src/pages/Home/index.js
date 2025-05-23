
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Nav from '../../components/Nav';
import SearchArea from '../../components/SearchArea';
import styles from './styles';
import API from '../../services/api';
import axios from 'axios';
import { favoritePoint } from '../../services/favorite';
import { getTouristPoints } from '../../services/favorite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUsername } from '../../services/favorite';


export default function Home() {
    const navigation = useNavigation();
    const [data, setData] = useState([])
    const [profileUser, setProfileUser] = useState('')




    useEffect(() => {
        async function saveData(params) {
            try {
                const response = await getTouristPoints();
                const name = await getUsername();
                setProfileUser(name)
                setData(response)
            }
            catch {
                console.log('Erro ao carregar pontos.')
            }
        }
        saveData();
        
    }, [])



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.header}>
                    <View style={styles.txtHeader}>
                        <Text style={styles.txt1Header}>Olá, {profileUser}!</Text>
                        <Text style={styles.txt2Header}>Explore diferentes
                            pontos turisticos do Piaui</Text>
                    </View>

                    <View style={styles.perfilHeader}>
                        <Ionicons name='person' size={28} color='#fff' />
                    </View>
                </View>

                <SearchArea />

                <View style={styles.categoriaArea}>
                    <Text style={styles.subtituloCategoria}>Categorias</Text>


                    <View style={styles.areaBtnCategoria}>

                        <TouchableOpacity style={styles.btnCategoria}>
                            <View style={{ width: 50, height: 50, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', }}>
                                <Ionicons name='star' size={32} color={'#0F5F87'} />
                            </View>
                            <Text style={styles.txtCategoria}>Populares</Text>
                        </TouchableOpacity>


                    </View>
                </View>

                <View style={styles.areaDestaques}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {data.map((item) =>
                            <TouchableOpacity
                                style={styles.areaPontoTur}
                                onPress={() => navigation.navigate('details', { item })}
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.imgPontoTur}
                                />

                                <View style={{ padding: 10, gap: 5, }}>
                                    <Text style={styles.tituloPontoTur}>{item.name}</Text>
                                    <Text style={styles.subtituloPontoTur}>{item.city_name}</Text>
                                </View>

                                <TouchableOpacity style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: '#fff', position: 'absolute', top: 10, right: 10, }} onPress={() => favoritePoint(item, setData)}>
                                    <Ionicons name={item.is_favorite ? 'heart' : 'heart-outline'} size={20} color={'#0F5F87'}/>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    </ScrollView>

                </View>

                <View style={styles.areaPopulares}>
                    <Text style={styles.subtituloCategoria}>Populares</Text>
                    
                        {data.map((item) =>
                            <TouchableOpacity
                                style={styles.pontoPopular}
                                onPress={() => navigation.navigate('details', { item })}
                            >
                                <Image
                                    source={{
                                        uri: item.image
                                    }}
                                    style={styles.imgPopulares}
                                />

                                <View style={{ padding: 10, gap: 5, }}>
                                    <Text style={styles.tituloPontoTur}>{item.name}</Text>
                                    <Text style={styles.subtituloPontoTur}>{item.city_name}</Text>
                                </View>

                                <TouchableOpacity style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: '#fff', position: 'absolute', top: 10, right: 10, }} onPress={() => favoritePoint(item, setData)}>
                                    <Ionicons name={item.is_favorite ? 'heart' : 'heart-outline'} size={25} color={'#0F5F87'}/>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                </View>

            </ScrollView>
            <Nav />
        </SafeAreaView>
    );
}

