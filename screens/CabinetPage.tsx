import { FC } from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { RootStateType } from "../redux/store";
import { IStateDriver } from "../redux/slices/usersSignIn";

const CabinetPage: FC<any> = ({ navigation }) => {
    const token = useSelector((state) => state.signIn.token);
    const;
    const onPressGoBack = () => {
        navigation.goBack();
    };
    const onPressSignIn = () => {
        navigation.navigate("SignInPage");
    };
    const onPressSignUp = () => {
        navigation.navigate("SignUpPage");
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
                <TitlePages onPressGoBack={onPressGoBack} text="CABINET" />
                <View style={s.imgContainer}>
                    <Image
                        source={require("../assets/SignUpLogo.png")}
                        style={s.usersImage}
                    />
                </View>
                {token === "" ? (
                    <View>
                        <TouchableOpacity
                            style={s.btnContainer}
                            onPress={onPressSignIn}
                        >
                            <Text style={s.btnText}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={s.btnContainer}
                            onPress={onPressSignUp}
                        >
                            <Text style={s.btnText}>Add driver</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <Text>First name:</Text>
                        <Text>Last name:</Text>
                        <Text>Phone:</Text>
                        <Text>Email:</Text>
                        <Text>Login:</Text>
                    </View>
                )}
            </View>
        </LinearGradient>
    );
};

const s = StyleSheet.create({
    imgContainer: {
        marginTop: 50,
        marginBottom: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    usersImage: {
        width: "100%",
    },
    btnContainer: {
        width: "100%",
        height: 50,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#27282A",
    },
    btnText: {
        color: "#fff",
    },
});

export default CabinetPage;
