import { View, TextInput, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";


export default function SearchArea() {
  const navigation = useNavigation();
  const [textSearch, setTextSearch] = useState('');

  return (
    <View style={styles.pesquisaArea}>
      <View style={styles.iconPesquisa}>
        <Ionicons name='search' color={'#0f5f87'} size={20} />
      </View>

      <TextInput
        style={styles.inputPesquisa}
        placeholder='Pesquise seu destino'
        onChangeText={(text) => setTextSearch(text)}
        onSubmitEditing={() => navigation.navigate('search', {resultSearch: textSearch})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
})