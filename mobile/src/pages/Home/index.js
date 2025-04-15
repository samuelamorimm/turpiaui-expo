
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Nav from '../../components/Nav';


export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.txtHeader}>
                    <Text style={styles.txt1Header}>Olá, username!</Text>
                    <Text style={styles.txt2Header}>Explore diferentes
                        pontos turisticos do Piaui</Text>
                </View>

                <View style={styles.perfilHeader}>
                    <Ionicons name='person' size={28} color='#fff' />
                </View>
            </View>

            <View style={styles.pesquisaArea}>
                <View style={styles.iconPesquisa}>
                    <Ionicons name='search' color={'#0f5f87'} size={20} />
                </View>

                <TextInput
                    style={styles.inputPesquisa}
                    placeholder='Pesquise seu destino'
                />
            </View>

            <View style={styles.categoriaArea}>
                <Text style={styles.subtituloCategoria}>Categorias</Text>


                <View style={styles.areaBtnCategoria}>
                    <TouchableOpacity style={styles.btnCategoria}>
                        <View style={{ width: 50, height: 50, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', }}>
                            <Ionicons name='star' size={32} color={"#000"} />
                        </View>
                        <Text style={styles.txtCategoria}>Populares</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCategoria}>
                        <View style={{ width: 50, height: 50, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', }}>
                            <Ionicons name='star' size={32} color={"#000"} />
                        </View>
                        <Text style={styles.txtCategoria}>Populares</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCategoria}>
                        <View style={{ width: 50, height: 50, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', }}>
                            <Ionicons name='star' size={32} color={"#000"} />
                        </View>
                        <Text style={styles.txtCategoria}>Populares</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCategoria}>
                        <View style={{ width: 50, height: 50, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', }}>
                            <Ionicons name='star' size={32} color={"#000"} />
                        </View>
                        <Text style={styles.txtCategoria}>Populares</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.areaDestaques}>
                <TouchableOpacity style={styles.areaPontoTur}>
                    <Image
                        source={require('../../../assets/ponte-estaiada.png')}
                        style={styles.imgPontoTur}
                    />

                    <View style={{ padding: 10, gap: 5, }}>
                        <Text style={styles.tituloPontoTur}>Ponto Turístico</Text>
                        <Text style={styles.subtituloPontoTur}>Cidade</Text>
                    </View>

                    <TouchableOpacity style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: '#fff', position: 'absolute', top: 10, right: 10, }}>
                        <Ionicons name='heart-outline' size={15} />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <View style={styles.areaPopulares}>
                <Text style={styles.subtituloCategoria}>Populares</Text>

                <TouchableOpacity style={styles.pontoPopular}>
                    <Image
                        source={require('../../../assets/ponte-estaiada.png')}
                        style={styles.imgPopulares}
                    />

                    <View style={{ padding: 10, gap: 5, }}>
                        <Text style={styles.tituloPontoTur}>Ponto Turístico</Text>
                        <Text style={styles.subtituloPontoTur}>Cidade</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.pontoPopular}>

                    <Image
                        source={require('../../../assets/ponte-estaiada.png')}
                        style={styles.imgPopulares}
                    />

                    <View style={{ padding: 10, gap: 5, }}>
                        <Text style={styles.tituloPontoTur}>Ponto Turístico</Text>
                        <Text style={styles.subtituloPontoTur}>Cidade</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Nav/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e1e1',
        alignItems: 'center',
        marginTop: 25,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 20, 
        marginVertical: 30, 
        width: '100%', 
    },
    txtHeader: {
        width: '70%',
        gap: 10,
    },
    txt1Header: {
        fontSize: 16,
        fontWeight: 'regular',
        color: '#000'
    },
    txt2Header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    perfilHeader: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: "#0F5F87",
        justifyContent: 'center',
        alignItems: 'center',
    },
    pesquisaArea: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    inputPesquisa: {
        backgroundColor: 'rgba(15, 95, 135, 0.38)',
        borderRadius: 10,
        height: 40,
        paddingLeft: 40,
    },
    iconPesquisa: {
        position: 'absolute',
        left: 30,
    },
    subtituloCategoria: {
        fontSize: 25,
        color: '#3b3b3b',
        fontWeight: "bold",
    },
    categoriaArea: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20,
    },
    areaBtnCategoria: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    btnCategoria: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    areaDestaques: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    areaPontoTur: {
        backgroundColor: '#fff',
        width: 250,
        borderRadius: 15,
        elevation: 4,
    },
    imgPontoTur: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    tituloPontoTur: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3b3b3b'
    },
    subtituloPontoTur: {
        fontSize: 10,
        fontWeight: 'regular'
    },
    areaPopulares: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20,
        gap: 15,
    },
    pontoPopular: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
    },
    imgPopulares: {
        width: 60,
        height: 60,
        borderRadius: 10,
    }


});