import { Text, View, StyleSheet } from "react-native";

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
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})