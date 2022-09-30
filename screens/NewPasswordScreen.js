import { View, Text, TextInput, TouchableOpacity,  BackHandler} from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import server from '../utils/axios';

const NewPasswordScreen = ({ route }) => {

    const navigation = useNavigation();
    const { token } = route.params;
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('')
    // console.log(token)

    const handleResetPassword = async () => {
        try {
            if (password !== confirmPassword) { setError("password.match"); return; };
            const res = await server({ url: '/api/auth/reset-password', method: 'post', data: { token, password } });
            console.log(res.data);
            navigation.navigate("Lottie", { msg: "Password changed successfully", nav: "Login" })
        } catch (err) {
            const { data } = err.response;
            if (data.message === "app/request-validation-error") {
                if (data.data.type === "string.empty") {
                    setError(data.data.path[0])
                }
                else if (data.data.type === "string.pattern.base") {
                    setError(`${data.data.path[0]}.pattern`)
                }
            }
            console.log(data)
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
            return true;
            };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, []),
    );

    return (
        <SafeAreaView className="flex-1 items-center justify-center gap-4 p-8">
            <View className="w-full">
                <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-4xl">New Password</Text>
            </View>
            <View className="w-full">
                <View className="flex-row items-center gap-2 pb-2">
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-gray-500 mb-2">Password</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "password.match" ? 'block' : 'hidden'}`}>Passwords does not match</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "password" ? 'block' : 'hidden'}`}>Field cannot be empty</Text>
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className={`text-red-500 text-xs mb-2 ${error === "password.pattern" ? 'block' : 'hidden'}`}>Minimum 6 characters, with number, text, and special characters</Text>
                </View>
                <TextInput
                    className="w-full p-2 border border-gray-500 rounded"
                    placeholder=""
                    onChangeText={(text) => setPassword(text)}
                    defaultValue={password}
                />
            </View>
            <View className="w-full">
                <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-gray-500 mb-2">Confirm Password</Text>
                <TextInput
                    className="w-full p-2 border border-gray-500 rounded"
                    placeholder=""
                    onChangeText={(text) => setConfirmPassword(text)}
                    defaultValue={confirmPassword}
                />
            </View>
            <View className="w-full">
                <TouchableOpacity onPress={handleResetPassword} className="w-full flex items-center bg-[#8A4FFF] p-4 rounded">
                    <Text style={{ fontFamily: "Montserrat_500Medium" }} className="text-white">Reset Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NewPasswordScreen