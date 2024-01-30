import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
    ClimateSettingFrostBlue,
    ClimateSettingFrostWhite
} from "../assets/icons/icons";
import Slider from "@react-native-community/slider";
import {useState} from "react";

const ClimateParamsAc = () => {
    const [activeBtn, setActiveBtn] = useState(false);
    const handlePress = () => {
        setActiveBtn(!activeBtn);
    };
    return (
        <View style={s.climateParamsAc}>
            <Text style={s.climateParamsAcText}>
                Ac
            </Text>
            <TouchableOpacity style={s.climateParamsAcSVG} onPress={handlePress}>
                {activeBtn ? <ClimateSettingFrostBlue/> : <ClimateSettingFrostWhite/>}
            </TouchableOpacity>
            <View style={s.climateParamsAcSlider}>
                <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#212325"
                    thumbTintColor='#212325'
                    lowerLimit='16'
                    upperLimit='30'
                />
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    climateParamsAc: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    climateParamsAcText: {
        justifyContent: "flex-start",
        width: "20%",
        paddingRight: 30,
        textAlign: "center",
        color: "white",
        fontSize: 17,
        fontWeight: "600"
    },
    climateParamsAcSVG: {
        width: "20%"
    },
    climateParamsAcSlider: {
        width: "50%"
    }
})


export default ClimateParamsAc