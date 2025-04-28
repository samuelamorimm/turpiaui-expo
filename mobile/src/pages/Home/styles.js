import { StyleSheet } from "react-native";

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
        elevation: 2,
        marginRight: 15,
    },
    imgPontoTur: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    tituloPontoTur: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3b3b3b'
    },
    subtituloPontoTur: {
        fontSize: 12,
        fontWeight: 'semibold'
    },
    areaPopulares: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20,
        gap: 15,
        marginBottom: 100,
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

export default styles