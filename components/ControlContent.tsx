import { FC } from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface IControlContent {
    onPressLock: () => void;
    onPressClimate: () => void;
    onPressCharge: () => void;
    onPressControl: () => void;
}

const ControlContent: FC<IControlContent> = ({
    onPressLock,
    onPressClimate,
    onPressCharge,
    onPressControl,
}) => {
    return (
        <View style={s.controlContainer}>
            <ScrollView
                style={s.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <TouchableWithoutFeedback onPress={onPressLock}>
                    <View style={s.controlItems}>
                        <View style={s.controlOption}>
                            <FontAwesome
                                name="lock"
                                size={35}
                                color="#808080"
                                style={s.conrolImg}
                            />
                            <Text style={s.controlText}>Lock</Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color="#808080"
                            style={s.contolArrow}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onPressClimate}>
                    <View style={s.controlItems}>
                        <View style={s.controlOption}>
                            <MaterialCommunityIcons
                                name="fan"
                                size={33}
                                color="#808080"
                                style={s.conrolImg}
                            />
                            <Text style={s.controlText}>Climate</Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color="#808080"
                            style={s.contolArrow}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onPressCharge}>
                    <View style={s.controlItems}>
                        <View style={s.controlOption}>
                            <MaterialCommunityIcons
                                name="lightning-bolt"
                                size={34}
                                color="#808080"
                                style={s.conrolImg}
                            />
                            <Text style={s.controlText}>Charge</Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color="#808080"
                            style={s.contolArrow}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onPressControl}>
                    <View style={s.controlItems}>
                        <View style={s.controlOption}>
                            <Ionicons
                                name="car-sport-outline"
                                size={34}
                                color="#808080"
                                style={s.conrolImg}
                            />
                            <Text style={s.controlText}>Control</Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color="#808080"
                            style={s.contolArrow}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
};

const s = StyleSheet.create({
    controlContainer: {
        backgroundColor: "#27282A",
        borderRadius: 40,
        width: 330,
        display: "flex",
        justifyContent: "center",
        flex: 1,
        marginRight: "auto",
        marginLeft: "auto",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    controlItems: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20,
    },
    controlOption: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    controlText: {
        color: "#b9bebe",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 24,
        letterSpacing: 0.38,
    },
    conrolImg: {
        marginRight: 20,
        width: 40,
    },
    contolArrow: {},
});

export default ControlContent;
