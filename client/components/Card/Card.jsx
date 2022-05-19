import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "..";

export default function Card({ name, status, id, navigation, children }) {
  const onPress = () => {
    navigation.navigate("ParcelDatails", { id: { id } });
  };
  return (
    <View id={id} style={styles.card}>
      {false ? (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.status}>
            {status ? <Text>تم الاستلام</Text> : <Text>لم يتم الاستلام</Text>}
          </Text>
          <View style={styles.btn}>
            <Button title="تفاصيل الطرد" onPress={onPress} />
          </View>
        </View>
      ) : (
        children
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 15,
    borderRightColor: "#ca011a",
    borderRightWidth: 3,
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    textAlign: "right",
    width: "100%",
    backGroundColor: "green",
  },
  name: {
    fontSize: 24,
    margin: 5,
  },
  status: {
    fontSize: 18,
    margin: 5,
  },
  btn: {
    fontSize: 14,
    width: "50%",
    direction: "rtl",
  },
});
