import React, { useState, useEffect, useContext } from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import UserContext from '../../context/userContext';

export default function Map({ data, setPositin, showPosition }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [polyline, setPolyline] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const convertCoordinatesToObj = (array) => {
    return array.map((element) => {
      return { latitude: element[1], longitude: element[0] };
    });
  };
  useEffect(() => {
    if (data) {
      setPolyline(convertCoordinatesToObj(data));
    }
  }, []);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      if (setPositin) {
        setUser({
          ...user,
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text>
        {' '}
        {user.lat && (
          <MapView
            style={styles.map}
            region={{
              latitude: user.lat ? data[0][1] : user.lat,
              longitude: user.lng ? data[0][0] : user.lng,
              latitudeDelta: data ? 0.2 : 0.001,
              longitudeDelta: 0.0121,
            }}
            zoomEnabled={true}
            showsUserLocation={true}
            compass={true}
          >
            {showPosition && (
              <MapView.Marker
                coordinate={{ latitude: user.lat, longitude: user.lng }}
                pinColor="red"
              ></MapView.Marker>
            )}

            {polyline && (
              <>
                <Polyline
                  coordinates={polyline}
                  strokeColor="#CA011A"
                  strokeWidth={2}
                />
                <MapView.Marker
                  coordinate={{ latitude: data[0][1], longitude: data[0][0] }}
                  pinColor="red"
                ></MapView.Marker>
                <MapView.Marker
                  coordinate={{
                    latitude: data[data.length - 1][1],
                    longitude: data[data.length - 1][0],
                  }}
                  pinColor="red"
                ></MapView.Marker>
              </>
            )}
          </MapView>
        )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
});
