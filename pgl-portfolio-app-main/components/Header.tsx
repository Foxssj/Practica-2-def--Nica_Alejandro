import { Button, StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  setDisplayMyQR: Function;
};

const Header = (props: HeaderProps) => (
  <View style={styles.topContainer}>
    <Text style={styles.firsttoprowContainer}>My Portfolio App</Text>
    <View style={styles.rowTopSecondContainer}>
      <Button onPress={() => props.setDisplayMyQR(true)} title="Mi info" />
      <Button
        onPress={() => props.setDisplayMyQR(false)}
        title="Mi Repo"
        color="light-gray"
        accessibilityLabel="Un botón pal QR"
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
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { Header };
