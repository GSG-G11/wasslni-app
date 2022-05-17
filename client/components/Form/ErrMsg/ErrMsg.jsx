import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ErrMsg({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.errMsgText}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor:'#ffffff6b',
    padding:5,
    marginBottom : 5,
  },
  errMsgText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ca011a',
  },
});

export default ErrMsg;
