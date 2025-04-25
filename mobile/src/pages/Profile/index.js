import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import API from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Profile() {

    const navigation = useNavigation();

    async function logout() {
        try {
            await AsyncStorage.removeItem('userToken')
            navigation.navigate('initial')
            
        } catch (error) {
            console.log('ERRO AO FAZER LOGOUT')
        }

    }

    return (
        <SafeAreaView>

            <Text>aaaaaaaaaaaaaaaaaaa</Text>
            <Button
                title='sair'
                onPress={() => logout()}
            />
            
        </SafeAreaView>
    );
}

