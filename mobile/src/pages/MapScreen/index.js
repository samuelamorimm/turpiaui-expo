// MapScreen.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Nav from '../../components/Nav';
import { useEffect, useState } from 'react';
import { getTouristPoints } from '../../services/favorite';
import { Ionicons } from '@expo/vector-icons';

export default function MapScreen() {

  const [data, setData] = useState(null)

  const initialLocation = {
    latitude: -5.08921, 
    longitude: -42.8016,
    latitudeDelta: 8.99, 
    longitudeDelta: 8.99,
  };


  useEffect(() => {
    async function loadPoints() {
      const response = await getTouristPoints();
      setData(response)
    }

    loadPoints();
  }, [])



  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialLocation}
      >
        {data ? data.map((point, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(point.latitude),
              longitude: parseFloat(point.longitude),
              
            }}
            title={point.name}
          />
        )) : null}
      </MapView>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  
});
