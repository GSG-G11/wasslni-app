import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Platform,
  Image,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { Button, ErrorText, Form, Input, SubmitButton } from '../../components';
import { addParcelSchema } from '../../utils';

const AddParcel = () => {
  const [errMsg, setErrMsg] = useState('');
  const [image, setImage] = useState(null);
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
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.base64);

      console.log(image);
    }
  };
  const handleSubmit = () => {};
  return (
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
        <Text>{errMsg && <ErrorText errMsg={errMsg} />}</Text>
        <SubmitButton title="تأكيد" />
      </View>
    </Form>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});

export default AddParcel;
