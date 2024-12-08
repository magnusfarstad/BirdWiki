import { Image, ImageBackground, type ImageSource } from "expo-image";
import { Text, View, StyleSheet } from "react-native";

type Props = {
    imgSource: ImageSource,
    bird: string,
    latin: string,
}

export default function WikiLi ({ imgSource, bird, latin }: Props) {
    return (
        <View style={styles.listEntry}>
            <ImageBackground source={imgSource} style={styles.image}></ImageBackground>
            <View style={styles.birdTitleContainer}>
                <Text style={styles.birdTitle}>{bird}
                    <Text style={{ 
                        fontSize: 24,
                        fontWeight: "normal",
                        fontStyle: "italic",
                        marginLeft: 8, }}>{latin}</Text>
                </Text>
            </View>
        </View>
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
        borderColor: "#0e1111",
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