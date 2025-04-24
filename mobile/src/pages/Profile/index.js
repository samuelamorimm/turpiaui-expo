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
        await AsyncStorage.removeItem('userToken')
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

