import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Initial from './src/pages/Initial';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';
import Favorites from './src/pages/Favorites';
import DetailsPage from './src/pages/Details';
import Profile from './src/pages/Profile';
import SearchPage from './src/pages/SearchPage';
import MapScreen from './src/pages/MapScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  const [initialRoute, setInitialRoute] = useState(null);



  useEffect(() => {
    async function getTokenUser() {
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log('Token esta aqui')
        setInitialRoute('home')
      } catch {
        console.log("token indisponivel")
        setInitialRoute('initial')
      }
    }
    getTokenUser();
  }, [])

  if (initialRoute === null) {
    return null; // ou <Loading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} screenOptions={{
        headerShown: false,
        animation: 'fade'
      }}>
        <Stack.Screen name='initial' component={Initial} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='register' component={Register} />
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='favorites' component={Favorites} />
        <Stack.Screen name='search' component={SearchPage} />
        <Stack.Screen name='details' component={DetailsPage} />
        <Stack.Screen name='profile' component={Profile} />
        <Stack.Screen name='maps' component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
