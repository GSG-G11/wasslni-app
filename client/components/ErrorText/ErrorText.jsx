import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
 
function ErrorText({ errMsg }) {
  return (
    <View style={styles.container}>
    <Text style={styles.errMsgText}>{errMsg}</Text>
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor:'#ffffff6b',
      padding: 5,
      paddingLeft: 40,
      paddingRight:40,
    },
    errMsgText: {
      fontSize: 16,
      textAlign: 'center',
      color: '#ca011a',
    },
  });
  
export default ErrorText ;