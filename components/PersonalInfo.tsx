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
          En clase somos como unos 25 personas y las asignaturas que nos
          imparten son las siguiente: {"\n"}- Acceso a datos (AED) : Alexis
          Abreu {"\n"}- Desarrollo de interfases (DAD) : Santiago Díaz {"\n"}-
          Programación de servicios y procesos (PGV) : Adrian Chinea {"\n"}-
          Programación multimedia y dispositivos móviles (PGL) : Adrian Chinea{" "}
          {"\n"}- Sistema gestión empresarial (SSG) : Manuel Garrido {"\n"}-
          Empresa e iniciativa emprendedora (EMR) : Manuel Garrido {"\n"}
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
