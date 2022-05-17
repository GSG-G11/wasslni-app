import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserContext from './context/userContext';

export default function App() {
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
      <View style={styles.container}></View>
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
