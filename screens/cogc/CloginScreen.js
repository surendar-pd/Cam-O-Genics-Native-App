import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native'


const CloginScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1 items-center justify-center gap-4 p-8">
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl">Login</Text>
            </View>
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-gray-500 mb-2">COGC ID or Email</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate('Csignup')}>
                    <Text style={{fontFamily: "Montserrat_500Medium"}} className="text-[#8a4fff]">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CloginScreen