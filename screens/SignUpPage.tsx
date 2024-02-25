import {FC} from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import {LinearGradient} from "expo-linear-gradient";
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Formik} from 'formik';
import * as Yup from 'yup'

const SignUpPage: FC<any> = ({navigation}) => {
    const onPressGoBack = () => {
        navigation.goBack();
    }
    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
    });
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
                <Formik
                    initialValues={{
                        email: '',
                        phone: '',
                        firstName: '',
                        lastName: ''
                    }}
                    onSubmit={values => console.log(values)}
                    validationSchema={SignUpSchema}
                >
                    {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                        <View style={s.inputContainer}>
                            <TextInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="Email"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                            <TextInput
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                placeholder="Phone"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.phone && touched.phone && <Text style={{ color: 'red' }}>{errors.phone}</Text>}
                            <TextInput
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                                placeholder="First name"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.firstName && touched.firstName && <Text style={{ color: 'red' }}>{errors.firstName}</Text>}
                            <TextInput
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName}
                                placeholder="Last name"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.lastName && touched.lastName && <Text style={{ color: 'red' }}>{errors.lastName}</Text>}
                            <TouchableOpacity
                                onPress={handleSubmit}
                                title="Submit"
                                style={s.btn}
                            >
                                <Text
                                    style={s.btnText}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </LinearGradient>
    )
}

const s = StyleSheet.create({
    inputContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 10,
        marginTop: 20
    },
    input: {
        width: "100%",
        height: 40,
        color: "#fff",
        backgroundColor: "#27282A",
        padding: 0,
        paddingLeft: 10
    },
    btn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 40,
        marginTop: 20,
        backgroundColor: "#27282A"
    },
    btnText: {
        color: "#fff"
    }
})

export default SignUpPage