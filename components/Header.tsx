import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";

type HeaderProps = {
  setDisplayMyQR: Function;
};

const Header = (props: HeaderProps) => (
  <View style={styles.topContainer}>
    <Text style={styles.firsttoprowContainer}>My Portfolio App</Text>
    <View style={styles.rowTopSecondContainer}>
      <Button onPress={() => props.setDisplayMyQR(true)} title="Alejandro" />
      <Button
        onPress={() => props.setDisplayMyQR(false)}
        title="Mi Repo"
        accessibilityLabel="Un botón para el QR"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firsttoprowContainer: {
    backgroundColor: "#6667ab",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "#8766AB",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { Header };
