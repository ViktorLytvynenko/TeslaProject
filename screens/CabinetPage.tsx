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
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { resetToken } from "../redux/slices/usersSignIn";
import { editUser, resetData } from "../redux/slices/currentUser";
import { Feather } from "@expo/vector-icons";
import { changeForm } from "../redux/slices/usersSignUp";

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

    const CabinetSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        telephone: Yup.string().required("Phone is required"),
        firstName: Yup.string()
            .required("First name is required")
            .min(2, "Too short!")
            .max(35, "Too long!"),
        lastName: Yup.string()
            .required("Last name is required")
            .min(2, "Too short!")
            .max(35, "Too long!"),
        login: Yup.string()
            .required("Login is required")
            .min(4, "Too short!")
            .max(30, "Too long!"),
    });

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
                        <Formik
                            initialValues={{
                                email: userInfo.email,
                                telephone: userInfo.telephone,
                                firstName: userInfo.firstName,
                                lastName: userInfo.lastName,
                                login: userInfo.login,
                            }}
                            onSubmit={async (values) => {
                                console.log(values);
                            }}
                            validationSchema={CabinetSchema}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                            }) => (
                                <>
                                    <View style={s.userTextContainer}>
                                        <Text style={[s.userText, s.userTitle]}>
                                            First name:
                                        </Text>
                                        {!editFirstName ? (
                                            <Text
                                                style={[s.userText, s.userBody]}
                                            >
                                                {userInfo.firstName}
                                            </Text>
                                        ) : (
                                            <View>
                                                <TextInput
                                                    onChangeText={(newText) => {
                                                        handleChange(
                                                            "firstName"
                                                        )(newText);
                                                        dispatch(
                                                            editUser({
                                                                type: "firstName",
                                                                value: newText,
                                                            })
                                                        );
                                                    }}
                                                    onBlur={handleBlur(
                                                        "firstName"
                                                    )}
                                                    value={values.firstName}
                                                    placeholder="First name"
                                                    placeholderTextColor="#acafb5"
                                                    style={[
                                                        s.userText,
                                                        s.userBody,
                                                    ]}
                                                />
                                                {errors.firstName &&
                                                    touched.firstName && (
                                                        <Text
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {errors.firstName}
                                                        </Text>
                                                    )}
                                            </View>
                                        )}

                                        <TouchableOpacity
                                            onPress={editDataFirstName}
                                        >
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
                                            <Text
                                                style={[s.userText, s.userBody]}
                                            >
                                                {userInfo.lastName}
                                            </Text>
                                        ) : (
                                            <View>
                                                <TextInput
                                                    onChangeText={(newText) => {
                                                        handleChange(
                                                            "lastName"
                                                        )(newText);
                                                        dispatch(
                                                            editUser({
                                                                type: "lastName",
                                                                value: newText,
                                                            })
                                                        );
                                                    }}
                                                    onBlur={handleBlur(
                                                        "lastName"
                                                    )}
                                                    value={values.lastName}
                                                    placeholder="Last name"
                                                    placeholderTextColor="#acafb5"
                                                    style={[
                                                        s.userText,
                                                        s.userTitle,
                                                    ]}
                                                />
                                                {errors.lastName &&
                                                    touched.lastName && (
                                                        <Text
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {errors.lastName}
                                                        </Text>
                                                    )}
                                            </View>
                                        )}

                                        <TouchableOpacity
                                            onPress={editDataLastName}
                                        >
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
                                            <Text
                                                style={[s.userText, s.userBody]}
                                            >
                                                {userInfo.login}
                                            </Text>
                                        ) : (
                                            <View>
                                                <TextInput
                                                    onChangeText={(newText) => {
                                                        handleChange("login")(
                                                            newText
                                                        );
                                                        dispatch(
                                                            editUser({
                                                                type: "login",
                                                                value: newText,
                                                            })
                                                        );
                                                    }}
                                                    onBlur={handleBlur("login")}
                                                    value={values.login}
                                                    placeholder="Login"
                                                    placeholderTextColor="#acafb5"
                                                    style={[
                                                        s.userText,
                                                        s.userBody,
                                                    ]}
                                                />
                                                {errors.login &&
                                                    touched.login && (
                                                        <Text
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {errors.login}
                                                        </Text>
                                                    )}
                                            </View>
                                        )}

                                        <TouchableOpacity
                                            onPress={editDataLogin}
                                        >
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
                                            <Text
                                                style={[s.userText, s.userBody]}
                                            >
                                                {userInfo.telephone}
                                            </Text>
                                        ) : (
                                            <View>
                                                <TextInput
                                                    onChangeText={(newText) => {
                                                        handleChange(
                                                            "telephone"
                                                        )(newText);
                                                        dispatch(
                                                            editUser({
                                                                type: "telephone",
                                                                value: newText,
                                                            })
                                                        );
                                                    }}
                                                    onBlur={handleBlur(
                                                        "telephone"
                                                    )}
                                                    value={values.telephone}
                                                    placeholder="Phone"
                                                    placeholderTextColor="#acafb5"
                                                    style={[
                                                        s.userText,
                                                        s.userBody,
                                                    ]}
                                                />
                                                {errors.telephone &&
                                                    touched.telephone && (
                                                        <Text
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {errors.telephone}
                                                        </Text>
                                                    )}
                                            </View>
                                        )}

                                        <TouchableOpacity
                                            onPress={editDataPhone}
                                        >
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
                                            <Text
                                                style={[s.userText, s.userBody]}
                                            >
                                                {userInfo.email}
                                            </Text>
                                        ) : (
                                            <View>
                                                <TextInput
                                                    onChangeText={(newText) => {
                                                        handleChange("email")(
                                                            newText
                                                        );
                                                        dispatch(
                                                            editUser({
                                                                type: "email",
                                                                value: newText,
                                                            })
                                                        );
                                                    }}
                                                    onBlur={handleBlur("email")}
                                                    value={values.email}
                                                    placeholder="Email"
                                                    placeholderTextColor="#acafb5"
                                                    style={[
                                                        s.userText,
                                                        s.userBody,
                                                    ]}
                                                />
                                                {errors.email &&
                                                    touched.email && (
                                                        <Text
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        >
                                                            {errors.email}
                                                        </Text>
                                                    )}
                                            </View>
                                        )}

                                        <TouchableOpacity
                                            onPress={editDataEmail}
                                        >
                                            <Feather
                                                name="edit"
                                                size={16}
                                                color="rgba(235, 235, 245, 0.8)"
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity
                                        style={s.btnContainer}
                                        onPress={handleSubmit}
                                        title="Submit"
                                    >
                                        <Text style={s.btnText}>Save</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={s.btnContainer}
                                        onPress={() => {
                                            dispatch(resetToken());
                                            dispatch(resetData());
                                        }}
                                    >
                                        <Text style={s.btnText}>Log out</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </Formik>
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
