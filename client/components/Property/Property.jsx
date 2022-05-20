import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Property({ keyWord, value }) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>{keyWord}:</Text>
      </View>
      <View style={styles.text}>
        <Text>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row-reverse',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },
});

export default Property;
