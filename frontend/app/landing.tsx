import {
    Alert,
    Button,
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    StyleSheet,
} from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "@/components/Themed";
import { useAuth } from "@/context/AuthProvider";

export default function LandingScreen() {
    const { user } = useAuth(); // Get user from the AuthProvider
    const [isStreakP, setIsStreakP] = useState<boolean>(false);
    const [isLTP, setIsLTP] = useState<boolean>(false);
    const [isCBP, setIsCBP] = useState<boolean>(false);
    const [isF1P, setIsF1P] = useState<boolean>(false);
    const [isF2P, setIsF2P] = useState<boolean>(false);
    const [isF3P, setIsF3P] = useState<boolean>(false);
    const [isLoginPressed, setIsLoginPressed] = useState<boolean>(false);
    const [isRegisterPressed, setIsRegisterPressed] = useState<boolean>(false);

    // Function to handle press on feature pressables
    const handleFeaturePress = (feature: string) => {
        // If user is logged in, navigate to the respective feature
        if (user) {
            // Handle navigation to respective feature based on the feature name
            switch (feature) {
                case "Sign Language Translation":
                    router.push("/(tabs)");
                    break;
                case "Chat Bot":
                    router.push("/(tabs)/chatbot");
                    break;
                case "Learn Sign Language":
                    router.push("/(tabs)");
                    break;
                default:
                    break;
            }
        } else {
            // If user is not logged in, show alert to login
            Alert.alert(
                "Login Required",
                "Please login to access this feature.",
                [{ text: "Ok" }]
            );
        }
    };

    return (
        <SafeAreaView className="flex flex-1 bg-[#E3F4FE]">
            <Text className="px-4 mt-12 text-xl text-slate-800 mb-[-10] z-30">
                Sign Language Translator
            </Text>
            <View className="overflow-hidden ">
                <ImageBackground
                    source={require("../assets/images/sign-bg.jpg")}
                    className="flex flex-col justify-end w-full h-48 shadow-md "
                >
                    <Text className="px-4 py-2 text-sm font-light text-center text-slate-800">
                        Breaking Barriers, One Sign at a Time
                    </Text>
                </ImageBackground>
            </View>
            <View className="flex-1 p-4 rounded-t-[36px] bg-slate-200 dark:bg-slate-800 mt-2">
                {user && (
                    <View className="bg-transparent ">
                        <View className="flex flex-row items-center w-full mt-4 bg-transparent ">
                            <View className="flex-grow h-[1px] bg-slate-300 dark:bg-slate-600 ml-2"></View>
                            <Text className="mx-2 text-sm tracking-wider text-center">
                                Get Started!
                            </Text>
                            <View className="flex-grow h-[1px] bg-slate-300 dark:bg-slate-600 mr-2"></View>
                        </View>

                        <View className="flex flex-row items-center justify-between bg-transparent ">
                            <Pressable
                                onPress={() =>
                                    handleFeaturePress(
                                        "Sign Language Translation"
                                    )
                                }
                                className={`flex flex-col items-center w-[30%] h-28 p-3 mt-4 ${
                                    isStreakP
                                        ? "bg-gray-100 dark:bg-slate-500"
                                        : "bg-gray-50 dark:bg-slate-600"
                                } shadow-lg rounded-xl`}
                                onPressIn={() => setIsStreakP(true)}
                                onPressOut={() => setIsStreakP(false)}
                            >
                                <Image
                                    source={require("../assets/images/streak.png")}
                                    className="w-16 h-16"
                                />
                                <Text className="text-center">Streak</Text>
                            </Pressable>
                            <Pressable
                                onPress={() =>
                                    handleFeaturePress(
                                        "Sign Language Translation"
                                    )
                                }
                                className={`flex flex-col items-center w-[30%] h-28 p-3 mt-4 ${
                                    isLTP
                                        ? "bg-gray-100 dark:bg-slate-500"
                                        : "bg-gray-50 dark:bg-slate-600"
                                } shadow-lg rounded-xl`}
                                onPressIn={() => setIsLTP(true)}
                                onPressOut={() => setIsLTP(false)}
                            >
                                <Image
                                    source={require("../assets/images/feature-1.png")}
                                    className="w-16 h-16"
                                />
                                <Text className="text-center">Translation</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => handleFeaturePress("Chat Bot")}
                                className={`flex flex-col items-center w-[30%] h-28 p-3 mt-4 ${
                                    isCBP
                                        ? "bg-gray-100 dark:bg-slate-500"
                                        : "bg-gray-50 dark:bg-slate-600"
                                } shadow-lg rounded-xl`}
                                onPressIn={() => setIsCBP(true)}
                                onPressOut={() => setIsCBP(false)}
                            >
                                <Image
                                    source={require("../assets/images/feature-2.png")}
                                    className="w-16 h-16"
                                />
                                <Text className="text-center">Chat Bot</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
                <View className="flex flex-row items-center w-full mt-6 bg-transparent ">
                    <View className="flex-grow h-[1px] bg-slate-300 dark:bg-slate-600 ml-2"></View>
                    <Text className="mx-2 text-sm tracking-wider text-center">
                        Features
                    </Text>
                    <View className="flex-grow h-[1px]  bg-slate-300 dark:bg-slate-600 mr-2"></View>
                </View>
                <Pressable
                    onPress={() =>
                        handleFeaturePress("Sign Language Translation")
                    }
                    className={`flex flex-row items-center w-full mt-4 overflow-hidden ${
                        isF1P
                            ? "bg-pink-300 dark:bg-slate-500"
                            : "bg-pink-200 shadow-lg dark:bg-slate-600"
                    } rounded-2xl`}
                    onPressIn={() => setIsF1P(true)}
                    onPressOut={() => setIsF1P(false)}
                >
                    <Image
                        source={require("../assets/images/feature-1.png")}
                        className="w-16 h-16 dark:bg-pink-200"
                    />
                    <Text className="flex-1 text-center ">
                        Sign Language Translation
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => handleFeaturePress("Chat Bot")}
                    className={`flex flex-row items-center w-full mt-4 overflow-hidden ${
                        isF2P
                            ? "bg-indigo-300 dark:bg-slate-500"
                            : "bg-indigo-200 shadow-lg dark:bg-slate-600"
                    } rounded-2xl`}
                    onPressIn={() => setIsF2P(true)}
                    onPressOut={() => setIsF2P(false)}
                >
                    <Image
                        source={require("../assets/images/feature-2.png")}
                        className="w-16 h-16 dark:bg-indigo-200 "
                    />
                    <Text className="flex-1 text-center ">Chat Bot</Text>
                </Pressable>
                <Pressable
                    onPress={() => handleFeaturePress("Learn Sign Language")}
                    className={`flex flex-row items-center w-full mt-4 overflow-hidden ${
                        isF3P
                            ? "bg-[#E9DFC9] dark:bg-slate-500"
                            : "bg-[#FFF5E4]  shadow-lg dark:bg-slate-600"
                    } rounded-2xl`}
                    onPressIn={() => setIsF3P(true)}
                    onPressOut={() => setIsF3P(false)}
                >
                    <Image
                        source={require("../assets/images/feature-3.png")}
                        className="w-16 h-16 dark:bg-[#FFF5E4]"
                    />
                    <Text className="flex-1 text-center ">
                        Learn Sign Language
                    </Text>
                </Pressable>

                {!user && (
                    <View className="bg-transparent">
                        <View className="flex flex-row items-center w-full mt-6 bg-transparent ">
                            <View className="flex-grow h-[1px] bg-slate-300 dark:bg-slate-600 ml-2"></View>
                            <Text className="mx-2 text-sm tracking-wider text-center">
                                To unlock the full experience
                            </Text>
                            <View className="flex-grow h-[1px]  bg-slate-300 dark:bg-slate-600 mr-2"></View>
                        </View>
                        <View className="flex flex-col items-center mt-6 bg-transparent ">
                            <Pressable
                                onPress={() => router.push("/login")}
                                className={`w-full p-4 ${
                                    isLoginPressed
                                        ? "bg-blue-600"
                                        : "bg-blue-500"
                                } shadow-lg rounded-2xl`}
                                onPressIn={() => setIsLoginPressed(true)}
                                onPressOut={() => setIsLoginPressed(false)}
                            >
                                <Text className="text-center text-white">
                                    Login
                                </Text>
                            </Pressable>

                            <Pressable
                                onPress={() => router.push("/register")}
                                className={`w-full p-4 mt-4 ${
                                    isRegisterPressed
                                        ? "bg-blue-600"
                                        : "bg-blue-500"
                                } shadow-lg rounded-2xl`}
                                onPressIn={() => setIsRegisterPressed(true)}
                                onPressOut={() => setIsRegisterPressed(false)}
                            >
                                <Text className="text-center text-white">
                                    Register
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}
