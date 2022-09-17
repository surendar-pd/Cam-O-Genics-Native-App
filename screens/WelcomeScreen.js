import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import SvgUri from "expo-svg-uri";
import {useNavigation} from '@react-navigation/native'


const WelcomeScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1 items-center justify-center p-8">
            <View className="w-full">
                <View className="flex items-center gap-2 mb-4">
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-4xl text-center">Cam O Genics</Text>
                    <SvgUri width="250" height="250" source={require("../assets/svgs/welcome.svg")} />
                    {/* <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-lg text-gray-500">What's your role?</Text> */}
                </View>
                <View className="w-full flex gap-2">
                    <TouchableOpacity className="w-full rounded bg-[##C3BEF7] flex-row items-center justify-center p-8">
                        <Text style={{fontFamily:'Montserrat_500Medium'}}>Open Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Role")} className="w-full rounded bg-[#C3BEF7] flex-row items-center justify-center p-8">
                        <Text style={{fontFamily:'Montserrat_500Medium'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen