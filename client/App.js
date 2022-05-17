import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserContext from './context/userContext';
import { Home, Login } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState({
    username: '',
    phoneNumber: '',
    image: '',
    lat: 0.0,
    lng: 0.0,
    isSeller: false,
    isLoggedIn: false,
    id: 0,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
