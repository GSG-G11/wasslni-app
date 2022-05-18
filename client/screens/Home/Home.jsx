import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "../../components";
import homeRes from "../../assets/homeRes.png";

export default function Home({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("تسجيل الدخول");
  };
  return (
    <ImageBackground style={styles.homeContainer} source={homeRes}>
      <View style={styles.homeTextContainer}>
        <Text style={styles.homeText}>
          تطبيق مختص لتوصيل الطرود لكافة محافظات قطاع غزة , بطريقة آمنة ووقت
          قياسي
        </Text>
        <View style={styles.homeButton}>
          <Button title="ابدأ" onPress={handleNavigate} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  homeTextContainer: {
      width : "60%",
  },
  homeText: {
    fontSize: 16,
    marginBottom: 50,
    textAlign: "center",
  }
});
