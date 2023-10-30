import { useState } from "react";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import QRCodeSection from "./components/QRCodeSection";
import colors from "./assets/colors/colors";
import darkColors from "./assets/colors/darkColors";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [displayUser, setDisplayUser] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const displayCurrentUser = () =>
    displayUser ? (
      <>
        {displayMyQR ? (
          <PersonalInfo displayUser={displayUser} darkMode={darkMode} />
        ) : (
          <QRCodeSection link="https://github.com/aleymaarr" user="Alejandro" />
        )}
      </>
    ) : (
      <>
        {displayMyQR ? (
          <PersonalInfo displayUser={displayUser} darkMode={darkMode} />
        ) : (
          <QRCodeSection link="https://github.com/Foxssj" user="Nicanor" />
        )}
      </>
    );
  return (
    <View style={darkMode ? styles.darkContainer : styles.container}>
      <Header
        setDisplayMyQR={setDisplayMyQR}
        setDisplayUser={setDisplayUser}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {displayCurrentUser()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    alignItems: "center",
    justifyContent: "center",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: darkColors.dark,
    alignItems: "center",
    justifyContent: "center",
  },
});
