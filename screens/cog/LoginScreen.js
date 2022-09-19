import { View, Text, TouchableOpacity, Button, TextInput,Modal, Pressable } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, CameraType } from 'expo-camera';
import * as LocalAuthentication from 'expo-local-authentication'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import server from '../../utils/axios';
// import SyncStorage from 'sync-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    
    const [error, setError] = useState("");
    const [input, setInput] = useState({
        user: '',
        password: '',
    })

    const handleChange = (prop) => (value) => {
        setInput((prevInput) => {
            return { ...prevInput, [prop]: value }
        })
        setError("")
    };



    const handleCogLogin = async () => {
        try {
            const res = await server({ url: '/api/auth/login', method: 'post', data: { ...input } })
            console.log(JSON.stringify(res.data.data.loginUser.token))
            AsyncStorage.setItem('user', "true")
        } catch (err) {
            const { data } = err.response;
            console.log(data)
            if (data.message === "app/request-validation-error") {
                if (data.data.type === "alternatives.match") {
                    setError(data.data.path[0])
                }else if (data.data.type === "string.empty") {
                    setError(data.data.path[0])
                }
            }else if (data.message === "auth/account-does-not-exist"){
                setModalVisible(true)
            }else if (data.message === "auth/invalid-password"){
                setError("password")
            }
        }
    }

{
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
}
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                // statusBarTranslucent={true}
                // onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                // setModalVisible(!modalVisible);
                // }}
                >
                {/* <View className="bg-[#FF9494] flex-row p-4 items-center justify-between rounded"> */}
                <View className="bg-[#ffc10740] flex-row p-4 items-center justify-between">
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-[#ffc107]">Account does not exists</Text>
                    <Pressable
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-[#ffc107]">Close</Text>
                    </Pressable>
                </View>
            </Modal>
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl">Login</Text>
            </View>
            <View className="w-full">
            <View className="flex-row items-center gap-2 pb-2">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">COG ID or Email</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "user" ? 'block' : 'hidden'}`}>Invalid ID or Email</Text>
            </View>
                <TextInput
                defaultValue={input.user}
                onChangeText={handleChange('user')}
                className={`w-full p-2 border ${error === "user" ? 'border-red-500' : 'border-gray-500'} rounded`}
                placeholder=""
                    />
            </View>
            <View className="w-full">
                <View className="w-full flex-row justify-between">
                <View className="flex-row items-center gap-2 pb-2">
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Password</Text>
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className={`text-red-500 text-xs mb-2 ${error === "password" ? 'block' : 'hidden'}`}>Invalid Password</Text>
                </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                        <Text style={{fontFamily:'Montserrat_500Medium'}} className="mb-2 text-[#8a4fff]">Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                defaultValue={input.password}
                onChangeText={handleChange('password')}
                className={`w-full p-2 border ${error === "password" ? 'border-red-500' : 'border-gray-500'} rounded`}
                placeholder=""
                />
            </View>
            <View className="w-full">
                <TouchableOpacity onPress={handleCogLogin} className={`w-full flex items-center bg-[#C3BeF7] p-4 rounded`}>
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