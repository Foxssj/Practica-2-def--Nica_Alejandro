import { useState } from "react";
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
import { Header } from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import QRCodeSection from "./components/QRCodeSection";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? <PersonalInfo /> : <QRCodeSection />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
