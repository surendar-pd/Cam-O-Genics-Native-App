import { View, Text, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState, useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPTextView from 'react-native-otp-textinput';
import { formatDistance, format } from 'date-fns'
import server from '../utils/axios';



const OtpScreen = ({ route }) => {

    const navigation = useNavigation()
    const { id, expiresIn, user } = route.params;
    const [nowTime, setNowTime] = useState(Date.now());
    const [otpExpire, setOtpExpire] = useState(expiresIn);
    const [resendOtpTime, setResendOtpTime] = useState(Date.now() + (1000 * 30)) // Allow otp only after a min
    const [allowResend, setAllowResend] = useState(true);
    const [otp, setOtp] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [resendOtpText, setResendOtpText] = useState(false);


    const otpExpireTime = useMemo(() => {
        return formatDistance(nowTime, otpExpire);
    }, [nowTime, otpExpire]);

    const currentTime = useMemo(() => {
        return format(nowTime, 'p');
    }, [nowTime]);

    const handleVerifyOtp = async () => {
        try {
            // console.log(id)
            const res = await server({ url: '/api/auth/verify-otp', method: 'post', data: { id, otp } });
            console.log(res.data);
            navigation.navigate('Newpassword', { ...res.data.data.user });
        } catch (error) {
            if(error.response.data.message){
                setModalVisible(true)
            }
            console.log(error.response.data.message);
        }
    };

    const handleResendOtp = async () => {
        setAllowResend(true);
        setResendOtpTime(Date.now() + (1000 * 30))
        try {
            const response = await server({ url: "/api/auth/forgot-password", method: 'post', data: { user } });
            setResendOtpText(true)
            setOtpExpire(response.data.data.expiresIn);
            console.log(response.data.data.id)
        } catch (error) {
            setResendOtpText(false)
            console.log(error.response.data)
            const { data } = error.response
            if (data.data.type === "alternatives.match") {
                // setError(data.data.path[0])
            } else if (data.message === "auth/account-does-not-exist") {
                // setModalVisible(true)
            }
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNowTime(Date.now())
            if(nowTime >= resendOtpTime){
                setAllowResend(false);
            }
        }, 1000)
        return () => clearInterval(intervalId);
    }, []);

    return (
        <SafeAreaView className="flex-1 items-center gap-4 justify-center p-8">
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
                <View className="bg-[#C0353770] flex-row p-4 items-center justify-between">
                    <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-[#C03537]">OTP is either Invalid or Expired</Text>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-[#C03537]">Close</Text>
                    </Pressable>
                </View>
            </Modal>
            <View className="w-full">
                <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-4xl">Enter OTP</Text>
                <Text style={{ fontFamily: 'Montserrat_500Medium' }} className="text-gray-500">An OTP has been sent to {user} registered Email.</Text>
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
                <TouchableOpacity onPress={handleVerifyOtp} className="w-full flex items-center bg-[#8A4FFF] p-4 rounded">
                    <Text style={{ fontFamily: "Montserrat_500Medium" }} className="text-white">Verify</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full flex-row justify-center">
                <TouchableOpacity disabled={allowResend} onPress={handleResendOtp}>
                    <Text style={{ fontFamily: "Montserrat_500Medium" }} className={`${allowResend ? "text-gray-500" : "text-[#8a4fff]"}`}>Resend OTP</Text>
                </TouchableOpacity>
                <Text style={{ fontFamily: "Montserrat_500Medium" }} className={`${resendOtpText ? "text-green-500 ml-4" : "hidden"}`}>OTP Resent</Text>
            </View>
        </SafeAreaView>
    )
}

export default OtpScreen