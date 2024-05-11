import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";


const AuthLayout = () =>
{

    return (
        <>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
            <StatusBar backgroundColor="white" style="dark" />
        </>
    );
};

export default AuthLayout;