import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import API from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const navigation = useNavigation();

    async function loginUser(username, password) {

        if (!username || !password) {
            alert('Insira seus dados corretamente!')
            return;
        }

        data = {username, password}

        try {
            const response = await API.post('/login/', data)
            const token = response.data.token
            await AsyncStorage.setItem('userToken', token)
            navigation.navigate('home')
            console.log('Login Realizado com sucesso, token:', response.data.token)
        } catch (e){
            console.error('Erro ao fazer login:', e.message);
            alert('Erro', 'Usuário ou senha incorretos.')
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={{position: 'absolute', top: 30, left: 20}} onPress={() => navigation.goBack()}>
                <Ionicons
                    name='arrow-back'
                    size={42}
                    color={'#0f5f87'}
                />
            </TouchableOpacity>

            <View style={styles.areaTitulo}>
                <Text style={styles.txtEntrar}>Entrar</Text>
                <Text style={styles.txtFrase}>
                    Bem-vindo de volta ao turismo inteligente no Piauí.
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

            <Text style={{ fontSize: 20, fontWeight: 'semibold', marginVertical: 30, }}>ou</Text>

            <View style={styles.areaForm}>
                <View style={styles.areaInput}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholderTextColor={'#3b3b3b'}
                        placeholder='email@exemplo.com'
                        style={styles.input}
                        onChangeText={(text) => setUsername(text)}
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
                    <Text
                        style={{ fontSize: 15, fontWeight: 'regular', width: '100%', textAlign: 'right', marginTop: 3 }}
                    >
                        Esqueceu a senha?
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => loginUser(username, password)}>
                <LinearGradient
                    colors={['#012638', '#0F5F87']}
                    style={styles.btnGradient}
                >
                    <Text style={styles.txtBtn}>Entrar</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View style={{marginTop: 15,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5,}}>
                <Text style={styles.txtFooter}>Não tem uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('register')}>
                    <Text style={styles.txtFooterBold}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}

