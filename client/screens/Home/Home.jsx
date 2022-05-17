import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "../../components";
import homePage from "../../assets/homePage.jpg";

export default function Home({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate("تسجيل الدخول");
  };
  return (
    <ImageBackground style={styles.homeContainer} source={homePage}>
      <View style={styles.homeTextContainer}>
        <Text style={styles.homeText}>
          تطبيق مختص لتوصيل الطرود لكافة محافظات قطاع غزة , بطريقة آمنة ووقت
          قياسي
        </Text>
      <Button title="ابدأ" onPress={handleNavigate} style={styles.homeButton}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  homeTextContainer: {
      width : "60%",
      paddingLeft: "8%",
  },
  homeText: {
    textAlign: "left",
    fontSize: 18,
    marginBottom: 40,
  },
  homeButton: {
    width: "70%",
  },
});
