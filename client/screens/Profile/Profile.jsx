import React, { useContext } from 'react';
import UserContext from '../../context/userContext';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Map } from '../../components';

function Profile() {
  const { user } = useContext(UserContext);
  return (
      <>
    <View style={styles.container}>
          <View>
            <Image source={user.urlImg} alt="profile" />
            <Text>Image</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
                <Text>الإسم :</Text>
              <Text>{user.userName}</Text>
            </Text>
            <Text style={styles.infoText}>
             <Text> الصلاحيات :</Text>
              <Text>{user.role ? ' تاجر ' : 'مشتري'}</Text>
            </Text>
            <Text style={styles.infoText}>
                <Text>رقم الجوال :</Text>
              <Text>{user.phoneNumber}</Text>
            </Text>
          </View>
        <Text>موقعي</Text>
      </View>
    <Map showPosition />
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    infoContainer: {
        flex:1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    infoText: {
        fontSize:25,
    }
});

export default Profile;