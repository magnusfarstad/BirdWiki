import { Image, type ImageSource } from "expo-image";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

type Props = {
    imgSource: ImageSource,
    label: string,
    subHeader?: string,
}

export default function Hero ({ imgSource, label, subHeader }: Props) {
    return (
        <ImageBackground 
            source={imgSource}
            style={styles.image} >
                <View style={styles.headers}>
                    <Text style={[styles.subHeader, styles.text]}>{subHeader}</Text>
                    <Text style={[styles.header, styles.text]}>{label}</Text>
                </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        boxShadow: '0 4px 2px -2px white',
    },
    headers: {
        padding: 16,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Inter_900Black',
    },
    subHeader: {
        fontSize: 12,
    },
    text: {
        color: "white",
        fontFamily: 'Inter',
    }
})