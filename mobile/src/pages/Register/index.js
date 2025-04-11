import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import styles from './styles';
import API from '../../services/api'



export default function Register() {
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const navigation = useNavigation();

    async function RegisterUser(username, email, password) {
        if (!username || !email || !password) {
            alert('Preencha seus dados corretamente!')
            return;
        }

        data = { username, email, password }

        try {
            const response = await API.post('/register/', data)
            alert('Usuário registrado com sucesso!')
            console.log('Registro Realizado com sucesso!')
        } catch (e) {
            console.log('Erro ao relizar registro:', e.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={{ position: 'absolute', top: 30, left: 20 }} onPress={() => navigation.goBack()}>
                <Ionicons
                    name='arrow-back'
                    size={42}
                    color={'#0f5f87'}
                />
            </TouchableOpacity>

            <View style={styles.areaTitulo}>
                <Text style={styles.txtEntrar}>Registrar</Text>
                <Text style={styles.txtFrase}>
                    Bem-vindo ao turismo inteligente no Piauí.
                </Text>
            </View>

            <View style={styles.areaBtnSocial}>
                <TouchableOpacity style={styles.btnSocial} onPress={() => alert('Função disponível em breve!')}>
                    <Image
                        source={require('../../../assets/icon-google.png')}
                    />
                    <Text style={styles.txtBtnSocial}>Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSocial} onPress={() => alert('Função disponível em breve!')}>
                    <Image
                        source={require('../../../assets/icon-facebook.png')}
                    />
                    <Text style={styles.txtBtnSocial}>Facebook</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 20, fontWeight: 'semibold', marginVertical: 20, }}>ou</Text>

            <View style={styles.areaForm}>
                <View style={styles.areaInput}>
                    <Text style={styles.label}>Usuário</Text>
                    <TextInput
                        placeholderTextColor={'#3b3b3b'}
                        placeholder='usuario123'
                        style={styles.input}
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>

                <View style={styles.areaInput}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholderTextColor={'#3b3b3b'}
                        placeholder='email@exemplo.com'
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.areaInput}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholderTextColor={'#3b3b3b'}
                        placeholder='@124#...'
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => RegisterUser(username, email, password)}>
                <LinearGradient
                    colors={['#012638', '#0F5F87']}
                    style={styles.btnGradient}
                >
                    <Text style={styles.txtBtn}>Cadastrar</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, }}>
                <Text style={styles.txtFooter}>Já possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.txtFooterBold}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

