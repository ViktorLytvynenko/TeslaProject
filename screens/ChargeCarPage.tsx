import { View, Text, StyleSheet, Image } from "react-native";
import stylesBase from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import ButtonBack from "../components/ButtonBack";
import { FC } from "react";
import Settings from "../components/Settings";
import TitlePages from "../components/TitlePages";

const ChargeCarPage: FC<any> = ({ navigation }) => {
    const onPressGoBack = () => {
        navigation.goBack();
    };
    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <TitlePages onPressGoBack={onPressGoBack} text="CHARGING" />
                <Image
                    source={require("../assets/carCharge.png")}
                    style={s.carImage}
                />
                <View style={s.chargeText}>
                    <Text style={s.chargeTextCounter}>65</Text>
                    <Text style={s.chargeTextPercent}>%</Text>
                </View>
            </View>
        </LinearGradient>
    );
};
const s = StyleSheet.create({
    carImage: {
        width: 322,
        height: 221,
    },
    chargeText: {
        display: "flex",
        flexDirection: "row",
    },
    chargeTextCounter: {
        fontSize: 20,
        fontWeight: "600",
        color: "white",
    },
    chargeTextPercent: {
        color: "rgba(235, 235, 245, 0.60))",
        fontSize: 16,
        fontWeight: "400",
    },
});

export default ChargeCarPage;
