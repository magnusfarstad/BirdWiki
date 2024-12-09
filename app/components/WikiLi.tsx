import { Image, ImageBackground, type ImageSource } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import birdData from "@/assets/json/birds.json";


type Props = {
    bird: {
        commonName: string;
        speciesName: string;
        scientificName: string;
        description: string;
        imageLink: string;
        averageWeightGrams: number;
        wingspanCm: number;
        averageLifespanYears: number;
    };
}

export default function WikiLi ({ bird }: Props) {
    return (
        <Pressable style={{ flex: 1 }}>
            <Link href="./{bird.commonName}" style={styles.listEntry}>
                <ImageBackground source={bird.imageLink} style={styles.image}></ImageBackground>
                <View style={styles.birdTitleContainer}>
                    <Text style={styles.birdTitle}>{bird.commonName}
                        <Text style={{ 
                            fontSize: 24,
                            fontWeight: "normal",
                            fontStyle: "italic",
                            marginLeft: 8, }}>{bird.scientificName}</Text>
                    </Text>
                </View>
            </Link>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    listEntry: {
        flex: 1,
        flexDirection: 'row',
        borderBottomLeftRadius: 32,
        borderTopRightRadius: 32,
        margin: 8,
        backgroundColor: "white",
        overflow: "hidden",
        borderWidth: 4,
        borderColor: "gray",
    },
    image: {
        flex: 0.3,
    },
    birdTitleContainer: {
        flex: 0.7,
        paddingLeft: 8,
        padding: 32,
    },
    birdTitle: {
        fontSize: 32,
        color: "#0e1111",
        fontWeight: "bold",
    },
})