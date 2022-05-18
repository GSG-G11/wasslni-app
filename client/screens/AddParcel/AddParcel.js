import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Button, ErrorText, Form, Input, SubmitButton } from '../../components';
import { addParcelSchema } from '../../utils';

const AddParcel = () => {
  const [errMsg, setErrMsg] = useState('');

  const handleImg = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        setFilePath(response);
      }
    });
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
