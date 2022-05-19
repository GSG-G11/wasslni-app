import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Text, SafeAreaView } from 'react-native';
import { Parcels , Logout , AddParcel, Profile, ParcelDetails} from '.';
import UserContext from '../context/userContext';

const Tab = createBottomTabNavigator();
export default function MainContainer() {
  const { user: { role}} = useContext(UserContext);
  return (
    
      <Tab.Navigator initialRouteName="طرودي" >
        <Tab.Screen
          name="طرودي"
          component={Parcels}
          options={{
            tabBarActiveTintColor:'#ca011a' ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        {
          role?<Tab.Screen
          name="اضافة طرد"
          component={AddParcel}
          options={{
            tabBarActiveTintColor:'#ca011a' ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" color={color} size={size} />
            ),
          }}
        />:null
        }
        <Tab.Screen
          name="الملف الشخصي"
          component={Profile}
          options={{
            tabBarActiveTintColor:'#ca011a' ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="تفاصيل الطرد"
          component={ParcelDetails}
          initialParams={{ id: 1 }}
          options={{
            tabBarActiveTintColor:'#ca011a' ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons  name="book" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="تسجيل خروج"
          component={Logout}
          options={{
            tabBarActiveTintColor:'#ca011a' ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="logout" color={color} size={size} />
            ),
          }}
        />
        
      </Tab.Navigator>
     
  );
}
