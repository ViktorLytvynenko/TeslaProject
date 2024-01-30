import {Text, TouchableOpacity, View} from "react-native";
import {
    ClimateSettingHeatBlue,
    ClimateSettingHeatWhite
} from "../../assets/icons/icons";
import Slider from "@react-native-community/slider";
import {useState} from "react";
import stylesClimate from "./stylesClimate";

const ClimateParamsHeat = () => {
    const [activeBtn, setActiveBtn] = useState(false);
    const handlePress = () => {
        setActiveBtn(!activeBtn);
    };
    return (
        <View style={stylesClimate.climateContainer}>
            <Text style={stylesClimate.climateText}>
                Heat
            </Text>
            <TouchableOpacity style={stylesClimate.climateSVG} onPress={handlePress}>
                {activeBtn ? <ClimateSettingHeatBlue/> : <ClimateSettingHeatWhite/>}
            </TouchableOpacity>
            <View style={stylesClimate.climateSlider}>
                <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#11A8FD"
                    maximumTrackTintColor="#212325"
                    thumbTintColor='#212325'
                    lowerLimit='16'
                    upperLimit='30'
                />
            </View>
        </View>
    )
}

export default ClimateParamsHeat