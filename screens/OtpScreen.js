import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPTextView from 'react-native-otp-textinput';
import {useNavigation} from '@react-navigation/native'




const OtpScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1 items-center gap-4 justify-center p-8">
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl">Enter OTP</Text>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500">An OTP has been sent to</Text>
            </View>
            <View id="otp" className="flex w-full flex-row justify-center items-center">
                <OTPTextView
                    autoFocus={false}
                    className="w-16 h-16 border rounded text-[#8a4fff] caret-[#8a4fff] text-center m-2"
                    inputCount={4}
                    keyboardType="numeric"
                    // handleTextChange={(text) => this.setState({otpInput: text})}
                />
            </View>
            <View className="w-full">
                <TouchableOpacity onPress={() => navigation.navigate('Newpassword')}className="w-full flex items-center bg-[#C3BEF7] p-4 rounded">
                    <Text style={{fontFamily: "Montserrat_500Medium"}} className="">Verify</Text>
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