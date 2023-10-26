import { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import ThingsILike from "./ThingsILike";

const PersonalInfo = () => (
  <View style={styles.bodystails}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.avatar}
        source={require("../assets/SofyanAmrabat.jpg")}
      />
      <View
        style={{
          margin: 10,
          backgroundColor: "lightgray",
          padding: 10,
          borderRadius: 10,
          width: "70%",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 20 }}>
          Descripción sobre mí!
        </Text>
        <Text>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos
        </Text>
      </View>
    </View>
    <ThingsILike />
  </View>
);

const styles = StyleSheet.create({
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
});

export default PersonalInfo;
