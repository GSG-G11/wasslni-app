import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Button,
  ErrorText,
  Form,
  Input,
  Loader,
  SubmitButton,
} from '../../components';
import { addParcelSchema } from '../../utils';
import axios from 'axios';
import UserContext from '../../context/userContext';

const AddParcel = ({ navigation }) => {
  const {
    user: { phoneNumber: phoneNumberContext },
    setParcels,
    parcels,
  } = useContext(UserContext);
  const [errMsg, setErrMsg] = useState('');
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
          alert(
            'Sorry, Camera roll permissions are required to make this work!'
          );
        }
      }
    })();
  }, []);

  const handleImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.base64);
      setErrMsg('');
    }
  };
  const handleSubmit = async (e) => {
    setIsLoading(true);
    const { name, price, phoneNumber } = e;
    if (!image) {
      setErrMsg('الرجاء اختيار صورة');
      setIsLoading(false);
      return;
    }
    if (phoneNumberContext.slice(4) === phoneNumber) {
      setErrMsg('   لا يمكن اضافة طرد لنفسك , الرجاء تغيير الرقم');
      setIsLoading(false);
      return;
    }

    setErrMsg('');
    try {
      const response = await axios.post(
        'https://wasslni.herokuapp.com/api/v1/parcels/',
        {
          name,
          phoneNumber: `+970${phoneNumber}`,
          price,
          image: 'data:image/jpeg;base64,' + image,
        }
      );
      const { id, status, name: parcelName } = response.data.data;
      setParcels([...parcels, { id, status, name: parcelName }]);
      setIsLoading(!isLoading);
      return navigation.navigate('طرودي');
    } catch (error) {
      setIsLoading(false);
      setErrMsg('لا يوجد زبون بهذا الرقم');
    }
  };

  return (
    <View style={styles.addParcelContainer}>
    <Form
      initialValues={{ name: '', phoneNumber: '', price: '' }}
      validationSchema={addParcelSchema}
      onSubmit={handleSubmit}
    >
      <View style={styles.formContainer}>
        <Input name="name" type="text" placeholder="اسم الطرد" />
        <Input name="phoneNumber" type="text" placeholder="رقم المشتري" />
        <Input name="price" type="text" placeholder="سعر الطرد" />
        <Button onPress={handleImg} title="اختر صورة"></Button>
        {image && (
          <Image
            source={{ uri: `data:image/gif;base64,${image}` }}
            style={{ width: 200, height: 200 }}
          />
        )}

        <SubmitButton title="تأكيد" />
        <Text>{errMsg && <ErrorText errMsg={errMsg} />}</Text>
        {isLoading && <Loader />}
      </View>
    </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  addParcelContainer:{
    backgroundColor:'#fbd449',
    flex:1,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});

export default AddParcel;
