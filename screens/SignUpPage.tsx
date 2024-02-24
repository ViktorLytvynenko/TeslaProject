import {FC} from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import {LinearGradient} from "expo-linear-gradient";
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useFormik} from "formik";
import * as Yup from 'yup'

const SignUpPage: FC<any> = ({navigation}) => {
    const onPressGoBack = () => {
        navigation.goBack();
    }
    const formik = useFormik({
        initialValues: {
            country: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        },
        validationSchema: Yup.object({
            country: Yup.string()
                .min(3, 'There should be more characters')
                .max(50, 'There should be less characters')
                .required('Write please your Country'),
            firstName: Yup.string()
                .min(1, 'There should be more characters')
                .max(50, 'There should be less characters')
                .required('Write please your First Name'),
            lastName: Yup.string()
                .min(1, 'There should be more characters')
                .max(50, 'There should be less characters')
                .required('Write please your Last Name'),
            phone: Yup.string()
                .min(1, 'There should be more characters')
                .max(50, 'There should be less characters')
                .required('Write please your Phone'),
            email: Yup.string().email()
                .min(5, 'There should be more characters')
                .max(50, 'There should be less characters')
                .required('Write please your Email'),
        }),
        onSubmit: (values) => {
            console.log("123" + values)
        }
    })
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
                <View>
                    <TextInput
                        id="country"
                        name="country"
                        placeholder="Country"
                        placeholderTextColor="#acafb5"
                        onChange={formik.handleChange}
                        type="text"
                        style={s.input}
                    />
                    <TextInput
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        placeholderTextColor="#acafb5"
                        onChange={formik.handleChange}
                        type="text"
                        style={s.input}
                    />
                    <TextInput
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        placeholderTextColor="#acafb5"
                        onChange={formik.handleChange}
                        type="text"
                        style={s.input}
                    />
                    <TextInput
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        placeholderTextColor="#acafb5"
                        onChange={formik.handleChange}
                        type="text"
                        style={s.input}
                    />
                    <TextInput
                        id="email"
                        name="email"
                        placeholder="Email"
                        placeholderTextColor="#acafb5"

                        style={s.input}
                    />
                    <TouchableOpacity
                        style={s.btn}
                    >
                        <Text style={s.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

const s = StyleSheet.create({
    input: {
        color: "#fff"
    },
    btn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        color: "#fff"
    }
})

export default SignUpPage