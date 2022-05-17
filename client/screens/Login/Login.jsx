import React, { useContext, useState } from 'react';
import { ErrorText, Form, Input, SubmitButton } from '../../components';
import { getUserInfo, loginSchema } from '../../utils/';
import axios from 'axios';
import UserContext from '../../context/userContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet ,   ImageBackground , Text, View} from 'react-native';
import loginRes from '../../assets/loginRes.jpg'

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
      setErrMsg('')
      navigation.navigate('طرودي')
    } catch (error) {
      if (error.response.status === 400) {
        setErrMsg('كلمة المرور أو رقم الهاتف غير صحيح');
      }
    }
  };
  return (
      <ImageBackground  style={styles.loginContainer} source={loginRes} >
      <Form
      validationSchema={loginSchema}
      initialValues={{ phoneNumber: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <View style={styles.formContainer}>
      <Input name="phoneNumber" type="text" placeholder="  ادخل رقم الهاتف مبدوء ب 59/56"   />
      <Input name="password" type="password" placeholder="ادخل كلمة السر " secureTextEntry  />
      <Text>{errMsg && <ErrorText errMsg={errMsg} />}</Text>
      <SubmitButton title="تأكيد" />
      </View>
    </Form>
      </ImageBackground>

  );
}
const styles = StyleSheet.create({
  loginContainer : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width : "100%",
  },
  formContainer : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'start',
    width : "100%",
  }
});
