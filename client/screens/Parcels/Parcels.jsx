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
          <Title style={styles.title}>طرودي</Title>
        {loading ? <Loader /> : null}
        <View>
          {parcels.length ? (
            parcels.map((parcel) => (
              <View style={styles.card} key={parcel.id}>
                <Card
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    justifyContent :'center',
    alignItems:'center',
    marginTop:20,
  },
  card: {
    height: 200,
    width: 400,
  },
});
