import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import SvgUri from "expo-svg-uri";
import {useNavigation} from '@react-navigation/native'

const RoleScreen = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1 items-center gap-4 justify-center p-8">
            <SvgUri width="250" height="250" source={require("../assets/svgs/role.svg")} />
            <View className="w-full">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-xl text-gray-900">What's your role?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} className="mb-2 w-full rounded bg-[#C3BEF7] flex-row items-center justify-between p-8">
                <Ionicons name="person-outline" size={24} color="black" />
                <Text style={{fontFamily:'Montserrat_500Medium'}}>Member of COG</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Clogin")} className="w-full rounded bg-[#C3BEF7] flex-row items-center justify-between p-8">
                <Ionicons name="people-outline" size={24} color="black" />
                <Text style={{fontFamily:'Montserrat_500Medium'}}>Member of COGC</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default RoleScreen