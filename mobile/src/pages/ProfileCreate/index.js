import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import API from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Nav from '../../components/Nav';
import styles from './styles';



export default function ProfileCreate() {

    const navigation = useNavigation();

    

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.leaveArea}>
            <TouchableOpacity
                style={styles.btnLeave}
                onPress={() => logout()}
            >
                <Ionicons name='log-out' color={"#3b3b3b"} size={25}/>
                <Text style={styles.textLeave}>Sair</Text>
            </TouchableOpacity>

            </View>


            <View style={styles.profileArea}>
                <View style={styles.profileImg}></View>

                <Text style={styles.nameProfile}>Insira um nome</Text>
            </View>

            <View style={styles.optionsArea}>
                <TouchableOpacity
                    style={styles.option}
                >
                    <View style={styles.nameAndIcon}>
                        <Ionicons name='person' size={25} color={'#3b3b3b'} />

                        <Text style={styles.optionText}>Meu Perfil</Text>
                    </View>
                    <Ionicons name='play' size={25} color={'#3b3b3b'} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('favorites')}
                >
                    <View style={styles.nameAndIcon}>
                        <Ionicons name='heart' size={25} color={'#3b3b3b'} />

                        <Text style={styles.optionText}>Favoritos</Text>
                    </View>
                    <Ionicons name='play' size={25} color={'#3b3b3b'} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                >
                    <View style={styles.nameAndIcon}>
                        <Ionicons name='today' size={25} color={'#3b3b3b'} />

                        <Text style={styles.optionText}>Histórico</Text>
                    </View>
                    <Ionicons name='play' size={25} color={'#3b3b3b'} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                >
                    <View style={styles.nameAndIcon}>
                        <Ionicons name='information-circle' size={25} color={'#3b3b3b'} />

                        <Text style={styles.optionText}>Termos de Uso</Text>
                    </View>
                    <Ionicons name='play' size={25} color={'#3b3b3b'} />
                </TouchableOpacity>
            </View>

            <Nav />
        </SafeAreaView>
    );
}

