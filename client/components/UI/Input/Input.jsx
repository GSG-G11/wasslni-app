import { Text, View, StyleSheet, TextInput } from 'react-native';
import { ErrMsg } from '../..';
import { useFormikContext } from 'formik';

const Input = ({ name, type, placeholder, ...props }) => {
  const { setFieldTouched, values, setFieldValue, touched, errors } =
    useFormikContext();
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        {...props}
        placeholderTextColor="#eee"
      />
      <ErrMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 25,
    width: '100%',
    textAlign: 'right',
    color:'#fff',
  },
});

export default Input;
