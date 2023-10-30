import { StyleSheet, View, Text } from "react-native";
import * as React from "react";
import QRCode from "react-native-qrcode-svg";

type QRCodeSectionProps = {
  link: string;
  user: string;
};

const QRCodeSection = (props: QRCodeSectionProps) => (
  <View style={styles.bodystails}>
    <Text style={styles.user}>{props.user}</Text>
    <View style={styles.CentrarcodigoQR}>
      <QRCode value={props.link} color="#6667ab" />
    </View>
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
  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    paddingBottom: "30%",
    alignItems: "center",
  },
  user: {
    color: "#fff",
    fontSize: 20,
    backgroundColor: "#8766AB",
    width: "100%",
    paddingLeft: "41%",
  },
});

export default QRCodeSection;
