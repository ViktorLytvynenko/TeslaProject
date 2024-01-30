import {View, Text, StyleSheet} from "react-native";
import stylesBase from "../styles/styles";
import {LinearGradient} from "expo-linear-gradient";
import ButtonBack from "../components/ButtonBack";
import {FC} from "react";
import Settings from "../components/Settings";

import {ClimateRange} from "../assets/icons/icons";
import ClimateParamsAc from "../components/ClimateParamsAc";
import ClimateParamsFan from "../components/ClimateParamsFan";

const ClimateCarPage: FC<any> = ({navigation}) => {
    const onPressGoBack = () => {
        navigation.goBack();
    };
    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <View style={s.climateContainer}>
                    <ButtonBack onPress={onPressGoBack}/>
                    <Text style={s.climateText}>CLIMATE</Text>
                    <Settings onPress={onPressGoBack}/>
                </View>
                <View style={s.climateRangeContainer}>
                    <ClimateRange/>
                </View>
                <View style={s.climateParams}>
                    <ClimateParamsAc/>
                    <ClimateParamsFan/>
                </View>
            </View>
        </LinearGradient>
    );
};
const s = StyleSheet.create({
    climateContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    climateText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
    },
    climateRangeContainer: {
        paddingTop: 110,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    climateParams: {}
});

export default ClimateCarPage;
