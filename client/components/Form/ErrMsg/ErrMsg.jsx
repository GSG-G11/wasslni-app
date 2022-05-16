import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ErrMsg({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.errMsgText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "6%",
    backgroundColor: "#fef0ef",
    borderColor: "#ff3334",
    borderWidth: 1,
    borderRadius: 5,
  },
  errMsgText: {
    fontSize: 18,
    textAlign: "center",
    color: "#ff3334",
    margin: 10,
  },
});

export default ErrMsg;
