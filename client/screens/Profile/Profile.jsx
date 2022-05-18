import React, { useContext } from 'react';
import UserContext from '../../context/userContext';
import { Image, Text, View } from 'react-native';
import { Map } from '../../components';

function Profile() {
  const { user } = useContext(UserContext);
    console.log('====================================');
    console.log(user);
    console.log('====================================');
  return (
    <View>
      <View>
        <View>
          <View>
            <Image source={user.urlImg} alt="profile" />
          </View>
          <View>
            <Text>
                <Text>الإسم :</Text>
              <Text>{user.userName}</Text>
            </Text>
            <Text>
             <Text> الصلاحيات :</Text>
              <Text>{user.role ? ' تاجر ' : 'مشتري'}</Text>
            </Text>
            <Text>
                <Text>رقم الجوال :</Text>
              <Text>{user.phoneNumber}</Text>
            </Text>
          </View>
        </View>
        <Text>موقعي</Text>
        <View>
          <Map setPosition />
        </View>
      </View>
    </View>
  );
}

export default Profile;