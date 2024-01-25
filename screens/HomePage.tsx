import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import { FC } from "react";
import { FontAwesome } from "@expo/vector-icons";
import stylesBase from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";

const HomePage: FC<any> = () => {
    return (
        <View style={stylesBase.container}>
            <LinearGradient
                colors={["#292C31", "#292C31", "#2D2C31"]}
                locations={[0, 0.7287, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={stylesBase.container}
            >
                <View>
                    <Text>Tesla</Text>
                    <View>
                        <FontAwesome
                            name="battery-3"
                            size={24}
                            color="#808080"
                        />
                        <Text>187 km</Text>
                    </View>
                    <TouchableWithoutFeedback>
                        <Image
                            source={require("../assets/acount.png")}
                            style={s.acountBtn}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <Image
                    source={require("../assets/carHome.png")}
                    style={s.carHomeImg}
                />
            </LinearGradient>
        </View>
    );
};

const s = StyleSheet.create({
    acountBtn: {
        width: 72,
        height: 72,
    },
    carHomeImg: {
        width: 388,
        height: 254,
    },
});
export default HomePage;
