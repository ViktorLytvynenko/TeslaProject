import {Text, TouchableOpacity, View, Image} from "react-native";
import Slider from "@react-native-community/slider";
import {useState} from "react";
import stylesClimate from "./stylesClimate";

const ClimateParamsAuto = () => {
    const [activeBtn, setActiveBtn] = useState(false);
    const handlePress = () => {
        setActiveBtn(!activeBtn);
    };
    const handleSliderChange = (value: number) => {
        console.log("Slider value:", value);
    };
    return (
        <View style={stylesClimate.climateContainer}>
            <Text style={stylesClimate.climateText}>Auto</Text>
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
                            source={require("../../assets/icons/climateParamsAutoBlue.png")}
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
                            source={require("../../assets/icons/climateParamsAutoWhite.png")}
                            style={stylesClimate.climateIcon}
                        />
                    </View>
                )}
            </TouchableOpacity>
            <View style={stylesClimate.climateSlider}>
                <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={16}
                    maximumValue={30}
                    step={1}
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

export default ClimateParamsAuto;
