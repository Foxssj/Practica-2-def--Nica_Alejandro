import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import colors from "../assets/colors/colors";
import darkColors from "../assets/colors/darkColors";

type HeaderProps = {
  setDisplayMyQR: Function;
  setDisplayUser: Function;
  setDarkMode: Function;
  darkMode: boolean;
};

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.topContainer}>
      <Text
        style={
          props.darkMode
            ? styles.firstDarkTopRowContainer
            : styles.firstTopRowContainer
        }
      >
        Porfolio Conjunto
      </Text>
      <View
        style={
          props.darkMode
            ? styles.rowDarkTopSecondContainer
            : styles.rowTopSecondContainer
        }
      >
        <Button
          color={props.darkMode ? darkColors.darkestPurple : colors.lightPurple}
          onPress={() => {
            props.setDisplayMyQR(true);
            props.setDisplayUser(true);
          }}
          title="Alejandro"
        />
        <Button
          color={props.darkMode ? darkColors.darkestPurple : colors.lightPurple}
          onPress={() => {
            props.setDisplayMyQR(true);
            props.setDisplayUser(false);
          }}
          title="Nicanor"
        />
        <Button
          color={props.darkMode ? darkColors.darkestPurple : colors.lightPurple}
          onPress={() => props.setDisplayMyQR(false)}
          title="Repo"
          accessibilityLabel="Un botón para el QR"
        />
        <Button
          color={"black"}
          onPress={() => props.setDarkMode(!props.darkMode)}
          title="Modo oscuro"
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firstTopRowContainer: {
    backgroundColor: colors.bluishPurple,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  firstDarkTopRowContainer: {
    backgroundColor: darkColors.darkPurple,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: colors.bluishPurple,
    justifyContent: "center",
    alignItems: "center",
  },
  rowDarkTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: darkColors.darkPurple,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonColors: {
    backgroundColor: "#6667ab",
  },
});

export { Header };
