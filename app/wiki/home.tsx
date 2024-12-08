import { Text, View, StyleSheet, ScrollView, StatusBar } from "react-native";

import Hero from "@/components/Hero";
import WikiLi from "../components/WikiLi";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const hero = require("@/assets/images/vendehals.jpg");

export default function WikiHome() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Hero imgSource={hero} label="Wiki" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top']}>
          <ScrollView style={styles.scrollView}>
            <WikiLi imgSource={hero} bird="Vendehals" latin="Eurasion eursaion"></WikiLi>
            <WikiLi imgSource={hero} bird="Vendehals" latin="Eurasion eursaion"></WikiLi>
            <WikiLi imgSource={hero} bird="Vendehals" latin="Eurasion eursaion"></WikiLi>
            <WikiLi imgSource={hero} bird="Vendehals" latin="Eurasion eursaion"></WikiLi>
            <WikiLi imgSource={hero} bird="Vendehals" latin="Eurasion eursaion"></WikiLi>
            <WikiLi imgSource={hero} bird="Vendehals" latin="Eurasion eursaion"></WikiLi>
            <WikiLi imgSource={hero} bird="Vendehals" latin="Eurasion eursaion"></WikiLi>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});