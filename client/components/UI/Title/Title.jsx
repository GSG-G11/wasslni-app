import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Title({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ca011a',
        margin: 10,
    },
});

export default Title;
