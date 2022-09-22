import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPTextView from 'react-native-otp-textinput';
import {useNavigation} from '@react-navigation/native'
import server from '../utils/axios';



const OtpScreen = ({route}) => {

    const navigation = useNavigation()
    const {id, expiresIn, user} = route.params;
    const [otpExpire, setOtpExpire] = useState(new Date(expiresIn).toString());
    const [otp, setOtp] = useState('')

    const handleVerifyOtp = async () => {
        try {
            // console.log(id)
            const res = await server({url: '/api/auth/verify-otp', method: 'post', data: {id, otp}});
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const handleResendOtp = async () => {
        try {
            const response = await server({ url: "/api/auth/forgot-password", method:'post', data: {user}});
            setOtpExpire(new Date(response.data.data.expiresIn).toString())
            // console.log(response.data.data.id)
        } catch (error) {
            console.log(error.response.data)
            const {data} = error.response
            if (data.data.type === "alternatives.match"){
                // setError(data.data.path[0])
            }else if (data.message === "auth/account-does-not-exist"){
                // setModalVisible(true)
            }
        }
    };

    return (
        <SafeAreaView className="flex-1 items-center gap-4 justify-center p-8">
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl">Enter OTP</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500">An OTP has been sent to {user} registered Email.</Text>
            </View>
            <View id="otp" className="flex w-full flex-row justify-around items-center">
                <OTPTextView
                    autoFocus={false}
                    className="w-16 h-16 border rounded text-[#8a4fff] caret-[#8a4fff] text-center m-2"
                    inputCount={4}
                    keyboardType="numeric"
                    handleTextChange={(text) => setOtp(`${text}`)}
                />
            </View>
            <View className="w-full">
                <TouchableOpacity onPress={handleVerifyOtp}className="w-full flex items-center bg-[#8A4FFF] p-4 rounded">
                    <Text style={{fontFamily: "Montserrat_500Medium"}} className="text-white">Verify</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full flex-row justify-center">
                <TouchableOpacity>
                    <Text style={{fontFamily: "Montserrat_500Medium"}} className="text-[#8a4fff]">Resend OTP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default OtpScreen