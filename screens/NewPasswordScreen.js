import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native'



const NewPasswordScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1 items-center justify-center gap-4 p-8">
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl">New Password</Text>
            </View>
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Password</Text>
                <TextInput
                className="w-full p-2 border border-gray-500 rounded"
                placeholder=""
                />
            </View>
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">Confirm Password</Text>
                <TextInput
                className="w-full p-2 border border-gray-500 rounded"
                placeholder=""
                />
            </View>
            <View className="w-full">
                <TouchableOpacity onPress={() => navigation.navigate("Lottie",{msg:"Password changed successfully",nav:"Login"})} className="w-full flex items-center bg-[#C3BEF7] p-4 rounded">
                <Text style={{fontFamily: "Montserrat_500Medium"}} className="">Reset Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NewPasswordScreen