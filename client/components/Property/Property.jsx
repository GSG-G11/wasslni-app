import React from 'react';
import { StyleSheet, View } from 'react-native';

function Property({ keyWord, value }) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        {keyWord}
        :
      </View>
      <View style={styles.text}>{value}</View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    }
});

export default Property;