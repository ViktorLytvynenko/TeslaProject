import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LockPage from "./screens/LockPage";
import UnlockPage from "./screens/UnlockPage";
import HomePage from "./screens/HomePage";
import OpenCarPage from "./screens/OpenCarPage";
import ClimateCarPage from "./screens/ClimateCarPage";
import ChargeCarPage from "./screens/ChargeCarPage";
import ControlCarPage from "./screens/ControlCarPage";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LockPage"
                screenOptions={{
                    animation: "none",
                }}
            >
                <Stack.Screen
                    name="LockPage"
                    component={LockPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="UnlockPage"
                    component={UnlockPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomePage"
                    component={HomePage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="OpenCarPage"
                    component={OpenCarPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ClimateCarPage"
                    component={ClimateCarPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ChargeCarPage"
                    component={ChargeCarPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ControlCarPage"
                    component={ControlCarPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {},
});
