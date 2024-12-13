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
    },
    headers: {
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,1))",
        padding: 16,
    },
    header: {
        fontSize: 48,
        fontFamily: 'Inter_900Black',
    },
    subHeader: {
        fontSize: 24,
        fontFamily: 'Inter_800ExtraBold',
    },
    text: {
        color: "#0e1111",
        //fontFamily: 'Inter',
    }
})