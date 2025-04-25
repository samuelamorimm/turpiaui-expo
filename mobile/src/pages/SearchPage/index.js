import { SafeAreaView, View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image, SafeAreaViewBase } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";

import Nav from "../../components/Nav";
import SearchArea from "../../components/SearchArea";

import { getTouristPoints } from "../../services/favorite";

export default function SearchPage() {
  const route = useRoute();
  const { resultSearch } = route.params
  const [data, setData] = useState([])


  useEffect(() => {
    async function searchPoints() {

      try {

        const response = await getTouristPoints();
        console.log('Dados da API: ', response)
        const result = response.filter(
          (d) => d.name.toLowerCase().includes(resultSearch.trim().toLowerCase())
        )
        setData(result)
        console.log('RESULTADO: ', result)
        console.log('Valor recebido em resultSearch:', resultSearch);
      } catch (error) {
        console.log('Erro ao executar busca')
      }

    }

    searchPoints();
  }, [resultSearch])



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerSearch}>
        <SearchArea />
      </View>

      <View style={styles.resultArea}>
        <Text style={styles.resultText}>Resultados para: {resultSearch}</Text>
      </View>

      <View style={styles.areaPointsResults}>
        <FlatList
          data={data}
          style={styles.flatSearch}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.areaPontoTur}>
              <Image
                source={{ uri: item.image }}
                style={styles.imgPontoTur}
              />

              <View style={{ padding: 10, gap: 5, }}>
                <Text style={styles.tituloPontoTur}>{item.name}</Text>
                <Text style={styles.subtituloPontoTur}>{item.city_name}</Text>
              </View>

              <TouchableOpacity style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: '#fff', position: 'absolute', top: 10, right: 10, }}>
                <Ionicons name='heart' size={20} />
              </TouchableOpacity>
            </TouchableOpacity>
          }
        />
      </View>


      <Nav />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    marginTop: 25,
  },
  containerSearch: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30
  },
  resultArea: {
    width: '100%',
    paddingHorizontal: 30,
  },
  resultText: {
    fontSize: 30,
    color: '#3b3b3b',
    fontWeight: 'bold'
  },
  areaPontoTur: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 15,
    width: '100%',
    marginBottom: 30,
    elevation: 5,
},
imgPontoTur: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
},
tituloPontoTur: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b3b3b'
},
subtituloPontoTur: {
    fontSize: 15,
    fontWeight: 'semibold'
},
areaPointsResults: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
},
flatSearch: {
  backgroundColor: '#e1e1e1',
  width: '85%',
  borderRadius: 15,
}

})