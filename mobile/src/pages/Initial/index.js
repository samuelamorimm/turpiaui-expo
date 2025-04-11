import { BlurView } from 'expo-blur'
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Initial() {

    const navigation = useNavigation();

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../../assets/background.png')}
            resizeMode='cover'>


            <View style={styles.areaInferior}>
                <View style={styles.areaLogo}>
                    <Image
                        source={require('../../../assets/logo-pi.png')}
                        style={styles.logoImg}
                    />
                    <Text style={styles.txtLogo}>TurPiauí</Text>
                    <Text style={styles.slogan}>Conectando você aos destinos mais incríveis do Piauí, de norte a sul.</Text>
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('login')}>
                    <LinearGradient
                        colors={['#012638', '#0F5F87']}
                        style={styles.btnGradient}
                    >
                        <Text style={styles.txtBtn}>Começar</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

