import { Image, ImageBackground, type ImageSource } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import birdData from "@/assets/json/birds.json";


type Props = {
    bird: {
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
}


export default function WikiLi ({ bird }: Props) {
    return (
        <Pressable style={{ flex: 1 }}>
            <Link href="./{bird.commonName}" style={styles.listEntry}>
                <ImageBackground 
                    source={{ uri: bird.imageLink }} 
                    style={styles.image}>
                </ImageBackground>
                <View style={styles.birdTitleContainer}>
                    <Text style={[styles.birdTitle, styles.text]}>{bird.commonName}
                    </Text>
                    <Text style={[styles.scientificName, styles.text]}>{bird.scientificName}</Text>
                </View>
            </Link>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    listEntry: {
        display: "flex",
        flex: 1,
        flexDirection: 'row',
        alignContent: "center",
        margin: 8,
        backgroundColor: "white",
        overflow: "hidden",
        borderWidth: 3,
        borderStyle: "dotted",
        borderColor: "gray",
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    birdTitleContainer: {
        flex: 3,
        paddingLeft: 8,
        padding: 24,
    },
    birdTitle: {
        fontSize: 24,
        color: "#0e1111",
        fontWeight: "bold",
    },
    scientificName: { 
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "italic",
        color: "#808080",
    },
    text: {
        color: "rgb(60, 60, 60)",
    }
})