import React, { useContext, useState } from 'react';
import { ErrorText, Form, Input, SubmitButton } from '../../components';
import { getUserInfo, loginSchema } from '../../utils/';
import axios from 'axios';
import UserContext from '../../context/userContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login({ navigation }) {
  const [errMsg, setErrMsg] = useState('');
  const { setUser  } = useContext(UserContext);
  const handleSubmit = async ({ phoneNumber, password }) => {
    try {
      const response = await axios.post('https://wasslni.herokuapp.com/api/v1/auth/login', {
        phoneNumber: `+970${phoneNumber}`,
        password,
      });
      const decodedCookie = getUserInfo(response.headers['set-cookie']);
      setUser({ isLoggedIn: true, decodedCookie });
      navigation.navigate('Home')
    } catch (error) {
      if (error.response.status === 400) {
        setErrMsg('كلمة المرور أو رقم الهاتف غير صحيح');
      }
    }
  };
  return (
    <Form
      validationSchema={loginSchema}
      initialValues={{ phoneNumber: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Input name="phoneNumber" type="text" placeholder="  ادخل رقم الهاتف مبدوء ب 59/56  " />
      <Input name="password" type="password" placeholder="ادخل كلمة السر " secureTextEntry />
      <ErrorText errMsg={errMsg} />
      <SubmitButton title="تأكيد" />
    </Form>
  );
}
