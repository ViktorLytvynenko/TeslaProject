import {FC} from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import {LinearGradient} from "expo-linear-gradient";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const CabinetPage: FC<any> = ({navigation}) => {
    const onPressGoBack = () => {
        navigation.goBack();
    }
    const onPressSignUp = () => {
        navigation.navigate("SignUpPage");
    }
    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <TitlePages onPressGoBack={onPressGoBack} text="CABINET"/>
                <View style={s.imgContainer}>
                    <Image
                        source={require("../assets/SignUpLogo.png")}
                        style={s.usersImage}
                    />
                </View>
                <TouchableOpacity
                    style={s.btnContainer}
                    onPress={onPressSignUp}
                >
                    <Text style={s.btnText}>
                        Add driver
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const s = StyleSheet.create({
    imgContainer: {
        marginTop: 50,
        marginBottom: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    usersImage: {
        width: "100%"
    },
    btnContainer: {
        width: "100%",
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2e6ff2"
    },
    btnText: {
        color: "#fff"
    }
})

export default CabinetPage