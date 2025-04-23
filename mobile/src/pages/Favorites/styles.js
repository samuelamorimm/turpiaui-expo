import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e1e1',
        alignItems: 'center',
        marginTop: 25,
    },
    header : {
        height: 70,
        width: '100%',
        backgroundColor: '#012638',
        justifyContent: 'center',
    },
    txtHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 20,
    },
    areaPontoTur: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 15,
        elevation: 4,
        width: '100%',
        marginBottom: 25,
    },
    imgPontoTur: {
        width: '100%',
        height: 150,
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
    areaFavorites: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
    },
    flatFavorite: {
        width: '80%',
    }

});

export default styles