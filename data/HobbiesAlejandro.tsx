import * as React from "react";

import { ScrollView, StyleSheet, Text } from "react-native";
import colors from "../assets/colors/colors";
import darkColors from "../assets/colors/darkColors";

type HobbiesProps = {
  darkMode: boolean;
};

const HobbiesAlejandro = (props: HobbiesProps) => (
  <>
    <Text
      style={{
        color: props.darkMode ? colors.White : darkColors.dark,
        fontWeight: "900",
        textTransform: "capitalize",
        fontSize: 20,
        textAlign: "center",
      }}
    >
      cosas que me gustan mucho:
    </Text>
    <ScrollView style={{ padding: 2 }}>
      {[
        "Montar en bici",
        "Nadar en el mar y piscina",
        "Ir a comer con la familia",
        "Visitar sitios",
        "Descanasar durante las vacaciones",
        "Ir al cine con los amigos",
        "Escuchar musica de todo tipo",
        "Oler bien",
      ].map((item) => (
        <Text
          key={item}
          style={props.darkMode ? styles.arrThingsDark : styles.arrThings}
        >
          {item}
        </Text>
      ))}
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  arrThings: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: colors.bluishPurple,
  },
  arrThingsDark: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: darkColors.darkViolet,
  },
});

export default HobbiesAlejandro;
