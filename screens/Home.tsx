import { FC } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home: FC<any> = ({ navigation }) => {
    return (
        <View style={s.container}>
            <LinearGradient
                colors={["#292C31", "#000", "#000", "#292929"]}
                locations={[0, 0.3009, 0.5735, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={s.container}
            >
                <View style={s.wrapper}>
                    <TouchableWithoutFeedback style={s.settings}>
                        <Image
                            source={require("../assets/button.png")}
                            style={s.settingsImg}
                        />
                    </TouchableWithoutFeedback>
                    <View style={s.carDark}>
                        <Image
                            source={require("../assets/carDark.png")}
                            style={s.carDarkImg}
                        />
                    </View>
                    <LinearGradient
                        colors={["#17171C", "#18191B"]}
                        locations={[0.0368, 0.4642]}
                        style={s.unlockGradient}
                    >
                        <View style={s.unlockContainer}>
                            <Text style={s.unlockText}>Unlock</Text>
                            <TouchableWithoutFeedback style={s.unlockBtn}>
                                <Image
                                    source={require("../assets/buttonLock.png")}
                                    style={s.unlockImg}
                                />
                            </TouchableWithoutFeedback>
                        </View>
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
    // settings: {
    //     width: 72,
    //     height: 72,
    // },
    settingsImg: {
        alignSelf: "flex-end",
        width: 72,
        height: 72,
    },
    carDark: {
        width: 245,
        height: 163,
        marginTop: 132,
    },
    carDarkImg: {
        width: "100%",
        height: "100%",
    },
    unlockGradient: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        marginTop: 217,
    },
    unlockContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 20,
    },
    unlockText: {
        textAlign: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
        paddingHorizontal: 20,
    },
    // unlockBtn: {
    //     width: 72,
    //     height: 72,
    // },
    unlockImg: {
        marginTop: 7,
        width: 72,
        height: 72,
    },
});

export default Home;
