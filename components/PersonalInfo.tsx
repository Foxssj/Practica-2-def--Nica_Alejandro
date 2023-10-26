import * as React from "react";
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
        source={require("../assets/Alejandro.jpg")}
      />
      <View
        style={{
          margin: 10,
          backgroundColor: "#c7c8e2",
          padding: 10,
          borderRadius: 10,
          width: "70%",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 20 }}>
          Descripción sobre mí!
        </Text>
        <Text>
          Soy Alejandro estoy cursando 2º de Dam (Desarrollo de Aplicaciones
          Multiplataforma). {"\n"}
          Tengo 21 años de edad naci el 17/03/200.{"\n"}
          Me gusta aprender cosas nuevas.{"\n"}
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
