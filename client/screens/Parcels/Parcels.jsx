import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Platform, ScrollView } from 'react-native';
import { AddParcel, Button, Card, Loader, Title } from '../../components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import UserContext from '../../context/userContext';

export default function Parcels({ navigation }) {
  const { parcels, setParcels } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const getParcels = async () => {
    try {
      const response = await axios.get(
        'https://wasslni.herokuapp.com/api/v1/parcels/'
      );
      setParcels(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getParcels();
  }, []);
  return (
    <View style={styles.cardContainer}>
      <ScrollView>
        <View style={styles.title}>
          <Title>طرودي</Title>
        </View>
        {loading ? <Loader /> : null}
        <View>
          {parcels.length ? (
            parcels.map((parcel) => (
              <View style={styles.card}>
                <Card
                  key={parcel.id}
                  id={parcel.id}
                  name={parcel.name}
                  status={parcel.status}
                  navigation={navigation}
                />
              </View>
            ))
          ) : (
            <Title>لا يوجد طرود حاليا</Title>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    flex: 0,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
    direction: 'rtl',
  },
  cardContainer: {
    flex: 1,
    direction: 'ltr',
  },
  card: {
    height: Platform.OS === 'android' ? 200 : 200,
    width: '95%',
  },
});
