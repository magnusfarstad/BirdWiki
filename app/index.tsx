import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

import Hero from "@/components/Hero";

const hero = require("@/assets/images/vendehals.jpg");

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Hero imgSource={hero} label="Vendehals" subHeader="bird of the day" />
      <Link href="/wiki/home">Wiki</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})