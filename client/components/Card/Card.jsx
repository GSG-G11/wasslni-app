import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "..";

export default function Card({ name, status, id, navigation, children }) {
  const onPress = () => {
    navigation.navigate( "تفاصيل الطرد", { id: id });
  };
  return (
    <View id={id} style={styles.card}>
      {name ? (
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
    flex:1,
    backgroundColor:'green',
    margin: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#fff",
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
  },
  name: {
    fontSize: 24,
    margin: 5,
    textAlign:'center'
    
  },
  status: {
    textAlign:'center',
    fontSize: 18,
    margin: 5,
  },
  btn: {
    textAlign:'center',
    width: "70%",
  },
});
