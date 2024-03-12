import { FC, useEffect } from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../api/getUserInfo";
import { getUser } from "../redux/slices/currentUser";

const CabinetPage: FC<any> = ({ navigation }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.signIn.token);
    const userInfo = useSelector((state) => state.user);

    useEffect(() => {
        const userInfo = getUserInfo(token);
        userInfo.then(
            ({ email, telephone, firstName, lastName, login, password }) => {
                dispatch(
                    getUser({
                        email,
                        telephone,
                        firstName,
                        lastName,
                        login,
                        password,
                    })
                );
            }
        );
    }, [token]);

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
                        <Text>First name: {userInfo.firstName}</Text>
                        <Text>Last name: {userInfo.lastName}</Text>
                        <Text>Phone: {userInfo.telephone}</Text>
                        <Text>Email: {userInfo.email}</Text>
                        <Text>Login: {userInfo.login}</Text>
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
