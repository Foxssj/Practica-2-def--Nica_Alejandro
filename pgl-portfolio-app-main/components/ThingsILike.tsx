import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const ThingsILike = () => (
  <>
    <Text
      style={{
        color: "black",
        fontWeight: "900",
        textTransform: "capitalize",
        fontSize: 20,
        textAlign: "center",
      }}
    >
      cosas que me gustan mucho:
    </Text>
    <ScrollView style={{ padding: 10 }}>
      {[
        "Salir a pasear",
        "Senderismo",
        "Ir a la playita",
        "Domingos de misa",
        "La guitarrita",
        "El monte con lluvia",
        "Viajar",
        "Música variadita",
        "Anime",
        "Ducharme",
        "Videojuegos",
        "Ir de cenar romántica",
      ].map((item) => (
        <Text key={item} style={styles.cosasQmeGustanMuxoEstails}>
          {item}
        </Text>
      ))}
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  cosasQmeGustanMuxoEstails: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});

export default ThingsILike;
