import React, { useContext } from 'react';
import UserContext from '../../context/userContext';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Map } from '../../components';

function Profile() {
  const { user } = useContext(UserContext);
  const { urlImg } = user;
  return (
      <>
    <View style={styles.container}>
          <View>
            <Image style={styles.profileImage} source={{ uri : urlImg }} alt="profile" />
          </View>
          <View style={styles.infoContainer}>
            <Text>
                <Text style={styles.infoTitleText}>الإسم :</Text>
                {' '}
              <Text style={styles.infoText}>{user.userName}</Text>
            </Text>
            <Text>
             <Text style={styles.infoTitleText}> الصلاحيات :</Text>
             {' '}
              <Text style={styles.infoText}>{user.role ? ' تاجر ' : 'مشتري'}</Text>
            </Text>
            <Text>
                <Text style={styles.infoTitleText}>رقم الجوال :</Text>
                {' '}
              <Text style={styles.infoText}>{user.phoneNumber}</Text>
            </Text>
          </View>
        <Text style={styles.mapText}>موقعي</Text>
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
        width: "100%",
        paddingBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 40,
    },
    infoContainer: {
        height: "30%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    infoTitleText: {
        fontSize:20,
        fontWeight: "bold",
    },
    infoText: {
        fontSize:16,
    },
    mapText: {
        fontSize:24,
        fontWeight: "bold",
        color: "#ca011a",
    }
});

export default Profile;