import { ImageProps } from "react-native";
import HobbiesAlejandro from "./HobbiesAlejandro";
import HobbiesNicanor from "./HobbiesNicanor";

export type PersonalData = {
  image: ImageProps;
  description: string;
};

export const information: PersonalData[] = [
  {
    image: require("../assets/Alejandro.jpg"),
    description:
      "Soy Alejandro estoy cursando 2º de Dam (Desarrollo de Aplicaciones" +
      " Multiplataforma). \n" +
      "Tengo 21 años de edad naci el 17/03/2002.\n" +
      "Me gusta aprender cosas nuevas.\n",
  },
  {
    image: require("../assets/Nicanor.jpg"),
    description:
      "Soy Nicanor, estoy en segundo de Dam. \n" +
      "Tengo 20 años y nací el 16/06/2003" +
      "No me cuento mucho, me gusta aprender y jugar videojuegos.",
  },
];
