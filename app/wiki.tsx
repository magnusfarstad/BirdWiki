import { Text, View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import Hero from "@/components/Hero";
import WikiLi from "@/components/WikiLi";
import { SearchBar } from "@rneui/themed";

const hero = require("@/assets/images/birds/vendehals.jpg");
const birdData = require("@/assets/json/birds.json");

type Bird = {
  id: number;
  commonName: string;
  speciesName: string;
  scientificName: string;
  description: string;
  imageLink: string;
  averageWeightGrams: number;
  wingspanCm: number;
  averageLifespanYears: number;
};


export default function WikiHome() {
  // Search functionality
  const [query, setQuery] = useState('');
  const [filteredBirds, setFilteredBirds] = useState(birdData.birds);

  const handleSearch = (query: string) => {
    setQuery(query);
    filterBirds(query);
  };

  const filterBirds = (searchQuery: string) => {
    setFilteredBirds(
      birdData.birds.filter((bird: { commonName: string; }) =>
        bird.commonName.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

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
            <SearchBar
              placeholder="Search birds..."
              onChangeText={handleSearch}
              value={query}
              lightTheme
              containerStyle={styles.searchBar}
              inputContainerStyle={{ padding: 12, backgroundColor: "transparent" }}
              platform="default"
            />
            {filteredBirds.map((bird: Bird, index: number) => (
              <WikiLi bird={bird} key={index}></WikiLi>
            ))}
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
  searchBar: {
    backgroundColor: "white",
    padding: 12,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  }
});