import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const RangeCircle = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#ff0000", "#0000ff"]} // Gradient colors
                start={{ x: 0, y: 1 }} // Gradient start point
                end={{ x: 1, y: 0 }} // Gradient end point
                style={styles.gradientBorder}
            ></LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gradientBorder: {
        width: "100%",
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "transparent", // Set border color to transparent
        padding: 10,
    },
    text: {
        fontSize: 18,
        color: "#fff", // Text color
    },
});

export default RangeCircle;
