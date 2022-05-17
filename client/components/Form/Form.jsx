import React from 'react';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';

function Form({ initialValues, validationSchema, onSubmit, children }) {
  return (
    <View style={styles.form}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => <>{children}</>}
      </Formik>
    </View>
  );
}
export default Form;
const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0000004f',
    paddingTop:40,
  },
});
