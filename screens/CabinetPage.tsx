import { FC, useState } from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import { LinearGradient } from "expo-linear-gradient";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { resetToken } from "../redux/slices/usersSignIn";
import { resetData } from "../redux/slices/currentUser";
import { Feather } from "@expo/vector-icons";

const CabinetPage: FC<any> = ({ navigation }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.signIn.token);
    const userInfo = useSelector((state) => state.user);
    const [editFirstName, setEditFirstName] = useState(false);
    const [editLastName, setEditLastName] = useState(false);
    const [editLogin, setEditLogin] = useState(false);
    const [editPhone, setEditPhone] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const onPressGoBack = () => {
        navigation.goBack();
    };
    const onPressSignIn = () => {
        navigation.navigate("SignInPage");
    };
    const onPressSignUp = () => {
        navigation.navigate("SignUpPage");
    };
    const editDataFirstName = () => {
        setEditFirstName(!editFirstName);
    };
    const editDataLastName = () => {
        setEditLastName(!editLastName);
    };
    const editDataLogin = () => {
        setEditLogin(!editLogin);
    };
    const editDataPhone = () => {
        setEditPhone(!editPhone);
    };
    const editDataEmail = () => {
        setEditEmail(!editEmail);
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
                    <View style={s.userWrapper}>
                        <View style={s.userTextContainer}>
                            <Text style={[s.userText, s.userTitle]}>
                                First name:
                            </Text>
                            {!editFirstName ? (
                                <Text style={[s.userText, s.userBody]}>
                                    {userInfo.firstName}
                                </Text>
                            ) : (
                                <TextInput></TextInput>
                            )}

                            <TouchableOpacity onPress={editDataFirstName}>
                                <Feather
                                    name="edit"
                                    size={16}
                                    color="rgba(235, 235, 245, 0.8)"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={s.userTextContainer}>
                            <Text style={[s.userText, s.userTitle]}>
                                Last name:
                            </Text>
                            {!editLastName ? (
                                <Text style={[s.userText, s.userBody]}>
                                    {userInfo.lastName}
                                </Text>
                            ) : (
                                <TextInput></TextInput>
                            )}

                            <TouchableOpacity onPress={editDataLastName}>
                                <Feather
                                    name="edit"
                                    size={16}
                                    color="rgba(235, 235, 245, 0.8)"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={s.userTextContainer}>
                            <Text style={[s.userText, s.userTitle]}>
                                Login:
                            </Text>
                            {!editLogin ? (
                                <Text style={[s.userText, s.userBody]}>
                                    {userInfo.login}
                                </Text>
                            ) : (
                                <TextInput></TextInput>
                            )}

                            <TouchableOpacity onPress={editDataLogin}>
                                <Feather
                                    name="edit"
                                    size={16}
                                    color="rgba(235, 235, 245, 0.8)"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={s.userTextContainer}>
                            <Text style={[s.userText, s.userTitle]}>
                                Phone:
                            </Text>
                            {!editPhone ? (
                                <Text style={[s.userText, s.userBody]}>
                                    {userInfo.telephone}
                                </Text>
                            ) : (
                                <TextInput></TextInput>
                            )}

                            <TouchableOpacity onPress={editDataPhone}>
                                <Feather
                                    name="edit"
                                    size={16}
                                    color="rgba(235, 235, 245, 0.8)"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={s.userTextContainer}>
                            <Text style={[s.userText, s.userTitle]}>
                                Email:
                            </Text>
                            {!editEmail ? (
                                <Text style={[s.userText, s.userBody]}>
                                    {userInfo.email}
                                </Text>
                            ) : (
                                <TextInput></TextInput>
                            )}

                            <TouchableOpacity onPress={editDataEmail}>
                                <Feather
                                    name="edit"
                                    size={16}
                                    color="rgba(235, 235, 245, 0.8)"
                                />
                            </TouchableOpacity>
                        </View>
                        {!editFirstName &&
                        !editLastName &&
                        !editLogin &&
                        !editPhone &&
                        !editEmail ? (
                            <TouchableOpacity
                                style={s.btnContainer}
                                onPress={() => {
                                    dispatch(resetToken());
                                    dispatch(resetData());
                                }}
                            >
                                <Text style={s.btnText}>Log out</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={s.btnContainer}>
                                <Text style={s.btnText}>Save</Text>
                            </TouchableOpacity>
                        )}
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
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#27282A",
    },
    btnText: {
        color: "#fff",
    },
    userWrapper: {
        display: "flex",
        justifyContent: "center",
        gap: 15,
    },
    userTextContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userText: {
        color: "rgba(235, 235, 245, 0.8)",
        fontSize: 16,
    },
    userTitle: {
        width: 90,
    },
    userBody: {
        flex: 1,
    },
});

export default CabinetPage;
