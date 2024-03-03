import { Text, TouchableOpacity, View, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import stylesClimate from "./stylesClimate";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";

const ClimateParamsHeat = () => {
    const [activeBtn, setActiveBtn] = useState(false);
    const params = useSelector((state: RootStateType) => state.climate.heat);
    const dispatch = useDispatch();

    const handlePress = () => {
        setActiveBtn(!activeBtn);
    };
    const handleSliderChange = (value: number) => {
        console.log("Slider value:", value);
    };
    return (
        <View style={stylesClimate.climateContainer}>
            <Text style={stylesClimate.climateText}>Heat</Text>
            <TouchableOpacity
                style={stylesClimate.climateSVG}
                onPress={handlePress}
            >
                {activeBtn ? (
                    <View
                        style={[
                            stylesClimate.climateIconBorder,
                            stylesClimate.climateIconBorderBlue,
                        ]}
                    >
                        <Image
                            source={require("../../assets/icons/climateSettingHeatBlue.png")}
                            style={stylesClimate.climateIcon}
                        />
                    </View>
                ) : (
                    <View
                        style={[
                            stylesClimate.climateIconBorder,
                            stylesClimate.climateIconBorderWhite,
                        ]}
                    >
                        <Image
                            source={require("../../assets/icons/climateSettingHeatWhite.png")}
                            style={stylesClimate.climateIcon}
                        />
                    </View>
                )}
            </TouchableOpacity>
            <View style={stylesClimate.climateSlider}>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={16}
                    maximumValue={30}
                    step={1}
                    value={params.value}
                    minimumTrackTintColor="#11A8FD"
                    maximumTrackTintColor="#212325"
                    thumbTintColor="#212325"
                    lowerLimit={16}
                    upperLimit={30}
                    onValueChange={handleSliderChange}
                />
            </View>
        </View>
    );
};

export default ClimateParamsHeat;
