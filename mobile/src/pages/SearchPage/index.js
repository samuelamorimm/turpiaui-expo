import { SafeAreaView, View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
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
    getTouristPoints(setData);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerSearch}>
        <SearchArea />
      </View>

      <View style={styles.resultArea}>
        <Text style={styles.resultText}>Resultados para: {resultSearch}</Text>


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
  }

})