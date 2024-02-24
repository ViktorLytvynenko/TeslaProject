import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import stylesBase from "../styles/styles";
import {LinearGradient} from "expo-linear-gradient";
import TitlePages from "../components/TitlePages";
import {FC, useState} from "react";


const ControlCarPage: FC<any> = ({navigation}) => {
    const [openHood, setOpenHood] = useState("Open");
    const [openTrunk, setOpenTrunk] = useState("Open");
    const [openRoof, setOpenRoof] = useState("Open");
    const toggleHood = () => {
        setOpenHood(openHood === "Open" ? "Close" : "Open");
    }
    const toggleTrunk = () => {
        setOpenTrunk(openTrunk === "Open" ? "Close" : "Open");
    }
    const toggleRoof = () => {
        setOpenRoof(openRoof === "Open" ? "Close" : "Open");
    }
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
                <TitlePages onPressGoBack={onPressGoBack} text="DOORS CONTROL"/>
                <View style={s.imgContainer}>
                    <Image
                        source={require("../assets/CarFromTop.png")}
                        style={s.carImage}
                    />
                    <TouchableOpacity style={s.carHood} onPress={toggleHood}>
                        <Text style={s.carHoodText}>
                            {openHood}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.carTrunk} onPress={toggleTrunk}>
                        <Text style={s.carTrunkText}>
                            {openTrunk}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.carRoof} onPress={toggleRoof}>
                        <Text style={s.carRoofText}>
                            {openRoof}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
};

const s = StyleSheet.create({
    imgContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    carImage: {
        width: 250,
        height: 550,
        marginTop: 50,
    },
    carHood: {
        position: "absolute",
        top: "85%",
        left: "50%",
        transform: [{translateX: -10}],
    },
    carHoodText: {
        color: "rgba(235, 235, 245, 0.80))"
    },
    carTrunk: {
        position: "absolute",
        top: "17%",
        left: "50%",
        transform: [{translateX: -10}],
    },
    carTrunkText: {
        color: "rgba(235, 235, 245, 0.80))"
    },
    carRoof: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{translateX: -10}],
    },
    carRoofText: {
        color: "rgba(235, 235, 245, 0.80))"
    }
})

export default ControlCarPage;
