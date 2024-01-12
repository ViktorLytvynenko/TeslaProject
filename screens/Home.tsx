import { FC } from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    Button,
    StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home: FC<any> = ({ navigation }) => {
    return (
        <View style={s.container}>
            <LinearGradient
                colors={["#292C31", "#000", "#000", "#292929"]}
                locations={[0, 0.3009, 0.5735, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={s.container}
            >
                <SafeAreaView>
                    <Button title="Click" />
                </SafeAreaView>
                
            </LinearGradient>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    
});

export default Home;
