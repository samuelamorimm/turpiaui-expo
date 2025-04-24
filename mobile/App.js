import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Initial from './src/pages/Initial';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';
import Favorites from './src/pages/Favorites';
import DetailsPage from './src/pages/Details';
import Profile from './src/pages/Profile';

export default function App() {

  const Stack = createNativeStackNavigator();

  async function getTokenUser(){
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    getTokenUser
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={getTokenUser ? 'home' : 'initial'} screenOptions={{
        headerShown: false,
        animation: 'fade'
      }}>
        <Stack.Screen name='initial' component={Initial}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='register' component={Register}/>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='favorites' component={Favorites}/>
        <Stack.Screen name='details' component={DetailsPage}/>
        <Stack.Screen name='profile' component={Profile}/>
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
