import * as React from "react";
import { StyleSheet, Text, View, Image, ImageProps } from "react-native";
import { PersonalData, information } from "../data/PersonalData";
import HobbiesNicanor from "../data/HobbiesNicanor";
import HobbiesAlejandro from "../data/HobbiesAlejandro";

type PersonalInfoProps = {
  displayUser: boolean;
  darkMode: boolean;
};

const PersonalInfo = (props: PersonalInfoProps) => {
  return (
    <View style={styles.bodystails}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.avatar}
          source={
            props.displayUser ? information[0].image : information[1].image
          }
        />
        <View style={styles.descContainer}>
          <Text
            style={{ textAlign: "center", fontWeight: "700", fontSize: 20 }}
          >
            Ddescripción sobre mi
          </Text>
          <Text>
            {props.displayUser
              ? information[0].description
              : information[1].description}
          </Text>
        </View>
      </View>
      {props.displayUser ? (
        <HobbiesAlejandro darkMode={props.darkMode} />
      ) : (
        <HobbiesNicanor darkMode={props.darkMode} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descContainer: {
    margin: 10,
    backgroundColor: "#c7c8e2",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
});

export default PersonalInfo;
