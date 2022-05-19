import { useContext, useState } from 'react';
import { StyleSheet ,  SafeAreaView} from 'react-native';
import UserContext from './context/userContext';
import { AddParcel, Home, Login, Parcels } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './screens/MainContainer';


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
      <SafeAreaView>
      <NavigationContainer>
        {!user.isLoggedIn ?
         <Stack.Navigator>
          <Stack.Screen name="وصلني" component={Home} />
          <Stack.Screen name="تسجيل الدخول" component={Login} />
        </Stack.Navigator>
        :<MainContainer />}
      </NavigationContainer>
      </SafeAreaView>
      
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
