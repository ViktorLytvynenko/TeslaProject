import { FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Settings from "../components/Settings";
import ButtonLock from "../components/ButtonLock";

const UnlockPage: FC<any> = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate("Home");
    };
    return (
        <View style={s.container}>
            <LinearGradient
                colors={["#2A2D32", "#161719"]}
                locations={[0, 0.9917]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={s.container}
            >
                <View style={s.wrapper}>
                    <Settings />
                    <View style={s.carLight}>
                        <Image
                            source={require("../assets/carLight.png")}
                            style={s.carLightImg}
                        />
                    </View>
                    <LinearGradient
                        colors={["#18191B", "#18191B"]}
                        locations={[0.0368, 0.4642]}
                        style={s.unlockGradient}
                    >
                        <ButtonLock
                            text="Lock"
                            onPress={onPress}
                            img={require("../assets/lock.png")}
                        />
                    </LinearGradient>
                </View>
            </LinearGradient>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        marginTop: 25, // test
    },
    wrapper: {
        paddingTop: 25, // test
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    carLight: {
        marginTop: 130,
        marginBottom: 172,
    },
    carLightImg: {
        width: 256,
        height: 208,
    },
    unlockGradient: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 9,
            height: 9,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
});

export default UnlockPage;
