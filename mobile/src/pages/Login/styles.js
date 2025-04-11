import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 25,
    },
    areaTitulo: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        width: '80%',
        marginTop: 100,
    },
    txtEntrar: {
        textAlign: 'center',
        color: '#0f5f87',
        fontSize: 40,
        fontWeight: 'bold',
    },
    txtFrase: {
        textAlign: 'center',
        color: '#3b3b3b',
        fontSize: 20,
        fontWeight: 'regular',
    },
    areaBtnSocial: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 30,
    },
    btnSocial: {
        backgroundColor: 'gray',
        width: 164,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
    },
    txtBtnSocial: {
        color: '#3b3b3b',
        fontSize: 20,
        fontWeight: 'semibold',
    },
    areaForm: {
        width: '80%',
        gap: 20,
    },
    areaInput: {
        gap: 5,
    },
    label: {
        fontSize: 18,
        fontWeight: 'regular',
        color: '#000',
    },
    input: {
        backgroundColor: '#d9d9d9',
        height: 53,
        width: '100%',
        borderWidth: 1,
        borderColor: '#0f5f87',
        borderRadius: 10,
        paddingHorizontal: 15,
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

    },
    txtFooter: {
        fontSize: 15,
        fontWeight: 'regular',
    },
    txtFooterBold: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0f5f87'
    }
});

export default styles