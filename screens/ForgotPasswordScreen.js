import { View, Text, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useEffect, useState }from 'react'
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import server from '../utils/axios';


const ForgotPasswordScreen = () => {

    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const handleForgotPassword = async () => {
        try {
            const response = await server({ url: "/api/auth/forgot-password", method:'post', data: {user}})
            // console.log(response.data.data.id)
            navigation.navigate("Otp",{id: response.data.data.id, expiresIn: response.data.data.expiresIn, user})
        } catch (error) {
            console.log(error.response.data)
            const {data} = error.response
            if (data.data.type === "alternatives.match"){
                setError(data.data.path[0])
            }else if (data.message === "auth/account-does-not-exist"){
                setModalVisible(true)
            }
        }
    }

    return (
        <SafeAreaView className="flex-1 items-center justify-center gap-4 p-8">
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                >
                <View className="bg-[#ffc10740] flex-row p-4 items-center justify-between">
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-[#ffc107]">Account does not exists</Text>
                    <Pressable
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-[#ffc107]">Close</Text>
                    </Pressable>
                </View>
            </Modal>
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl">Reset Password</Text>
            </View>
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Enter your COG ID / COGC ID / Email </Text>
                <TextInput
                defaultValue={user}
                onChangeText={text => setUser(text)}
                className="w-full p-2 border border-gray-500 rounded"
                placeholder=""
                    />
            </View>
            <View className="w-full">
                <TouchableOpacity onPress={handleForgotPassword} className="w-full flex items-center bg-[#8A4FFF] p-4 rounded">
                    <Text style={{fontFamily: "Montserrat_500Medium"}} className="text-white">Send OTP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPasswordScreen