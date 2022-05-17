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
    height: '20%',
    backgroundColor: '#fef0ef',
    borderColor: '#ff3334',
    borderWidth: 1,
    borderRadius: 25,
  },
  errMsgText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ff3334',
    margin: 0,
  },
});

export default ErrMsg;
