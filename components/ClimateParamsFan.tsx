import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ClimateSettingFanBlue, ClimateSettingFanWhite} from "../assets/icons/icons";
import Slider from "@react-native-community/slider";
import {useState} from "react";

const ClimateParamsFan = () => {
    const [activeBtn, setActiveBtn] = useState(false);
    const handlePress = () => {
        setActiveBtn(!activeBtn);
    };
    return (
        <View style={s.climateParamsFan}>
            <Text style={s.climateParamsFanText}>
                Fan
            </Text>
            <TouchableOpacity style={s.climateParamsFanSVG} onPress={handlePress}>
                {activeBtn ? <ClimateSettingFanBlue/> : <ClimateSettingFanWhite/>}
            </TouchableOpacity>
            <View style={s.climateParamsFanSlider}>
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
    climateParamsFan: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    climateParamsFanText: {
        justifyContent: "flex-start",
        width: "20%",
        paddingRight: 30,
        textAlign: "center",
        color: "white",
        fontSize: 17,
        fontWeight: "600"
    },
    climateParamsFanSVG: {
        width: "20%"
    },
    climateParamsFanSlider: {
        width: "50%"
    }
})


export default ClimateParamsFan