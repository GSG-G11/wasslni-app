import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Text, SafeAreaView } from 'react-native';
import { Parcels , Logout} from '.';

const Tab = createBottomTabNavigator();
export default function MainContainer() {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Parcels"
          component={Parcels}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Logout"
          component={Logout}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="logout" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
