import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

import Hero from "@/components/Hero";

const hero = require("@/assets/images/vendehals2.jpg");

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Hero imgSource={hero} label="Vendehals" subHeader="Bird of the day" />
      <Link style={styles.link} href="/wiki/home">Wiki</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link: {
    backgroundColor: "green",
    padding: 32,
    fontSize: 32,
    fontFamily: "Inter_900Black",
    color: "white",
    margin: 16,
  },
})