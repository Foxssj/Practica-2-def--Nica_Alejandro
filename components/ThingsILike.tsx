import { useState } from "react";
import * as React from "react";

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
        "Ir al gimnasio",
        "Montar en bici",
        "Nadar en el mar y piscina",
        "Ir a comer con la familia",
        "Visitar sitios",
        "Descanasar durante las vacaciones",
        "Ir al cine con los amigos",
        "Escuchar musica de todo tipo",
        "Ducharme",
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
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "#6667ab",
  },
});

export default ThingsILike;
