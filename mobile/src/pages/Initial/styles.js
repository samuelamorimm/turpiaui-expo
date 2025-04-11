import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    areaImg: {
        width: '100%'
    },
    img: {
        width: '100%'
    },
    areaInferior: {
        width: '100%',
        alignItems: 'center',
        height: 450,
        position: 'absolute',
        bottom: 0,
        borderRadius: 50,
    },
    areaLogo: {
        alignItems: 'center',
        marginTop: 40,
        width: '90%'
    },
    logoImg: {
        width: 100,
        height: 100,
    },
    txtLogo: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#0f5f87',
        marginBottom: 20,
    },
    slogan: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3b3b3b',
        textAlign: 'center',
    },
    btn: {
        width: '80%',
        marginTop: 40,

    },
    btnGradient: {
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    txtBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,

    }
});

export default styles