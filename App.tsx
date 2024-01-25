import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LockPage from "./screens/LockPage";
import UnlockPage from "./screens/UnlockPage";
import HomePage from "./screens/HomePage";

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {},
});
