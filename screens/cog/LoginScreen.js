import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, CameraType } from 'expo-camera';
import * as LocalAuthentication from 'expo-local-authentication'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {

    const navigation = useNavigation()

    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible)
        })();
    })

    const fallBackToDefaultAuth = () => {
        console.log('Fallback to default')
    };

    const alertComponent = (title, mess, btnTxt, btnFunc) => {
        return Alert.alert(title, mess, [
            {
                text: btnTxt,
                onPress: btnFunc,
            }
        ])
    }

    const authenticated = () => {
        navigation.replace('Home')
    }

    const handleBiometricAuth = async () => {
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

        if(!isBiometricAvailable)
            return alertComponent(
                "please enter your password",
                "biometric auth not supported",
                "ok",
                () => fallBackToDefaultAuth()
            );
        
            let supportedBiometrics;
            if(isBiometricAvailable)
                supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync()

            const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
            if(!savedBiometrics)
                return alertComponent(
                    "biometric record not found",
                    "please enter your password",
                    "ok",
                    () => fallBackToDefaultAuth()
                )

            const biometricAuth = await LocalAuthentication.authenticateAsync({
                promptMessage: "Login with biometrics",
                cancelLabel: "Login with PIN",
                disableDeviceFallback: true,
            });

            if (biometricAuth) {authenticated()};
            console.log({isBiometricAvailable})
            console.log({supportedBiometrics})
            console.log({savedBiometrics})
            console.log({biometricAuth})
    }   

    // const [hasPermission, setHasPermission] = useState(null);
    // const [type, setType] = useState(CameraType.back);

    // useEffect(() => {
    //     (async () => {
    //         const { status } = await Camera.requestCameraPermissionsAsync();
    //         setHasPermission(status === 'granted');
    //     })();
    // }, []);

    // if (hasPermission === null) {
    //     return <View />;
    // }
    // if (hasPermission === false) {
    //     return <Text>No access to camera</Text>;
    // }
    // return (
    //     <View className="flex-1 bg-red-500">
    //     <Camera type={type} className="flex-1">
    //         <View className="flex-1 bg-transparent flex-row m-20">
    //         <TouchableOpacity
    //             onPress={() => {
    //             setType(type === CameraType.back ? CameraType.front : CameraType.back);
    //             }}>
    //             <Text className="text-white"> Flip </Text>
    //         </TouchableOpacity>
    //         </View>
    //     </Camera>
    //     </View>
    // );
    return (
        <SafeAreaView className="flex-1 items-center justify-center gap-4 p-8">
            {/* <Text className="text-red-500">LoginScreen</Text> */}
            {/* <View className="bg-[#C3BEF7] rounded h-fit m-8 flex flex-row items-end">
                <TouchableOpacity className="flex flex-row items-center justify-center p-2">
                <MaterialIcons name="fingerprint" size={24} color="black" />
                    <Text
                        className="pl-2"
                        onPress={handleBiometricAuth}
                    >Use Fingerprint</Text>
                </TouchableOpacity>
            </View> */}
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl">Login</Text>
            </View>
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">COG ID or Email</Text>
                <TextInput
                className="w-full p-2 border border-gray-500 rounded"
                placeholder=""
                    />
            </View>
            <View className="w-full">
                <View className="w-full flex-row justify-between">
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Password</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                        <Text style={{fontFamily:'Montserrat_500Medium'}} className="mb-2 text-[#8a4fff]">Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                className="w-full p-2 border border-gray-500 rounded"
                placeholder=""
                />
            </View>
            <View className="w-full">
                <TouchableOpacity className="w-full flex items-center bg-[#C3BEF7] p-4 rounded">
                <Text style={{fontFamily: "Montserrat_500Medium"}} className="">Login</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full flex-row justify-center">
                <Text style={{fontFamily: "Montserrat_500Medium"}}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{fontFamily: "Montserrat_500Medium"}} className="text-[#8a4fff]">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen