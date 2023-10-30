import * as React from "react";

import { ScrollView, StyleSheet, Text } from "react-native";
import colors from "../assets/colors/colors";
import darkColors from "../assets/colors/darkColors";

type HobbiesProps = {
  darkMode: boolean;
};

const HobbiesNicanor = (props: HobbiesProps) => {
  return (
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
      <ScrollView style={{ padding: 10 }}>
        {[
          "Jugar videojuegos",
          "Montar en bicicleta",
          "Hacer senderismo",
          "Salir con amigos",
          "Ver y hacer videos de videojuegos",
          "Ir al cine",
          "Pasar tiempo con la familia",
          "Hacer el loco",
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
};

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

export default HobbiesNicanor;
