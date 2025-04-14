
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


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
                    <Ionicons name='search' color={'#0f5f87'} size={20}/>
                </View>

                <TextInput
                    style={styles.inputPesquisa}
                    placeholder='Pesquise seu destino'
                />
            </View>
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
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between', // <-- muda aqui
        alignItems: 'center',
        paddingHorizontal: 20, // <-- adiciona espaçamento lateral
        marginVertical: 30, // <-- opcional: um pouco de altura interna
        width: '100%', // <-- importante para ocupar a largura toda,
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
        borderWidth: 2,
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
    }

});